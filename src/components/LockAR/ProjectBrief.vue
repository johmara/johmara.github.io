<template>
    <v-container>
        
        <v-row >
            <v-col cols="4"  align-self="center" v-for="(item) in items" :key="item">
                <v-img :src="item.src" contain max-height="500"></v-img>
            </v-col>
            
            
        </v-row>
        <v-row>
            <v-col cols="12" align-self="center">
                <h1 class="display-4 py-4">Project Brief</h1>
                <p> AR is an effective means for utilizing and exploiting the potential of computer-generated information which has been applied to systems for applications including monitoring, remote intelligence, military applications, and location positioning[1][3]</p>
                <p> LockAR is a smart APP provides virtual keys for users to find and unlock connected doors. Compared to traditional physical keys or NFC cards, this APP lets users be able to interact with their physical surroundings[2] and aims to provide an effecient and integrated authentication & access method for users to enter any connected physical spaces.  </p>     
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'ProjectBrief',
    data: () => ({
        items:[
            {src: require("@/assets/LockAR/home_screen.png")},
            {src: require("@/assets/LockAR/Locked.png")},
            {src: require("@/assets/LockAR/Unlocked.png")},
        ]
    })
};
</script>