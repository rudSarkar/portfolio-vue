<template>
  <v-container
        fluid
        grid-list-lg
      >
        <v-layout row wrap>
            <v-flex xs12 sm4 v-for="(data,index) in blogs" :key="index">
                <v-card>
                <v-img
                    :src="data.image"
                    aspect-ratio="2.75"
                ></v-img>

                <v-card-title primary-title>
                    <div>
                    <h3 class="headline mb-0">{{ data.blogTitle }}</h3>
                    <div> {{ data.content.slice(0, 100) }} </div>
                    </div>
                </v-card-title>

                <v-card-actions>
                    <v-btn color="orange" @click="goTodetail(data.slug)">Read</v-btn>
                </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
      </v-container>
</template>

<script>
export default {
  name: 'Blog',
  data() {
      return {
        blogs: [
            {
                blogTitle: "A food i like most",
                image    : require('../assets/images/food.png'),
                slug     : "a-food-i-like-most",
                content  : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi asperiores sed provident architecto consequuntur corrupti nobis sint, earum autem perspiciatis quisquam non deleniti magni nostrumperferendis dolore fugit voluptatum consequatur."
            }
        ]
      }
  },
  methods: {
        goTodetail(blogSlug) {
            let blogSlu=blogSlug
            this.$router.push({name:'Details',params:{Bslug:blogSlu}})
        }
  }
}
</script>


<style scoped>

</style>