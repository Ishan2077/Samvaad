<template>
  <q-layout view="lHr lpR fFf">

    <q-header bordered class="bg-grey-10 text-grey-1">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title class="text-weight-bold">
          <span class="gt-sm">{{$route.name}}</span>
          <q-icon class = "header-icon q-pa-md lt-md" name="polymer" size="40px" color="brown-7"/>
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" :width="255" side="left" bordered>
      <q-icon class = "q-pa-md" name="polymer" size="60px" color="brown-7"/> <!-- pa is for automatic padding-->
    <q-list bordered>
      <q-item to="/" clickable v-ripple exact>
        <q-item-section avatar>
          <q-icon name="other_houses" size="md" />
        </q-item-section>
        <q-item-section class="text-h6 text-weight-bold">Home</q-item-section>
      </q-item>
          <q-item to="/about" clickable v-ripple exact>
        <q-item-section avatar>
          <q-icon name="help" size="md" />
        </q-item-section>
        <q-item-section class="text-h6 text-weight-bold">About</q-item-section>
      </q-item>
      <q-item to="/contact" clickable v-ripple exact>
      <q-item-section avatar>
          <q-icon name="support_agent" size="md" />
        </q-item-section>
        <q-item-section class="text-h6 text-weight-bold">Contact</q-item-section>
      </q-item>
      <q-item to="/mouthoff" clickable v-ripple exact>
      <q-item-section avatar>
          <q-icon name="speaker_notes" size="md" />
        </q-item-section>
        <q-item-section class="text-h6 text-weight-bold">Mouthoff</q-item-section>
      </q-item>
      <q-item to="/legal" clickable v-ripple exact>
        <q-item-section avatar>
          <q-icon name="work" size="md" />
        </q-item-section>
        <q-item-section class="text-h6 text-weight-bold">Legal</q-item-section>
      </q-item>
    </q-list>
    </q-drawer>

    <q-drawer show-if-above v-model="right" side="right" bordered>
       <q-input placeholder="Search Here . . ." outlined rounded class="q-ma-md" dense>
        <template v-slot:prepend>
          <q-icon name="manage_search" />
        </template>
       </q-input>
       <q-list separator padding>
      <q-item class="q-pa-md">
        <q-item-section>
          <q-item-label overline class="text-grey">Video Games</q-item-label>
          <q-item-label class="text-weight-bold" size="14px">Grand Theft Auto VI rumours are up again!</q-item-label>
          <q-item-label caption> Whoooops. Another week, another (fake)leak :(</q-item-label>
        </q-item-section>
      <q-item-section side top>
          <q-item-label caption>5 mins ago</q-item-label>
      </q-item-section>
      </q-item>
      <q-item class="q-pa-md">
        <q-item-section>
          <q-item-label overline class="text-grey">Movies</q-item-label>
          <q-item-label class="text-weight-bold" size="14px">Upcoming movies in Spring!</q-item-label>
          <q-item-label caption> Read what people are really excited for!</q-item-label>
        </q-item-section>
      <q-item-section side top>
          <q-item-label caption>10 mins ago</q-item-label>
      </q-item-section>
      </q-item>
      <q-item class="q-pa-md">
        <q-item-section>
          <q-item-label overline class="text-grey">Education</q-item-label>
          <q-item-label class="text-weight-bold" size="14px">Online/Offline Classes?</q-item-label>
          <q-item-label caption> What's better? See what others think about it . . .</q-item-label>
        </q-item-section>
      <q-item-section side top>
          <q-item-label caption>11 mins ago</q-item-label>
      </q-item-section>
      </q-item>
       </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  data () {
    return {
      left: false,
      right: false
    }
  }
}
</script>
<style lang="sass">
.header-icon
  position: absolute
  bottom: -25%
  left: 50%
  right: 50%
  transform: translateX(-50%)
</style>
