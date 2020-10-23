<template>
<div class="lockar">
    <header class="lockar_header"> 
                <Navbar/>
    </header>
    <v-parallax src="../assets/BackgroundParallax.png" height=800>
        <v-container class="my-5">
            <v-row>
            <v-col align-self="center">
                <v-img src="../assets/LockAR/lockar.svg" min-height="70" max-height="300" contain center></v-img>           
            </v-col>
            </v-row>
            <v-row> 
            <v-col cols="12">
                <div class="introduction">
                    <h1 class="display-2">LockAR</h1>
                    <span class="subtitle-2">A smart phone app that provides virtual Augmented Reality keys for users to pinpoint and unlock connected doors.</span> 
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
    </v-container>
    <v-container>
        <Integration/>
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
    },

    data: () => ({
        
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