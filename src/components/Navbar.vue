<template>
    <nav>
        <router-link :to="'/'">
            <img class="logo" src="../assets/johmara.svg" alt="Johan Martinson">
        </router-link>
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
    </nav>
</template>

<script>
export default {
    name: 'NavBar',

    data: () => ({
        //
    }),
};
</script>