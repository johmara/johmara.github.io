<template>
    <v-container>
        <h1 class="display-3 text-center">Evaluation 1</h1>
            <v-row>
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
                </v-col>

            </v-row>

    </v-container>
</template>

<script>
export default {
    name: 'Evaluation1',

    data: () => ({
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