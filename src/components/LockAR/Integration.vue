<template>
    <v-container>
        <h1 class="display-4 text-center">Integration</h1>
        <v-container class="my-10 py-5">
            <v-row>
                <v-col cols="12" class="text-center" >
                    <v-card class="my-10 pa-10" flat>
                        <h1 class="display-2">LockAR</h1>
                        <span class="subtitle-2 "> A smart phone app that provides virtual Augmented Reality keys for users to pinpoint and unlock connected doors.</span> 
                    </v-card>
                </v-col>
            </v-row>
        </v-container>

        <v-container>
            <v-row class="pt-3" v-for="n in 4" :key="n">
                <v-col cols="12" md="6">
                    <v-card v-if="n == 1" flat >
                        <v-img :src='require("@/assets/LockAR/impl/1-impl.png")' contain max-height="500"></v-img>
                    </v-card> 
                    <v-card v-if="n == 2" flat class="pa-6 my-10">
                        <h1 class="display-2 accent--text"> Instant
                            Overview</h1>
                        <p class="pt-4">Instantly locate all of the bookings and check the schedule at the very start through Mobile Direct Access design pattern[4]</p>
                    </v-card> 
                    <v-card v-if="n == 3" flat >
                        <v-img :src='require("@/assets/LockAR/impl/hotelWithI.png")' contain max-height="500"></v-img>
                    </v-card> 
                    <v-card v-if="n == 4" flat class="pa-6 my-10">
                        <h1 class="display-2 accent--text"> Easy to Unlock
                            </h1>
                        <p class="pt-4">Unlock the door using only a simple swipe on the phone instead of taking out physical keys or cards</p>
                    </v-card>
                </v-col>
                <v-col cols="12" md="6"> 
                    <v-card v-if="n == 1" flat class="pa-6 my-10">
                        <h1 class="display-2 accent--text"> Verification & 
                            Synchronization</h1>
                        <p class="pt-4">Log in through verification to get their booking inofmration sychromnized in this app</p>
                    </v-card>
                    <v-card v-if="n == 2" flat >
                        <v-img :src='require("@/assets/LockAR/hotel/1.png")' contain max-height="500"></v-img>
                    </v-card> 
                    <v-card v-if="n == 3" flat class="pa-6 my-10">
                        <h1 class="display-2 accent--text"> Seamless 
                            Navigation</h1>
                        <p class="pt-4">Locate and navigate to any connected door from a distance, seamlessly through overlay arrows in AR space</p>
                    </v-card> 
                    <v-card v-if="n == 4" flat >
                        <v-row>
                            <v-col cols="12" md="6">
                                <v-img :src='require("@/assets/LockAR/hotel/5.png")' contain max-height="500"></v-img>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-img :src='require("@/assets/LockAR/hotel/6.png")' contain max-height="500"></v-img>
                            </v-col>
                        </v-row>
                    </v-card> 
                </v-col>
            </v-row>
        </v-container>

        
    </v-container>
</template>

<script>
export default {
    name: 'Integration',

};
</script>