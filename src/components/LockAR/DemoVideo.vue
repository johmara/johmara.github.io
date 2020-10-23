<template>
    <v-container> 
        <h1 class="display-2 text-center pb-5">Demo Video</h1>
            <v-row>
                <v-spacer></v-spacer>
                <v-col cols="3">
                    <video height="500" controls class="justify-center">

                    <source :src='require("@/assets/LockAR/impl/demo.mp4")' type="video/mp4">

                    Your browser does not support the video tag.

                    </video>
                </v-col>
                <v-spacer></v-spacer>
            </v-row>

        <p class="text-center">Due to time budget and ARcore’s special device requirements, instead of implementing a fully functioned APP, this peorototype is aimed for demostrating the core experience and conducting further evaluations.</p>
    </v-container>
</template>

<script>
export default {
    name: 'DemoVideo',

};
</script>