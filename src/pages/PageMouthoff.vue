<template>
  <q-page class="q-pa-sm">
    <h4 class="q-mt-none q-mb-md text-weight-bold">Mouthoff</h4>
    <div class="text-body1">
      <p class="text-deep-purple">The official way to stay even more connected! Friends, Right? :)</p>
      <p> Anything you want us to tell, be it your feedback, to request a feature, some jokes or any general suggestion on how we can improve, please drop an e-mail on the following address:<br>
      <i>Please note that any Support service(s) will <b>not</b> be entertained through this section. Kindly visit the <b>Contact</b> page for more details.</i> </p>
      <h6 class="q-mt-none">Thank you so much for your support! Hope we receive some cool things :')</h6>
    </div>
    <div class="q-pa-md" style="max-width: 300px">
      <div class="q-gutter-md text-weight-bold">
        <q-select v-model="model" :options="options" option-label="choose" label="Sup*? :)" :required="true"/>
        <q-file filled bottom-slots v-model="model" label="Label" counter>
        <template v-slot:prepend>
          <q-icon name="cloud_upload" @click.stop />
        </template>
        <template v-slot:append>
          <q-icon name="close" @click.stop="model = null" class="cursor-pointer" />
        </template>

        <template v-slot:hint>
          Field hint
        </template>
      </q-file>
      </div>
    </div>
  </q-page>
</template>
<script>
export default {
  name: 'PageHome',
  data () {
    return {
      options: [
        { choose: 'Happy AF' },
        { choose: 'IDK' },
        { choose: 'Keep your mouth shut, you hear' }
      ],
      model: [
        {}
      ]
    }
  }
}
</script>
