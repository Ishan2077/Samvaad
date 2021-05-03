/* eslint-disable no-trailing-spaces */
<template>
  <q-page class="q-pa-lg">
    <h4 class="q-mt-none q-mb-md text-weight-bold">About Samvaad</h4>
    <div class="text-body1">
    <p><b>Samvaad</b> - A <b>Made In India</b> initiative that brings everyone together. You can share, communicate, catch up with the lastest news and do
      much more besides. <br>
      We bring novel ideas to life and make communication more accessible than ever before!
    </p>
    <div class="q-pa-md">
    <div class="q-gutter-md">
      <q-carousel
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        control-color="white"
        navigation
        padding
        arrows
        height="350px"
        class="bg-primary text-white shadow-1 rounded-borders"
      >
        <q-carousel-slide name="welcome" class="column no-wrap flex-center">
          <q-icon name="whatshot" size="56px" />
          <div class="q-mt-md text-center">
            {{ slide1 }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="email_icon" class="column no-wrap flex-center">
          <q-icon name="alternate_email" size="56px" />
          <div class="q-mt-md text-center">
            {{ slide2 }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="share_button" class="column no-wrap flex-center">
          <q-icon name="ios_share" size="56px" />
          <div class="q-mt-md text-center">
            {{ slide3 }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="chat" class="column no-wrap flex-center">
          <q-icon name="question_answer" size="56px" />
          <div class="q-mt-md text-center">
            {{ slide4 }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="news" class="column no-wrap flex-center">
          <q-icon name="timeline" size="56px" />
          <div class="q-mt-md text-center">
            {{ slide5 }}
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageHome',
  data () {
    return {
      slide: 'style',
      slide1: 'Welcome to Samvaad!',
      slide2: 'Connect',
      slide3: 'Share',
      slide4: 'Chat',
      slide5: 'Catch up with the latest news'
    }
  }
}
</script>

<style scoped>
ul.list-styles{
   list-style-type: disc;
}
</style>
