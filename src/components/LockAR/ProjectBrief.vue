<template>
    <v-container>
        <h1 class="text-right display-4">Project Brief</h1>
        <v-row >
            <v-col cols="12" md="6"  align-self="center">
                <v-img :src='require("@/assets/LockAR/home_screen.png")' contain max-height="500"></v-img>
            </v-col>
            <v-col cols="12" md="6" align-self="center">
                <p class="text-right"> AR is an effective means for utilizing and exploiting the potential of computer-generated information which has been applied to systems for applications including monitoring, remote intelligence, military applications, and location positioning[1][3]</p>
                <p class="text-right"> LockAR is a smart APP provides virtual keys for users to find and unlock connected doors. Compared to traditional physical keys or NFC cards, this APP lets users be able to interact with their physical surroundings[2] and aims to provide an effecient and integrated authentication & access method for users to enter any connected physical spaces.  </p>     
            </v-col>
            
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'ProjectBrief',

};
</script>