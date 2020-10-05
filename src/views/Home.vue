<template>
<body>
<main>
    <header>
        <NavBar/>
    </header>       
    <section class="information">
        <h1 class="hero_font">Johan Martinson</h1>
        <h3 class="sub_header"> Project Manager | Developer </h3>
            <div class="icons">
                <div class="icon">
                        <img src="../assets/EmailIcon.svg" alt="Email" href="mailto:johan.t.martinson@gmail.com">
                        <div class="icon_info">
                            <a class="icon_top" href="mailto:johan.t.martinson@gmail.com" style="color: #202531">Email</a>
                        </div>
                    </div>
                    <div class="icon">
                        <img src="../assets/GithubIcon.svg" alt="Email" href="https://github.com/johmara/">
                        <div class="icon_info">
                            <a class="icon_top" href="https://github.com/johmara/" style="color: #202531">Github</a>
                        </div>
                    </div>
                    <div class="icon">
                        <img src="../assets/LinkedInIcon.svg" alt="Email" href="https://www.linkedin.com/in/johanmartinson/">
                        <div class="icon_info">
                            <a class="icon_top" href="https://www.linkedin.com/in/johanmartinson/" style="color: #202531">LinkedIn</a>
                        </div>
                    </div>
            </div>
    </section>
</main>
</body>
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

</style>