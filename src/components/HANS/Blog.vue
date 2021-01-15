<template>
<div class="blog my-5">

    <v-card class="my-5" v-for="(post, i) in visiblePages" :key="i">
        <v-row no-gutters>
            <v-col>
                <v-card-title>{{post.title}}</v-card-title>
            </v-col>
            <v-col cols="3">
                <v-card-subtitle>{{post.date}}</v-card-subtitle>
            </v-col>
        </v-row>
        <v-card-subtitle>{{post.subtitle}}</v-card-subtitle>
        <div v-if="post.image != ''">
            <v-img :src="post.image" height="150" contain>        </v-img>
        </div>
        <div class="px-8"><v-divider/></div>
        <div  v-for="(paragraph) in post.text" :key="paragraph">
            <v-card-text>{{paragraph}}</v-card-text>
        </div>
    </v-card>
    <v-pagination v-model="page" :length="nrOfPages"
    ></v-pagination>
</div>
</template>

<script>

export default {
    name: 'Hans-Blog',

    bps: null,
    components:{

    },

    data: () => ({
        blogposts: require('@/assets/HANS/Blog/post').data(),
        link: '',
        logo: '',
        title: "HANS",
        subtitle: "",
        imgs: "",
        background: '',
        desc: ``,   
        page: 1,
        perPage: 5,     
    }),
    computed:{

        nrOfPages: function(){
            return Math.ceil(this.nrOfPosts / 5)
        },

        nrOfPosts: function(){
            var data = this.blogposts
            return Object.keys(data).length
        },

        visiblePages () {
            return this.blogposts.slice((this.page - 1)* this.perPage, this.page* this.perPage) 
        },

    },

    methods: {
    }

};
</script>

<style>

</style>