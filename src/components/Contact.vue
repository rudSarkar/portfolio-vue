<template>
  <v-container
    fluid
    grid-list-lg
  >
    <h1>Contact</h1>
    <p style="margin-bottom: 20px;">Hire me.</p>
    <v-layout row wrap class="justify-center">
      <v-form
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-text-field
            outline
            v-model="name"
            :counter="10"
            :rules="nameRules"
            label="Name"
            required
          ></v-text-field>

          <v-text-field
            outline
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>

          <v-textarea
            outline
            v-model="message"
            :rules="messageRules"
            label="Message"
            :counter="255"
            placeholder="Your messages ..."
            required
          ></v-textarea>

          <v-btn
            :disabled="!valid"
            color="success"
            @click="validate"
          >
            Send Message
          </v-btn>

          <v-btn
            color="error"
            @click="reset"
          >
            Reset Form
          </v-btn>

          <v-btn
            color="warning"
            @click="resetValidation"
          >
            Reset Validation
          </v-btn>
        </v-form>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Contact',
  data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      message: '',
      messageRules: [
        v => !!v || 'Message is required',
        v => (v && v.length <= 255) || 'Message must be less than 255 characters'
      ]
    }),

    methods: {
      validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
        }
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      }
    }
}
</script>


<style scoped>

</style>