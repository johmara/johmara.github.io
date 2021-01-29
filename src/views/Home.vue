<template class="back">
<div class="home">
    <v-img src="@/assets/background.svg">
    <header>
        <NavBar/>
    </header>   
    

    
    <v-container class="mt-5 mb-16 pb-16">
    <div v-if="this.$vuetify.breakpoint.xsOnly">
        <v-row class="mx-5"> 
            <v-col cols="12" >
                <h1 class="hero_font pt-16">{{title}}</h1>
                <h3 class="sub_header"> {{sub_header}} </h3>
            </v-col>
        </v-row>
    </div>
    <div v-else>
        <v-row class="ma-5 pt-16"> 
            <v-col cols="12" >
                <div class="pt-16">
                    <!--<v-row>
                        <v-hover v-for="(l, i) in title" :key="i">
                        <h1 slot-scope="{ hover }"
                            :class="`${hover? 'end': 'start'}`" >{{l}}</h1>
                        </v-hover>
                    </v-row> -->
                        
                    <h1 class="cadet--text font-weight-bold display-3 pt-16"> Johan Martinson</h1>
                    
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
    </v-img>

    <v-container class="my-5">
        <About/>
    </v-container>

    <v-footer>

    </v-footer>
    
</div>
</template>

<script>
import NavBar from '@/components/Navbar'
import About from '@/components/About'

export default {
    name: 'Home',

    components:{
        NavBar,
        About,
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
        title: 'Johan Martinson',
        sub_header: "Project Manager | Developer",
        animateLetter: false,
    }),
};
</script>

<style>
/*.start {
    color: var(--cadet);
    font-weight: 700;
    font-size: 4.5rem;
}
.end {
    color: var(--fire);
    font-weight: 700;
    font-size: 4.5rem;
}
.colour-change-enter-active {
    animation: colourchange .5s;
}
.colour-change-leave-active {
    animation: colourchange .5s reverse;
}
@keyframes colourchange {
    0% {
        color: var(--cadet);
        opacity: 1;
    }
    50%{
        opacity: .5;
    }
    100% {
        color: var(--fire);
        opacity: 1;
    }
}
*/

.home{
    height: inherit;
    background: white;
    /*background: 
        url(../../src/assets/home-parallax.png);*/
    background-position: bottom right;
    background-repeat: no-repeat;
    background-size: contain;
}

</style>