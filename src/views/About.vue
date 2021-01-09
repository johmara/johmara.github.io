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

    }),
};
</script>

<style>

</style>