<template>
<div class="hans">
    <header class="header"> 
        <Navbar/>
    </header>
    <v-container>
        <div class="hans-toolbar">
           <Hanstoolbar/>
        </div>
        <v-row>
            <v-col cols="8" >
                <v-card>
                    <v-img :src="logo.image"></v-img>
                    <v-card-title>{{title}}</v-card-title>
                    <v-card-subtitle>{{subtitle}}</v-card-subtitle>
                    <v-card-text>{{desc}}</v-card-text>
                </v-card>
                <div>
                    <Blog/>
                </div>
                
            </v-col>
            <v-col cols="4">
                <v-card>
                    <v-card-title>Latest Posts</v-card-title>
                    <div class="pa-3">
                        <v-card class="my-2" v-for="(i) in nrOfPosts" :key="i">
                            {{blog_data(--i)}}
                            <v-card-title>{{bps.title}}</v-card-title>
                            <v-card-subtitle >
                                {{bps.subtitle}}
                                <v-spacer/>
                                {{bps.date}}
                            </v-card-subtitle>
                        </v-card>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
    <footer>
        <Footer/>
    </footer>
</div>
</template> 

<script>
import Navbar from '../components/Navbar'
import Hanstoolbar from '../components/HANS/Hans_toolbar'
import Blog from '../components/HANS/Blog'
import Footer from '../components/Footer.vue'


export default {
    name: 'Hans',

    bps: null,

    components:{
        Navbar,
        Footer,
        Hanstoolbar,
        Blog,
    },

    data: () => ({
        link: '#/hans',
        logo: '',
        title: "HAnS",
        subtitle: "A master thesis about creating an IntelliJ plugin that helps with annotating software",
        imgs: "",
        background: '',
        desc: 
            'Helping Anotating Software or HAnS is a plugin for IntelliJ idea that is being developed as part of a master thesis. The The purpose of the study is to engineer and evaluate a tool that will support developers when recording feature annotations. The evaluation will consist of both user studies, for qualitative data, and an empirical study on the effectiveness of the tool. The intention is that the tool, consequently, will  aid developers with adding embedded annotations to the code. The tool will use embedded annotations since they have been shown to be cheap to apply and less intrusive with regular development activity. Editing support will be facilitated by the application’s use of techniques that can be expected from a modern editing tool. Among these, support for code completion, error markers, syntax highlighting, consistency checks and refactoring are features to consider. Additionally we strive to contribute to the knowledge base concerning feature location, and that ultimately the findings of the study may guide future research and development.',
            
        blog: Blog.data().blogposts,
    }),

    computed: {
        nrOfPosts: function(){
            var data = this.blog
            var len = Object.keys(data).length
            if (len > 5){
                return 5
            } else {
                return len
            }
        },
    },

    methods: {
        blog_data: function(x) {
            var data = this.blog[x]
            this.bps = data
        },
    }
};
</script>

<style>

</style>