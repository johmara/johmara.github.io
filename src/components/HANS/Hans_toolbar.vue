<template>
        <v-toolbar dark elevation="4" color="cadet"> 
            <!--<v-app-bar-nav-icon></v-app-bar-nav-icon>-->
            <v-spacer/>
                <v-btn text href="#/hans"> 
                    <v-toolbar-title>HAnS</v-toolbar-title>
                </v-btn>
            <v-spacer/>
        </v-toolbar>
</template>

<script>

export default {
    name: 'Hans_toolbar',

    components:{
    },

    data: () => ({
        tab: 0,
        items: [
          'HANS',
        ],
    }),
};
</script>

<style>

</style>