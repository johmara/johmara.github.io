<template>
    <v-container fluid>
        <v-row dense>
            <v-col cols="12" md="6">
                <v-card class="pa-6 ma-6" elevation="4">
                    <h1 class="display-3">Research Questions</h1>
                    
                    <div class="py-10 my-5">
                        <v-card-title>How can AR be used to authenticate access of a physical entity?</v-card-title>
                        <v-card-title>How can we balance the convinience of AR with the security of AR authentication?</v-card-title>
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
                </v-card> 
            </v-col> 
            <v-col cols="12" md="6">
                <v-card class="pa-6 ma-6" elevation="4">
                    <v-skeleton-loader type="card, card" loading>
                        
                    </v-skeleton-loader>
                </v-card> 
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'ProjectDefine',

};
</script>