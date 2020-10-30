<template>
    <v-container>
        <v-row>

            <v-col cols="6" md="3">
                <v-chip color="accent" class="text-center headline text-uppercase" >
                    define
                </v-chip>
                <v-timeline dense clipped>

                    <v-timeline-item small color="dark_space" fill-dot>
                        <p class="title">Design Challenge</p>
                        <p class="font-weight-light">Authentication & access to physical entities</p>

                    </v-timeline-item>

                    <v-timeline-item small color="dark_space" fill-dot>
                        <p class="title"> Approach </p>
                        <p class="font-weight-light">Research through Design</p>
                    </v-timeline-item>

                    <v-timeline-item small color="dark_space" fill-dot>
                        <p class="title">Research Questions</p>
                        <p class="font-weight-light">How can AR be used to authenticate access of a physical entity?</p>
                        <p class="font-weight-light">How can we balance the convinience of AR with the security of AR authentication? </p>
                    </v-timeline-item>

                </v-timeline>
            </v-col>

            <v-col cols="6" md="3">
                <v-chip color="accent" class="text-center headline" >
                    EVALUATION 1
                </v-chip>
                <v-timeline dense clipped>

                    <v-timeline-item small color="dark_space" fill-dot>
                        <p class="title">Prototyping</p>
                        <p class="font-weight-light">3 wireframes for different directions</p>

                    </v-timeline-item>

                    <v-timeline-item small color="dark_space" fill-dot>
                        <p class="title"> Observation </p>
                        <p class="font-weight-light">Participants try the prototypes to fullfill certain tasks</p>
                        <p class="font-weight-light">Simple questions asked afterwards</p>
                    </v-timeline-item>

                    <v-timeline-item small color="dark_space" fill-dot>
                        <p class="title">Conclusion</p>
                        <p class="font-weight-light">AR does well to help people navigate new places, like a new school building or a hotel for example</p>
                    </v-timeline-item>

                </v-timeline>
            </v-col>  

            <v-col cols="6" md="3">
                <v-chip color="accent" class="text-center headline" >
                    EVALUATION 2
                </v-chip>
                <v-timeline dense clipped>

                    <v-timeline-item small color="dark_space" fill-dot>
                        <p class="title">Prototyping</p>
                        <p class="font-weight-light">2 wireframes for different contexts</p>

                    </v-timeline-item>

                    <v-timeline-item small color="dark_space" fill-dot>
                        <p class="title"> Observation </p>
                        <p class="font-weight-light">Participants try the prototypes to fullfill certain tasks</p>
                        <p class="font-weight-light">Simple questions asked afterwards</p>
                    </v-timeline-item>

                    <v-timeline-item small color="dark_space" fill-dot>
                        <p class="title">Conclusion</p>
                        <p class="font-weight-light">The security of AR  Authentication might not be very convenient. Verification of the user still needs to be done in some way</p>
                    </v-timeline-item>

                </v-timeline>
            </v-col>            
            
            <v-col cols="6" md="3">
                <v-chip color="accent" class="text-center headline" >
                    INTEGRATION
                </v-chip>
                <v-timeline dense clipped>

                    <v-timeline-item small color="dark_space" fill-dot>
                        <p class="title"> Approach </p>
                        <p class="font-weight-light">Design for the Real World</p>
                    </v-timeline-item>

                    <v-timeline-item small color="dark_space" fill-dot>
                        <p class="title">Prototyping</p>
                        <p class="font-weight-light">Native prototypes</p>
                        <p class="font-weight-light">Finding solutions to unexpected implementation problems</p>
                    </v-timeline-item>

                    <v-timeline-item small color="dark_space" fill-dot>
                        <p class="title">Conclusion</p>
                        <p class="font-weight-light">Technology limitation in implementing a fully functioning app. Verification needs to be integrated to users’ workflow.</p>
                    </v-timeline-item>

                </v-timeline>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'ProjectStructure',

};
</script>