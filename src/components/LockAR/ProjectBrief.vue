<template>
    <v-container>
        <h1 class="text-right display-4">Project Brief</h1>
        <v-row >
            <v-col cols="12" md="6"  align-self="center">
                <v-img :src='require("@/assets/LockAR/home_screen.png")' contain max-height="500"></v-img>
            </v-col>
            <v-col cols="12" md="6" align-self="center">
                <p class="text-right"> Authentication has to do with proving one’s identity. Access has to do with permission to reach certain information, places, or a things. Even though the two are different concepts, in many applications they are closely related.</p>
                <p class="text-right"> The theme is related to the Vetenskapsrådet-funded research project "Precious Keys," currently led by Mehmet Aydın Baytaş, Assoc. Prof. Ylva Fernaeus (KTH/Umeå), and PhD student Andreas Lindegren (KTH). Projects which might make contributions to the research may be invited to continue. Possibilities include thesis projects; for-credit project course; research internships at Chalmers, KTH, and Umeå; and industrial internships at our collaborators which include Assa Abloy, ManyOne, and Volvo Cars. </p>     
            </v-col>
            
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'ProjectBrief',

};
</script>