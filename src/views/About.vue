<template>
<div class="about">
    <header> 
        <NavBar/>
    </header>
        <CV/>

    <footer>
        <Footer/>
    </footer>
</div>
</template>

<script>
import NavBar from '@/components/Navbar'
//import AboutComponent from '@/components/About'
import CV from '@/components/Cv'
import Footer from '../components/Footer.vue'

export default {
    name: 'About',

    components:{
        NavBar,
        Footer,
  //      AboutComponent,
        CV
    },

    data: () => ({

    }),
};
</script>

<style>

</style>