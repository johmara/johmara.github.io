<template>
<nav>
<v-toolbar flat>
    <v-toolbar-title>
        <div v-if="this.$vuetify.breakpoint.xsOnly">
            <img class="logo"  @click="mobile = !mobile" src="../assets/johmara.svg" alt="Johan Martinson">
        </div>
        <div v-else>
        <router-link :to="'/'">
            <img class="logo" src="../assets/johmara.svg" alt="Johan Martinson">
        </router-link>
        </div>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items v-if="$vuetify.breakpoint.smAndUp">
        <div class="links">
            <a href="#" style="color: #202531">About</a>
            <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <a color="dark_space" v-bind="attrs" v-on="on">Projects</a>
                </template>
                <v-list>
                    <router-link :to="'/LockAR/'">
                        <v-list-item> 
                            <v-list-item-title>LockAR</v-list-item-title>
                        </v-list-item>
                    </router-link>
                </v-list>
            </v-menu>
        </div>
    </v-toolbar-items>
</v-toolbar>

<v-navigation-drawer v-model="mobile" app temporary bottom>
    <div class="links">
    <v-list dense>
        <v-list-item>
        <router-link :to="'/'">
            <p>Home</p>
        </router-link>
        </v-list-item>
        <v-list-item>
        <router-link :to="'/About'">
        <p>About</p>
        </router-link>
        </v-list-item>
        <v-list-item>
        <p>
        <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
                <a color="dark_space" v-bind="attrs" v-on="on">Projects</a>
            </template>
            <v-list>
                <router-link :to="'/LockAR/'">
                    <v-list-item> 
                        <v-list-item-title>LockAR</v-list-item-title>
                    </v-list-item>
                </router-link>
            </v-list>
        </v-menu>
        </p>
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
        mobile: false   
    }),
};
</script>