<template>
<div class="gretzl">
</div>
</template>

<script>

export default {
    name: 'Gretzl',

    components:{

    },

    data: () => ({
        link: 'https://github.com/CloudsColors/Gretzl',
        logo: '',
        title: "Gretzl",
        subtitle: "An automatic feature location tool",
        imgs: "",
        background: require("@/assets/Gretzl/gretzl_logo.svg"),
        desc: `As part of the course Software Evolution Project in Chalmers/Gothenburg University
            we started creating an innovative developer tool. 
            This is Gretzl, where you build a flow chart of the execution of your java project.
            Helping you find your way to the methods you need.`,
    }),
};
</script>

<style>

</style>