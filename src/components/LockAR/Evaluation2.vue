<template>
    <v-container>
        <h1 class="display-3 text-center">Evaluation 2</h1>
            <v-row class="pt-3">
                <v-col cols="12" md="6">
                    <v-row>
                        <v-col cols="12" md="6"> 
                            <v-carousel hide-delimiters cycle progress progress-color="accent" 
                                            touch show-arrows-on-hover next-icon=">" prev-icon="<" >
                                    <v-carousel-item contain v-for="(item,i) in hotel" :key="i" :src="item.src">
                                    </v-carousel-item>
                            </v-carousel>
                        </v-col>
                        <v-col cols="12" md="6"> 
                            <v-carousel hide-delimiters cycle progress progress-color="accent" 
                                            touch show-arrows-on-hover next-icon=">" prev-icon="<" >
                                    <v-carousel-item contain v-for="(item,i) in campus" :key="i" :src="item.src">
                                    </v-carousel-item>
                            </v-carousel>
                        </v-col>
                    </v-row>
                    <p class="caption text-center">Two wireframe prototypes for two different contexts</p>
                </v-col>
                
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
                                    <p class="font-weight-light">7 participants age from 18-57</p>
                                </v-col>
                            </v-row>
                            
                        </div>
                    </v-card>
                </v-col>
                
            </v-row>
            <v-divider></v-divider>
            <v-card flat class="pa-4"> 
                <p class="display-2 text-right accent--text" >Prototype for a Hotel</p>
            <v-row>
                <v-col offset-sm="2" sm="10">
                    <p class="text-right">The Hotel context is all about providing a key to you hotel room with AR instead of using a physical key like a card or a tag. To play on the strengths that the previous itteration concluded a way to navigate to your room with either entering a room number or scanning a QR code was also added to the prototype. </p>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="4" md="2" v-for="(item,i) in hotel" :key="i">
                    <v-hover v-slot:default="{ hover }">
                        <v-card flat :elevation="hover ? 12 : 0" :class="{ 'on-hover': hover }">
                            <v-dialog v-model="dialog" width="400">
                                <template v-slot:activator="{ on, attrs }">
                                <v-img contain :src="item.src" v-bind="attrs" v-on="on"></v-img>
                                
                                </template>

                                <v-card dark rounded="xl">
                                    <v-img contain :src="item.src">

                                    </v-img>
                                </v-card>
                            </v-dialog>
                        </v-card>
                        
                    </v-hover>
                    
                </v-col>
                <p class="caption">Wireframe prototype for Evaluation 2</p>
            </v-row>
            </v-card>

            <v-row>
                <v-col>
                    <v-card elevation="10" color="mint_cream">
                        <v-btn @click="showHotelFlow = !showHotelFlow; arrowHotel = activated(arrowHotel);" color="transparent" elevation="0">{{arrowHotel}} Flowchart</v-btn>
                        <template v-if="showHotelFlow">
                            <v-img :src="require('@/assets/LockAR/hotel/Hotel-Flowchart.svg')"></v-img>
                        </template>
                    </v-card>
                </v-col>
            </v-row>

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
                                <v-list-item>
                                    <p class="body-1">The projected arrows on the ground</p>
                                </v-list-item>
                                <v-list-item>
                                    <p class="body-1">There are two ways to search for a location</p>
                                </v-list-item>
                                <v-list-item>
                                    <p class="body-1">Simple and clear interfaces</p>
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
                                    <p class="body-1">Still hard to get the feeling of using a camera since it’s not changing when you move around like a camera would</p>
                                </v-list-item>
                                <v-list-item>
                                    <p class="body-1">Physical signs feels like enough</p>
                                </v-list-item>
                                <v-list-item>
                                    <p class="body-1">Similar to a normal map </p>
                                </v-list-item>
                                <v-list-item>
                                    <p class="body-1">Need some sort of login needed to verify user</p>
                                </v-list-item>
                            </v-list>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-card flat class="pa-4"> 
                <p class="display-2 text-left fire--text" >Prototype for a Campus</p>
            <v-row>
                <v-col sm="10">
                    <p class="text-left">The Campus context is about providing a key to help you find and unlock your booked group room with AR instead of wandering in the campus building with a physical card. Based on the conclusion of the previous iteration that AR does well to help people navigate new places.  </p>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="4" md="2" v-for="(item,i) in campus" :key="i">
                    <v-hover v-slot:default="{ hover }">
                        <v-card flat :elevation="hover ? 12 : 0" :class="{ 'on-hover': hover }">
                            <v-dialog v-model="dialog" width="400">
                                <template v-slot:activator="{ on, attrs }">
                                <v-img contain :src="item.src" v-bind="attrs" v-on="on"></v-img>
                                
                                </template>

                                <v-card dark rounded="xl">
                                    <v-img contain :src="item.src">

                                    </v-img>
                                </v-card>
                            </v-dialog>
                        </v-card>
                        
                    </v-hover>
                    
                </v-col>
                <p class="caption">Wireframe prototype for Evaluation 2</p>
            </v-row>
            </v-card>

            <v-row>
                <v-col>
                    <v-card elevation="10" color="mint_cream">
                        <v-btn @click="showHotelFlow = !showHotelFlow; arrowCampus = activated(arrowCampus);" color="transparent" elevation="0">{{arrowCampus}} Flowchart</v-btn>
                        <template v-if="showHotelFlow">
                            <v-img :src="require('@/assets/LockAR/campus/Campus-Flowchart.svg')"></v-img>
                        </template>
                    </v-card>
                </v-col>
            </v-row>

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
                                <v-list-item>
                                    <p class="body-1">Simple and clear interfaces</p>
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
                                    <p class="body-1">Function of showing only one arrow is kind of hidden</p>
                                </v-list-item>
                                <v-list-item>
                                    <p class="body-1">The “swipe to unlock” tip is like a button</p>
                                </v-list-item>
                                <v-list-item>
                                    <p class="body-1">Need some sort of login needed to verify user</p>
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
                        <p class="headline text-center">The security of AR Authentication might not be very convenient. Verification of the user still needs to be done in some way</p>
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
    name: 'Evaluation2',

    data: () => ({
        dialog: false,
        campus: [
            {
                src: require('@/assets/LockAR/campus/1.png')
            },
            {
                src: require('@/assets/LockAR/campus/2.png'),
            },
            {
                src: require('@/assets/LockAR/campus/3.png'),
            },
            {
                src: require('@/assets/LockAR/campus/4.png'),
            },
            {
                src: require('@/assets/LockAR/campus/5.png'),
            },
            {
                src: require('@/assets/LockAR/campus/6.png'),
            },
        ],
        hotel: [
            {
                src: require('@/assets/LockAR/hotel/1.png')
            },
            {
                src: require('@/assets/LockAR/hotel/2.png'),
            },
            {
                src: require('@/assets/LockAR/hotel/3.png'),
            },
            {
                src: require('@/assets/LockAR/hotel/4.png'),
            },
            {
                src: require('@/assets/LockAR/hotel/5.png'),
            },
            {
                src: require('@/assets/LockAR/hotel/6.png'),
            },
        ],
        items: [
            {
            id: 1,
            name: 'Flowchart:',
            children: [
                { id:2, name: 'kjhg' },
            ],
            },
        ],
        showHotelFlow:false,
        arrowHotel:'>',
        arrowCampus:'>',
      }),
      methods: {
          activated(input){
              if (input == '>'){
                  return 'v'
              }else if(input == 'v'){
                  return '>'
              }
          }
      }


};
</script>