<template>
  <q-page class="q-pa-sm">
    <h4 class="q-mt-none q-mb-md text-weight-bold">Mouthoff</h4>
    <div class="text-body1">
      <q-banner class="bg-yellow-4">
        <template v-slot:avatar>
          <q-icon name="online_prediction" color="dark" />
        </template>
        <div class="text-weight-bold">
          We are receiving huge number of requests at the moment. Kindly wait for <big>7</big> business days for our Mouthoff Support Executive to reach out to you. Sorry for the inconvenience :(
        </div>
    </q-banner>
      <br>
      <p class="text-deep-purple">The official way to stay even more connected! Friends, Right? :)</p>
      <p> Anything you want us to tell, be it your feedback, to request a feature, some jokes or any general suggestion on how we can improve, please drop an e-mail on the following address:<br>
      <i>Please note that any Support service(s) will <b>not</b> be entertained through this section. Kindly visit the <b>Contact</b> page for more details.</i> </p>
      </div>
  </q-page>
</template>
<script>
export default {
  name: 'PageHome',
  data () {
    return {
      model: [
        {}
      ]
    }
  }
}
</script>
