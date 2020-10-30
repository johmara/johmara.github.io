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

        <p class="text-center">Due to time budget and ARcore’s special device requirements, instead of implementing a fully functioning APP, this prototype is aimed to demostrate the core experience and conducting further evaluations.</p>
        <p class="text-center">Instead of ARcore we have used OpenCV. However OpenCV is a complicated software which takes a long time to learn, time that was sadly limited.</p>

        <v-row>
            <v-spacer></v-spacer>
            <v-col cols="2">
                <a class="text-center fire--text" href="https://github.com/johmara/lockar"> Code on GitHub</a>
            </v-col>
            <v-col cols="2">
                <a class="text-center fire--text" href="https://opencv.org/"> OpenCVs Website</a>
            </v-col>
            <v-spacer></v-spacer>
        </v-row>

        

    </v-container>
</template>

<script>
export default {
    name: 'DemoVideo',

};
</script>