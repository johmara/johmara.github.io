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

    <v-timeline :dense="$vuetify.breakpoint.smAndDown">
            <v-timeline-item>
                <span slot="opposite">Project Start</span>
                <v-card class="elevation-2">
                <v-card-title class="headline"> Mobile Computing </v-card-title>
                <v-card-subtitle class="subtitle-1"> A project about Access and Authentication</v-card-subtitle>
                <v-card-text>
                    Authentication has to do with proving one’s identity. Access has to do with permission to reach certain information, places, or a things. Even though the two are different concepts, in many applications they are closely related.
                    The theme is related to the Vetenskapsrådet-funded research project "Precious Keys," currently led by Mehmet Aydın Baytaş, Assoc. Prof. Ylva Fernaeus (KTH/Umeå), and PhD student Andreas Lindegren (KTH). Projects which might make contributions to the research may be invited to continue. Possibilities include thesis projects; for-credit project course; research internships at Chalmers, KTH, and Umeå; and industrial internships at our collaborators which include Assa Abloy, ManyOne, and Volvo Cars.
                </v-card-text>
                </v-card>
            </v-timeline-item>
            <v-timeline-item v-for="n in 4" :key="n">
                <span slot="opposite">...</span>
                <v-card class="elevation-2">
                <v-card-title class="headline"> More info soon </v-card-title>
                <v-card-text> ... </v-card-text>
                </v-card>
            </v-timeline-item>
        </v-timeline>

    </v-container>
</div>
</template>

<script>
import Navbar from '../components/Navbar'

export default {
    name: 'LockAR',

    components:{
        Navbar,
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