<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute fullscreen">
      <div class="q-py-lg q-px-md row items-end q-col-gutter-md">
        <div class="col">
          <q-input
            v-model="newQweetContent"
            class="new-qweet"
            placeholder="What's happening?"
            maxlength="280"
            bottom-slots
            counter
            autogrow
          >
            <template v-slot:before>
              <q-avatar size="xl">
                <img src="https://cdn.quasar.dev/img/avatar5.jpg">
              </q-avatar>
            </template>
          </q-input>
        </div>
        <div class="col col-shrink">
          <q-btn
            @click ="addNewQweet"
            :disable="!newQweetContent"
            class="q-mb-lg"
            color="primary"
            label="Qweet"
            rounded
            unelevated
            no-caps
          />
        </div>
      </div>

      <q-separator
        class="border"
        color="grey-2"
        size="10px"
      />
    <q-list separator>
      <transition-group
      appear
      enter-active-class="animated slideInDown slow"
      leave-active-class="animated zoomOut slow"
      >
      <q-item
            v-for="qweet in qweets"
            :key="qweet.date"
            class="qweet q-py-md"
          >
            <q-item-section avatar top>
              <q-avatar size="xl">
                <img src="https://cdn.quasar.dev/img/avatar5.jpg">
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label class="text-subtitle1">
                <strong>Ishan Sharma</strong>
                <span class="text-grey-7">
                  @ishansharma
                  <br class="lt-md">&bull; {{ qweet.date | relativeDate}}
                </span>
                </q-item-label>
              <q-item-label class="new-qweet text-body1">
                {{qweet.content}}
              </q-item-label>
              <div class="qweet-icons row justify-between q-mt-sm">
                <q-btn
                  color="grey"
                  icon="far fa-comments"
                  size="sm"
                  flat
                  round
                />
                <q-btn
                  color="grey"
                  icon="fas fa-asterisk"
                  size="sm"
                  flat
                  round
                />
                <q-btn
                    flat
                    round
                    color="grey"
                    size="sm"
                    icon="fas fa-heart"
                />
                <q-btn
                  @click="deleteQweet(qweet)"
                  color="grey"
                  icon="fas fa-trash-alt"
                  size="sm"
                  flat
                  round
                />
              </div>
            </q-item-section>
      </q-item>
      </transition-group>
    </q-list>
    </q-scroll-area>
  </q-page>
</template>

<script>
import db from 'src/boot/firebase'
import { formatDistance } from 'date-fns'
export default {
  name: 'PageHome',
  // data () {
  //   return {
  //     newQweetContent: '',
  //     qweets: [
  //       {
  //         content: 'Be your own hero, its cheaper than a movie ticket.',
  //         date: 1617645043956
  //       },
  //       {
  //         content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed feugiat justo id viverra consequat. Integer feugiat lorem faucibus est ornare scelerisque. Donec tempus, nunc vitae semper sagittis, odio magna semper ipsum, et laoreet sapien mauris vitae arcu.',
  //         date: 1617645043967
  //       }
  //     ]
  //   }
  // },
  methods: {
    addNewQweet () {
      const newQweet = {
        content: this.newQweetContent,
        date: Date.now()
      }
      // this.qweets.unshift(newQweet)
      db.collection('qweets').add(newQweet).then((docRef) => {
        console.log('Document written with ID: ', docRef.id)
      })
        .catch((error) => {
          console.error('Error adding document: ', error)
        })
      this.newQweetContent = ''
    },
    deleteQweet (qweet) {
      const dateToDelete = qweet.date
      const index = this.qweets.findIndex(qweet => qweet.date === dateToDelete)
      this.qweets.splice(index, 1)
    }
  },
  filters: {
    relativeDate (value) {
      return formatDistance(value, new Date())
    }
  },
  mounted () {
    db.collection('qweets').orderBy('date').onSnapshot((snapshot) => {
      snapshot.docChanges().forEach((change) => {
        const qweetChange = change.doc.data()
        if (change.type === 'added') {
          console.log('New qweet: ', qweetChange)
          this.qweets.unshift(qweetChange)
        }
        if (change.type === 'modified') {
          console.log('Modified qweet: ', qweetChange)
        }
        if (change.type === 'removed') {
          console.log('Removed qweet: ', qweetChange)
        }
      })
    })
  }
}
</script>

<style lang="sass">
.new-qweet
  textarea
    font-size: 19px
    line-height: 1.4 !important
.divider
  border-top: 1px solid
  border-bottom: 1px solid
  border-color: $grey-4
.qweet:not(:first-child)
  border-top: 1px solid rgba(0,0,0,0.12)
.qweet-content
  white-space: pre-line
.qweet-icons
  margin-left: -5px
</style>
