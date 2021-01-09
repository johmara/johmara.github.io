<template>
<div class="lockar">
    <header class="lockar_header"> 
                <Navbar/>
    </header>
    <v-parallax src="../assets/BackgroundParallax.png" height=800>
        <v-container class="my-5">
            <v-row>
            <v-col align-self="center">
                <v-img :src="logo" min-height="70" max-height="300" contain center></v-img>           
            </v-col>
            </v-row>
            <v-row> 
            <v-col cols="12">
                <div class="introduction">
                    <h1 class="display-2">{{title}}</h1>
                    <span class="subtitle-2">{{subtitle}}</span> 
                </div>
            </v-col> 
            </v-row>
    </v-container>
    </v-parallax>
    <v-container>
        <ProjectBrief/>
    </v-container>
    <v-container>
        <ProjectStructure/>
    </v-container>
    <v-container>
        <ProjectDefine/>
    </v-container>
    <v-container fluid>        
        <Eval1/>
        <v-divider></v-divider>
    </v-container>
    <v-container>
        <Eval2/>
        <v-divider></v-divider>
    </v-container>
    <v-container>
        <Integration/>
    </v-container>
    <v-container fluid>
        <v-card color="accent" dark elevation="10" class="py-10">
            <DemoVideo/>
            <IntFlow/>
        </v-card>

    </v-container>
    <v-container>
        <Discussion/>
    </v-container>
    <v-container fluid>
        <v-card color="accent" dark elevation="10" class="py-10">
            <References/>
        </v-card>
    </v-container>
</div>
</template>

<script>
import Navbar from '../components/Navbar'
import ProjectBrief from '../components/LockAR/ProjectBrief'
import ProjectStructure from '../components/LockAR/ProjectStructure'
import ProjectDefine from '../components/LockAR/ProjectDefine'
import Eval1 from '../components/LockAR/Evaluation1'
import Eval2 from '../components/LockAR/Evaluation2'
import Integration from '../components/LockAR/Integration'
import DemoVideo from '../components/LockAR/DemoVideo'
import IntFlow from '../components/LockAR/Flowchart'
import Discussion from '../components/LockAR/Discussion'
import References from '../components/LockAR/References'

export default {
    name: 'LockAR',

    components:{
        Navbar,
        ProjectBrief,
        ProjectStructure,
        ProjectDefine,
        Eval1,
        Eval2,
        Integration,
        DemoVideo,
        IntFlow,
        Discussion,
        References,
    },

    data: () => ({
        logo: require("@/assets/LockAR/lockar.svg"),
        title: "LockAR",
        subtitle: "A smart phone app that provides virtual Augmented Reality keys for users to pinpoint and unlock connected doors.",
        imgs: ProjectBrief.data(),
        background: '',
        desc: `LockAR was a design project with the main purpose to create a mobile design for a novel idea.
         The theme for the project was to create something with regards to access and authentication.
         My partner and I came up with a lock for a hotel room or a campus grouproom were you would use you phone
         to locate unlock and lock the door you wished to gain access to. Thereby eliminating the use for plastic access cards.`,
    }),
};
</script>

<style>

.lockar{
    height: 100%;
    background: white;
}

.introduction{
    text-align: center;
}

</style>