<template>
    <v-container fluid>
        <v-card class="pa-6 ma-6" elevation="4">
        <v-row dense>
            <v-col cols="12" md="7">
                    <h1 class="display-3">Research Questions</h1>
                    
                    <div class="py-10 my-5">
                        <v-row >
                            <v-col cols="2" align-self="center">
                                <v-chip color="accent" :ripple="false" large>
                                    <v-avatar class="font-weight-bold subtitle-1" >
                                        1
                                    </v-avatar>
                                </v-chip>
                            </v-col>
                            <v-col align-self="center">
                                <p class="font-weight-normal headline">How can AR be used to authenticate access of a physical entity?</p>
                            </v-col>
                        </v-row>
                        <v-row >
                            <v-col cols="2" align-self="center">
                                <v-chip color="fire" :ripple="false" large>
                                    <v-avatar class="white--text font-weight-bold subtitle-1" >
                                        2
                                    </v-avatar>
                                </v-chip>
                            </v-col>
                            <v-col align-self="center">
                                <p class="font-weight-normal headline">How can we balance the convinience of AR with the security of AR authentication?</p>
                            </v-col>
                        </v-row>
                    </div>
                    <v-row class="mt-2">
                        <v-col cols="4">
                            <p class="text-right">Design Challenge: </p>
                        </v-col>
                        <v-col cols="8">
                            <p class="font-weight-light">Authentication & access to physical entities</p>
                        </v-col>
                    </v-row>
                    
                    <v-row>
                        <v-col cols="4">
                            <p class="text-right">Approach:</p>
                        </v-col>
                        <v-col cols="8">
                            <p class="font-weight-light">Research through Design</p>
                        </v-col>
                    </v-row>
                    
                    <v-row>
                        <v-col cols="4">
                            <p class="text-right">Aim:</p>
                        </v-col>
                        <v-col cols="8">
                            <p class="font-weight-light">our aim is to use emerging technologies to create integrated, useful, and satisfying authentications.</p>
                        </v-col>
                    </v-row>
            </v-col> 
            <v-col md="5" align-self="center" v-if="$vuetify.breakpoint.smAndUp">
                <v-card class="pa-6 ma-6" flat>
                    <v-img :src="require('@/assets/LockAR/researchQuestions.svg')">

                    </v-img>
                </v-card> 
            </v-col>
        </v-row>
        </v-card> 
    </v-container>
</template>

<script>
export default {
    name: 'ProjectDefine',

};
</script>