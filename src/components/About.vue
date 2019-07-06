<template>
  <v-container grid-list-md text-xs-center>
    <v-layout wrap>
      <v-flex xs12 sm3>
        <div class="text-right sm-text-left">
            <h2 class="margin-b-0">Intro</h2>
            <p>What I am all about.</p>
        </div>
      </v-flex>
      <v-flex xs12 sm8 offset-xs1>
            <div class="margin-b-60 text-left">
                <p>
                    I'm Rudra Sarkar, I am back-end developer and Security Researcher.
                </p>
                <p>
                    Rudra is working with a Anti-Malware Software called "Tigris Anti-Malware" by GeekSoft Technology.He know Python, Matplotlib Module of Python, PHP, Laravel Framework 5.8, Vue, HTML.He is also a InfoSec , He got acknowledge by Microsoft, Bluejeans, Positivegrid, Guidebook, AlienVault , de Volksbank, Coinbase.
                </p>
            </div>
            <h5>PHP <span class="color-heading">87%</span></h5>
            <v-progress-linear
              color="secondary"
              height="10"
              value="87"
            ></v-progress-linear>
            <h5>Laravel <span class="color-heading">70%</span></h5>
        <v-progress-linear
              color="success"
              height="10"
              value="70"
            ></v-progress-linear>
        <h5>Javascript <span class="color-heading">50%</span></h5>
        <v-progress-linear
              color="warning"
              height="10"
              value="50"
            ></v-progress-linear>
      <h5>Software Development (C#) <span class="color-heading">77%</span></h5>
      <v-progress-linear
              color="error"
              height="10"
              value="77"
            ></v-progress-linear>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.margin-b-60 {
    margin-bottom: 60px !important;
}
p {
    font-size: 15px;
    font-weight: 400;
    color: #a6a7aa;
    margin-bottom: 15px;
}
</style>
