<template>
    <v-container class="py-10 my-16">
        <h1 class="text-center display-2">Discussion & Future works</h1>
            
                <v-timeline large reverse class="mt-5">

                    <v-timeline-item >
                        <template v-slot:icon>
                            <v-avatar>
                            <img :src='require("@/assets/LockAR/Q.png")'>
                            </v-avatar>
                        </template>
                        <template >
                            <v-card class="pa-5" elevation="6" > 
                                <p class="font-weight-bold">What was the process of how this project came to be?</p>
                            </v-card>
                        </template>
                    </v-timeline-item>
                    
                    <v-timeline-item >
                        <template v-slot:icon>
                            <v-avatar>
                            <img :src='require("@/assets/LockAR/A.png")'>
                            </v-avatar>
                        </template>
                        <template >
                            <v-card class="pa-5" elevation="6"> 
                                <p class="font-weight-bold">This project was first done as a research through design, and the last part as a design for the real world.</p>
                            </v-card>
                        </template>
                    </v-timeline-item>
                    <v-timeline-item >
                        <template v-slot:icon>
                            <v-avatar>
                            <img :src='require("@/assets/LockAR/A.png")'>
                            </v-avatar>
                        </template>
                        <template v-slot:opposite>
                            <v-card class="pa-5" elevation="6">
                                <span class="font-weight-bold">
                                    We tried to answer the questions about how can AR be used to authenticate access of a physical entity, and how can we balance the convinience of AR with the security of AR authentication,
                                </span>
                                <span class="font-weight-bold fire--text">
                                    AR does well to help people navigate new places,                                
                                </span>
                                <span class="font-weight-bold">
                                    like a new school building or a hotel for example with proper verification methods, then based on this conclusion we came about this app.                             
                                </span>
                            </v-card>
                        </template>
                    </v-timeline-item> 
                    <v-timeline-item small fill-dot>
                        <template v-slot:opposite>
                        </template>
                    </v-timeline-item>                   
                    
                    <v-timeline-item >
                        <template v-slot:icon>
                            <v-avatar>
                            <img :src='require("@/assets/LockAR/Q.png")'>
                            </v-avatar>
                        </template>
                        <template >
                            <v-card class="pa-5" elevation="6" > 
                                <p class="font-weight-bold">What do you think are the strengths of this prototype? </p>
                            </v-card>
                        </template>
                    </v-timeline-item>
                    
                    <v-timeline-item >
                        <template v-slot:icon>
                            <v-avatar>
                            <img :src='require("@/assets/LockAR/A.png")'>
                            </v-avatar>
                        </template>
                        <template >
                            <v-card class="pa-5" elevation="6"> 
                                <span class="font-weight-bold">Firstly this app provided a </span>
                                <span class="font-weight-bold fire--text">very seamless and efficient way for users to enter physical spaces,</span>
                                <span class="font-weight-bold">especially when they are in new places like schools or hotels, instead of worrying about forgetting their cards or getting lost in the building, they just need to follow the arrows and do a simple swipe to unlock the doors, this is the main strength of the concept.</span>
                            </v-card>
                        </template>
                    </v-timeline-item>
                    <v-timeline-item >
                        <template v-slot:icon>
                            <v-avatar>
                            <img :src='require("@/assets/LockAR/A.png")'>
                            </v-avatar>
                        </template>
                        <template v-slot:opposite>
                            <v-card class="pa-5" elevation="6">
                                <span class="font-weight-bold">
                                    Besides, from the evaluations we also got feedback saying that
                                </span>
                                <span class="font-weight-bold fire--text">
                                    the workflow is intuitive,                                
                                </span>
                                <span class="font-weight-bold">
                                    and most information on the interfaces is clear an easy to understand, this is the strength of our design and implementation.  
                                </span>
                            </v-card>
                        </template>
                    </v-timeline-item>
                    <v-timeline-item small fill-dot>
                        <template v-slot:opposite>
                        </template>
                    </v-timeline-item>

                 
                    <v-timeline-item >
                        <template v-slot:icon>
                            <v-avatar>
                            <img :src='require("@/assets/LockAR/Q.png")'>
                            </v-avatar>
                        </template>
                        <template >
                            <v-card class="pa-5" elevation="6" > 
                                <p class="font-weight-bold">What do you think are the weaknesses of this prototype, or what could be improved in future works? </p>
                            </v-card>
                        </template>
                    </v-timeline-item>
                    
                    <v-timeline-item >
                        <template v-slot:icon>
                            <v-avatar>
                            <img :src='require("@/assets/LockAR/A.png")'>
                            </v-avatar>
                        </template>
                        <template >
                            <v-card class="pa-5" elevation="6"> 
                                <span class="font-weight-bold">The functionality is not fully implemented in our current prototype yet, and some details on the interfaces still needs to be refined, for example we got feedback that the function of tapping the arrow the trigger the navigation is kind of hidden, and tip to indicate users to swipe to unlock the door is like a button. </span>
                            </v-card>
                        </template>
                    </v-timeline-item>
                    <v-timeline-item >
                        <template v-slot:icon>
                            <v-avatar>
                            <img :src='require("@/assets/LockAR/A.png")'>
                            </v-avatar>
                        </template>
                        <template v-slot:opposite>
                            <v-card class="pa-5" elevation="6">
                                <span class="font-weight-bold">
                                    Also, it’s a pity that users still have to do a log in before using this app, some technologies like face id or finger print detection could be implemented in future works to make the verification part more integrated to the workflow, but that also would involve issues about personal data collection,
                                </span>
                                <span class="font-weight-bold fire--text">
                                    choosing a proper technology and use it in a proper manner as verification methods might be an important topic in our future researches.                               
                                </span>
                            </v-card>
                        </template>
                    </v-timeline-item>
                </v-timeline>


                <h1 class="text-center display-2 my-10 pt-10">Thanks for watching!</h1>
                <p class="text-center font-weight-bold">Group 23</p>
                <p class="text-center font-weight-bold">Johan Martinson & Yibin Huai</p>
            
    </v-container>
</template>

<script>
export default {
    name: 'Discussion',

};
</script>