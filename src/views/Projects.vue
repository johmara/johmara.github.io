<template>
<div class="projects">
    <header> 
        <NavBar/>
    </header>
    <v-container>
        <v-row>
            <v-col cols=12 md="4" v-for="(project) in projects" :key="project">
                <v-card class="pa-5">
                    <a :href="project.link">
                        <v-img :src="project.background" :lazy-src="default_background" height="200">
                            <div v-if="project.title = 'LockAR'">
                                <v-row>
                                    <v-col cols="4" v-for="(img) in project.imgs.items" :key="img">
                                        <v-img :src="img" contain height="100px">
                                        </v-img>
                                    </v-col>
                                </v-row>
                            </div>
                            <div v-else >
                                <v-img :src="project.imgs" contain height="100px"/>
                            </div>
                            <v-card-title class="white--text">
                                <v-avatar>
                                    <v-img :src="project.logo" :alt="project.title"/>
                                </v-avatar>
                                {{project.title}}
                            </v-card-title>
                        </v-img>
                    </a>
                    <v-card-subtitle class="font-weight-bold">{{project.subtitle}}</v-card-subtitle>
                    <v-card-text class="font-italic">{{project.desc}}</v-card-text>

                    <a :href="project.link">
                        <v-card-text class="text-right">Read more about it 
                            <v-icon> mdi-page-next-outline </v-icon>
                        </v-card-text>
                    </a>
                </v-card>
            </v-col>
        </v-row>        
    </v-container>
</div>
</template>

<script>
import NavBar from '../components/Navbar'
import LockAR from '@/views/LockAR'
import Gretzl from '@/components/Gretzl/Gretzl'

export default {
    name: 'Projects',

    components:{
        NavBar,
    },

    data: () => ({
        projects: [
            LockAR.data(),
            Gretzl.data(),
        ],
        default_background: require("@/assets/projectbackground_standard.png"),
    }),
    methods: () => ({
        gretzl: () => ({
                
            })
    })
};
</script>

<style>

</style>