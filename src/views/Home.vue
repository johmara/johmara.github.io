<template>
<div class="home">
    <header>
        <NavBar/>
    </header>       
    <v-container class="my-5">
    <v-row class="ma-5 pt-16"> 
        <v-col cols="12" >
            <h1 class="hero_font pt-16">Johan Martinson</h1>
            <h3 class="sub_header"> Project Manager | Developer </h3>
        </v-col>
    </v-row>
    <v-row align-content="start" align="baseline" class="mb-16 pb-16">
        <v-col cols="12" sm="3" align-self="center">                 
            <v-row no-gutters>
            <v-col class="pa-0 ma-0" align-self="center">
                <a class="pa-0 ma-0" href="mailto:johan.t.martinson@gmail.com">
                <v-img class="pa-0 ma-0" height="60" contain src="../assets/EmailIcon.svg" alt="Email" />
                </a>
            </v-col>
            <v-col align-self="center" >
                <a class="pa-0 ma-0" href="mailto:johan.t.martinson@gmail.com" style="color: #202531">Email</a>
            </v-col>

            </v-row>
        </v-col>

        <v-col cols="12" sm="3" align-self="center">
        <v-row no-gutters> 
            <v-col class="pa-0 ma-0" align-self="center">
                <a class="pa-0 ma-0" href="https://github.com/johmara/">
                    <v-img class="pa-0 ma-0" height="60" contain src="../assets/GithubIcon.svg" alt="Github"/>
                </a>
            </v-col>
            <v-col align-self="center">
                <a class="pa-0 ma-0" href="https://github.com/johmara/" style="color: #202531">Github</a>
            </v-col>
        </v-row>
        </v-col>

        <v-col cols="12" sm="3" align-self="center">
            <v-row no-gutters>
                <v-col class="pa-0 ma-0" align-self="center">
                    <a class="pa-0 ma-0" href="https://www.linkedin.com/in/johanmartinson/">
                    <v-img class="pa-0 ma-0" height="60" contain src="../assets/LinkedInIcon.svg" alt="linkedin" />
                    </a>
                </v-col>
                <v-col align-self="center">
                    <a class="pa-0 ma-0" href="https://www.linkedin.com/in/johanmartinson/" style="color: #202531">LinkedIn</a>
                </v-col>
            </v-row>
        </v-col>
    </v-row>
    </v-container>
</div>
</template>

<script>
import NavBar from '../components/Navbar'

export default {
    name: 'Home',

    components:{
        NavBar,
    },

    data: () => ({
        //
    }),
};
</script>

<style>

#app{
    background: 
        url(../../src/assets/background.svg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

</style>