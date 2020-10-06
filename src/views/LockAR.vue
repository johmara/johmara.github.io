<template>
<body class="project_body"> 
<main class="project">
    <header class="lockar_header"> 
        <NavBar/>
        <h1>LockAR</h1>
        <h3>An Augmented Reality Authentication system</h3>  
    </header>
    <section class="information">
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
    </section>
</main>
</body>
</template>

<script>
import NavBar from '../components/Navbar'

export default {
    name: 'LockAR',

    components:{
        NavBar,
    },

    data: () => ({
        
    }),
};
</script>

<style>
.project_body{
    background: none;
}
.lockar_header{
    height: 300px;
}

.project{
    height: auto;
}

.information {
    grid-column: 2 / span 6;
}
</style>