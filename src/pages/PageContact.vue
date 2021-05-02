<template>
  <q-page class="q-pa-sm">
    <h4 class="q-mt-none q-mb-md text-weight-bold">Contact Us</h4>
    <div class="text-body1">
    <p>
      For any queries or complaints, kindly fill this form. We will look into your feedback and get back to you shortly!
    <br>
    </p>
    <!--<div class="q-pa-md">
      <div class="q-gutter-md" style="max-width: 300px">
        <q-input v-model="text" label="Your Name *" required/>
        <q-input v-model="text" label="Email Address *" required type="email"/>
        <q-input v-model="password" filled :type="isPwd ? 'password' : 'text'" hint="Kindly enter your password(To check it's you :p)">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
         <q-input
            v-model="text"
            filled
            type="textarea"
          />
      </div>
    <div class="q-gutter-y-md column" style="max-width: 300px">
      <q-file color="grey-6" v-model="model" label="Add file(s)">
        <template v-slot:prepend>
          <q-icon name="attach_file" />
        </template>
      </q-file>
    </div>
    </div>
    <footer>For general suggestions and more, kindly refer to the <b>Mouthoff</b> section.</footer>
   --> </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageHome'
}
</script>
