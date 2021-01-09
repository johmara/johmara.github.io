<template>
    <v-container>
        <v-row dense>
            <v-col cols="12" md="9">
                <v-card class="pa-5">    
                    <v-row>
                        <v-col cols="9">
                            <v-card-title class="display-1 font-weight-light">
                                {{personal_info.name}}
                            </v-card-title>
                            <v-card-text> 
                                <div v-for="(occ) in personal_info.occupation" :key="occ">
                                {{occ.desc}}
                                <a :href="occ.href" target="_blank">
                                    <v-icon> mdi-open-in-new </v-icon>
                                </a>
                                <br>
                                </div>
                                <br>
                                {{personal_info.uni}}
                                <br>
                                {{personal_info.location}}
                                <br>
                                E-Mail: {{personal_info.email}}

                            </v-card-text>
                        </v-col>
                        <v-col cols="3">
                            <v-avatar size="120">
                                <v-img class="rounded-circle" :src="img" contain />
                            </v-avatar>
                        </v-col>
                    </v-row>
                    <v-row>   
                        <v-col>
                            <v-card-title class="headline font-weight-light">Short Bio</v-card-title>
                            <v-card-text v-for="(bio) in bio" :key="bio">
                                {{bio}}
                            </v-card-text>
                        </v-col>                 
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

export default {
    name: 'AboutComponent',

    data: () => ({
        personal_info: {
            name: "Johan Martinson",
            uni: "Chalmers University of Technology",
            location: "Göteborg, Sweden",
            email: "johan.t.martinson@gmail.com",
            occupation:[
                {
                    id: "mpsof",
                    desc: "Student in Master of Science in Software Engineering & Technology",
                    href:"https://www.chalmers.se/en/education/programmes/masters-info/Pages/Software-Engineering-and-Technology.aspx",
                },
                {
                    id: "dai",
                    desc: "Student in Computer Science and Engineering",
                    href: "https://www.chalmers.se/sv/utbildning/program-pa-grundniva/Sidor/Datateknik-180.aspx",
                },
            ]
        },
        img: require("@/assets/profile.png"),
        bio: require("@/assets/bio.js").bio,
    }),
};
</script>

<style>

</style>