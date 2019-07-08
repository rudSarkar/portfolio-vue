<template>
    <v-container
        fluid
        grid-list-lg
      >
        <v-layout row wrap>
            <div class="col-md-12" v-for="(blog,index) in blogs" :key="index"> 
                <div v-if="blogSlu == blog.slug">
                    <h1>{{blog.blogTitle}}</h1>
                    <img :src="blog.image" class="img-fluid">
                    <p>{{ blog.content }}</p>
                </div>
            </div>
        </v-layout>
    </v-container>
</template>
<script>
export default {
  name: 'Details',
  data() {
      return {

        blogSlu:this.$route.params.Bslug,
		title:"Details",
        blogs: [
            {
                blogTitle: "A food i like most",
                image    : require('../assets/images/ssrf.png'),
                slug     : "a-food-i-like-most",
                content  : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi asperiores sed provident architecto consequuntur corrupti nobis sint, earum autem perspiciatis quisquam non deleniti magni nostrumperferendis dolore fugit voluptatum consequatur."
            }
        ]
      }
  }
}
</script>