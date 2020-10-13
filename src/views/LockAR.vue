<template>
<div class="lockar">
    <header class="lockar_header"> 
                <Navbar/>
    </header>
    <v-parallax src="../assets/BackgroundParallax.png" height=800>
        <v-container class="my-5">
            <v-row>
            <v-col align-self="center">
                <v-img src="../assets/lockar.svg" min-height="70" max-height="380" contain center></v-img>           
            </v-col>
            </v-row>
            <v-row> 
            <v-col cols="12">
                <div class="introduction">
                    <h1>LockAR</h1>
                    <h3>An Augmented Reality Authentication System</h3> 
                    <span class="caption">LockAR is a smart phone APP that provides virtual AR keys for users to pinpoint and unlock connected doors.</span> 
                </div>
            </v-col> 
            </v-row>
    </v-container>
    </v-parallax>
    <v-container>
        <PB/>
    </v-container>
</div>
</template>

<script>
import Navbar from '../components/Navbar'
import PB from '../components/LockAR/ProjectBrief'

export default {
    name: 'LockAR',

    components:{
        Navbar,
        PB
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