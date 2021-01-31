<template class="back">
<div class="home">
    <header>
        <NavBar/>
    </header>
       
    <v-container class="mt-5 mb-16 pb-16">

    <div>
        <v-row class="ma-5 pt-16"> 
            <v-col cols="12" >
                <div class="pt-16">
                    <v-row dense>
                        <v-col cols="12" lg="2">
                            <v-row dense>
                                <v-hover v-for="(f,i) in fname" :key="i">
                                <h1 slot-scope="{ hover }" text-h1
                                    :class="`${hover? 'hero_font end': 'hero_font start'}`">{{f}}</h1>
                                </v-hover>
                            </v-row>
                        </v-col>
                        
                        <v-col cols="12" lg="6" :class="{'ms-0': $vuetify.breakpoint.smAndDown, 'ms-7': $vuetify.breakpoint.lgAndUp}" xs12 sm6 md4>
                            <v-row dense>
                                <v-hover v-for="(l,i) in lname" :key="i">'
                            <h1 slot-scope="{ hover }"
                                :class="`${hover? 'hero_font end': 'hero_font start'}`" >{{l}}</h1>
                            </v-hover>
                            </v-row>
                        </v-col>
                        <v-spacer/>
                    </v-row>                    
                </div>
                <h3 class="sub_header"> {{sub_header}} </h3>
            </v-col>
        </v-row>
    </div>
    <v-row no-gutters>
        <v-col cols="9">
            <v-row justify="start" dense class="mb-16 pb-16">
                <v-col class="px-5 mx-1" cols="5" sm="3" v-for="(icon, i) in icons" :key="i">                 
                    <v-row no-gutters>
                        <v-col>
                            <v-hover v-slot:default="{ hover }">
                                <v-card class="pt-2 text-center rounded-circle" height="120" width="120" :elevation="hover ? 4 : 0" :class="{ 'on-hover': hover }" :href="icon.href">
                                    <v-img height="60" contain :src="icon.src" :alt="icon.txt" />
                                    <v-card-text class="pb-2">{{icon.txt}}</v-card-text>
                                </v-card>
                            </v-hover>
                        </v-col>
                    </v-row>
                </v-col>  
            </v-row>
        </v-col>
    </v-row>
    </v-container>
    <footer></footer>
</div>
</template>

<script>
import NavBar from '@/components/Navbar'

export default {
    name: 'Home',

    components:{
        NavBar,
    },

    data: () => ({
        icons: [
            {
                src: require("@/assets/email_icon.svg"),
                href: "mailto:johan.t.martinson@gmail.com",
                txt: "Email"
            },
            {
                src: require("@/assets/github_icon.svg"),
                href: "https://github.com/johmara/",
                txt: "Github"
            },
            {
                src: require("@/assets/linkedin_icon.svg"),
                href: "https://www.linkedin.com/in/johanmartinson/",
                txt: "LinkedIn"
            },
        ],
        fname: "Johan",
        lname: " Martinson",
        sub_header: "Project Manager | Developer",
        animateLetter: false,
    }),
};
</script>

<style>
.start {
    color: var(--cadet);
    background: -webkit-linear-gradient(var(--cadet), var(--space_cadet));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
.end {
    color: var(--fire);
    text-shadow: 4px 4px 0 var(--cadet);
}

.home{
    height: inherit;
    background-position: bottom right;
    background-repeat: no-repeat;
    background-size: contain;
}

</style>