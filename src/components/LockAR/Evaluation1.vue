<template>
    <v-container>
        <h1 class="display-3 text-center">Evaluation 1</h1>
            <v-row class="pt-3">
                <v-col cols="12" md="6"> 
                    <v-card flat class="pa-6 my-10">
                        <v-card-title class="headline">Observation</v-card-title>
                        <p class="pt-4">Participants try the prototypes to fullfill certain tasks.</p>
                        <p class="pt-4"> Simple questions asked afterwards </p>

                        <div class="py-5 my-5">
                            <v-row>
                                <v-col cols="4">
                                    <p class="text-right">Participants:</p>
                                </v-col>
                                <v-col cols="8">
                                    <p class="font-weight-light">5 participants age from 18-57</p>
                                </v-col>
                            </v-row>
                            
                        </div>
                    </v-card>
                </v-col>
                <v-col cols="12" md="6">
                    <v-carousel hide-delimiters cycle progress progress-color="accent"
                                touch show-arrows-on-hover next-icon=">" prev-icon="<" >
                        <v-carousel-item contain v-for="(item,i) in items" :key="i" :src="item.src">
                        </v-carousel-item>
                    </v-carousel>
                    <p class="caption text-center">One wireframeme prototype for key workflow</p>
                </v-col>
            </v-row>

            <v-card flat class="pa-4"> 
            <v-row>
                <v-col cols="4" md="2" v-for="(item,i) in items" :key="i">
                    <v-hover v-slot:default="{ hover }">
                        <v-card flat :elevation="hover ? 12 : 0" :class="{ 'on-hover': hover }">
                            <v-dialog v-model="dialog" width="400">
                                <template v-slot:activator="{ on, attrs }">
                                <v-img contain :src="item.src" v-bind="attrs" v-on="on"></v-img>
                                
                                </template>

                                <v-card dark rounded="xl">
                                    <v-img contain v-for="(item,i) in items" :key="i" :src="item.src">

                                    </v-img>
                                </v-card>
                            </v-dialog>
                        </v-card>
                        
                    </v-hover>
                    
                </v-col>
                <p class="caption">Wireframe prototype for Evaluation 1</p>
            </v-row>
            </v-card>

            <v-row>
                <v-col cols="12" md="6">
                    <h4 class="headline text-center">Strength:</h4>
                    <v-row>
                        <v-col cols="3" offset="1" align-self="top">
                            <v-img height=70 contain :src= 'require("@/assets/LockAR/strength.png")' ></v-img>
                        </v-col>
                        <v-col cols="8" align-self="center">
                            <v-list flat>
                                <v-list-item>
                                    <p class="body-1">The workflow is intuitive</p>
                                </v-list-item>
                                <v-list-item>
                                    <p class="body-1">Easy to find the door</p>
                                </v-list-item>
                            </v-list>
                        </v-col>
                    </v-row>
                    
                </v-col>
                <v-col cols="12" md="6">
                    <h4 class="headline text-center">Weakness:</h4>
                    <v-row>
                        <v-col cols="3" offset="1" align-self="top">
                            <v-img height=70 contain :src= 'require("@/assets/LockAR/weakness.png")' ></v-img>
                        </v-col>
                        <v-col cols="8" align-self="center">
                            <v-list flat>
                                <v-list-item>
                                    <p class="body-1">Function about adding new doors not covered</p>
                                </v-list-item>
                                <v-list-item>
                                    <p class="body-1">Hard to get the feeling of using a camera since it’s only drawing </p>
                                </v-list-item>
                                <v-list-item>
                                    <p class="body-1">Similar to a normal map </p>
                                </v-list-item>
                            </v-list>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
            <v-divider></v-divider>
            <div class="py-5">
                <h1 class="display-3 text-center">Conclusion</h1>
                <v-row>
                    <v-col offset="2" cols="8">
                        <p class="headline text-center">AR does well to help people navigate new places, like a new school building or a hotel for example</p>
                    </v-col>
                </v-row>
            </div>
            <v-card class="py-5 my-10 text-center" flat>
                <h1 class="display-4">...</h1>
            </v-card>

    </v-container>
</template>

<script>
export default {
    name: 'Evaluation1',

    data: () => ({
        dialog: false,
        items: [
            {
                src: require('@/assets/LockAR/carousel1/1.png')
            },
            {
                src: require('@/assets/LockAR/carousel1/2.png'),
            },
            {
                src: require('@/assets/LockAR/carousel1/3.png'),
            },
            {
                src: require('@/assets/LockAR/carousel1/4.png'),
            },
            {
                src: require('@/assets/LockAR/carousel1/5.png'),
            },
            {
                src: require('@/assets/LockAR/carousel1/6.png'),
            },
        ]
      })

};
</script>