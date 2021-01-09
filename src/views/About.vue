<template>
<div class="about">
    <header> 
        <NavBar/>
    </header>
    <AboutComponent/>
</div>
</template>

<script>
import NavBar from '@/components/Navbar'
import AboutComponent from '@/components/About'

export default {
    name: 'About',

    components:{
        NavBar,
        AboutComponent,
    },

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