<template>
<nav>
    <v-container >
        <v-app-bar flat extended class="pa-5" color="transparent">
            <v-toolbar-title>
                <div v-if="this.$vuetify.breakpoint.xsOnly">
                    <v-img class="logo"  @click="mobile = !mobile" :src="imgs[0].src" contain max-height="100" alt="Johan Martinson"></v-img>
                </div>
                <div v-else>
                <router-link :to="'/'">
                    <v-img class="logo" :src="imgs[0].src" contain max-height="100" alt="Johan Martinson"></v-img>
                </router-link>
                </div>
            </v-toolbar-title>
            <v-spacer/>
            <v-toolbar-items v-if="$vuetify.breakpoint.smAndUp">
            <div class="links">
                <router-link :to="{name:'About'}">
                    About
                </router-link>
                <v-menu offset-y open-on-hover>
                    <template v-slot:activator="{ on, attrs }">
                        <a v-bind="attrs" v-on="on">
                            <router-link :to="{name:'Projects'}"> Projects</router-link>
                        </a>
                    </template>
                    <v-list>
                        <router-link :to="{name:'HANS'}">
                            <v-list-item> 
                                <v-list-item-title>HAnS</v-list-item-title>
                            </v-list-item>
                        </router-link>
                        <v-list-item href="https://github.com/CloudsColors/Gretzl" target="_blank"> 
                            <v-list-item-title>Gretzl</v-list-item-title>
                        </v-list-item>
                        <router-link :to="{name:'LockAR'}">
                            <v-list-item> 
                                <v-list-item-title>LockAR</v-list-item-title>
                            </v-list-item>
                        </router-link>
                    </v-list>
                </v-menu>
            </div>
        </v-toolbar-items>
        </v-app-bar>
    </v-container>

<v-navigation-drawer v-model="mobile" app temporary bottom>
    <div class="links">
    <v-list dense>
        <v-list-item>
            <router-link :to="'/'">
            
            <v-list-item-avatar>
                <v-img :src="imgs[1].src"></v-img>
            </v-list-item-avatar>
            
            <v-list-item-content>
                <v-list-item-title>johmara.dev</v-list-item-title>
            </v-list-item-content>
            </router-link>
        </v-list-item>
        
        <v-divider/>
        
        <v-list-item>
        <router-link :to="{name:'About'}">About</router-link>
        </v-list-item>
        <v-list-item>
        <router-link :to="{name:'Projects'}">Projects</router-link>
        </v-list-item>
    </v-list>
    </div>
</v-navigation-drawer>
</nav>
</template>

<script>
export default {
    name: 'NavBar',

    data: () => ({
        mobile: false,
        imgs: [
            {src: require("@/assets/johmara.svg")},
            {src: require("@/assets/profile.png")}
        ],

    }),
};
</script>

<style>

</style>