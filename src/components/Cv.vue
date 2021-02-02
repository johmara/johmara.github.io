<template>
  <div class="cv">
    <v-container>
        <v-card class="header" dark color="dark_space">
            <v-row>
                <v-col cols="3" class="px-5 mx-5">
                    <v-card class="rounded-circle no-hand" hover  color="transparent" outlined height="209" width="209">
                        <v-row class="pa-1" dense justify="center">
                            <v-avatar size="200">
                                <v-img class="rounded-circle" :src="img" contain/>
                            </v-avatar>
                        </v-row>
                    </v-card>
                </v-col>
                <v-col>
                    <v-card-title class="text-h2">Johan Martinson</v-card-title>
                    <v-row dense>
                        <v-col cols="12" sm="6" lg="" v-for="(info, i) in contact_info" :key="i">
                            <v-card-text class="mb-n7 font-weight-bold">{{info[0]}} </v-card-text>
                            <v-card-text  class="font-weight-light">
                                <a style="color: var(--mint_cream);" :href="info[2]">{{info[1]}}</a>
                            </v-card-text>
                        </v-col>
                        
                    </v-row>
                </v-col>
            </v-row>

        </v-card>

        <v-row>
            <v-col cols="12" lg="8">
                <v-card class="mt-5">
                    <v-card-title>Goals and Profile</v-card-title>
                    <v-card-text> I study at Chalmers University of technology where I am now doing my masters
                         in Software engineering and technology. I have previously studied Computer Engineering
                         as a bachelors degree. As well as study I am involved in the board of Chalmersspexet
                         where my main responsibilities are PR-strategy and sponsorships. I work well in groups and
                         work hard to get the work done as efficiently as possible without loss of quality. I learn
                         easiest by doing and like to try myself first and then ask for help if I'm stuck. Besides 
                         that I am a person who always does the work I set out to do.</v-card-text>
                </v-card>
                <v-card class="mt-5">
                    <v-card-title>Education</v-card-title>
                    <v-row v-for="(edu, i) in education" :key="i">
                        <v-col>
                            <v-row>
                                <v-col>
                                    <p class="ms-4 font-weight-black text-subtitle-1">{{edu.title}}</p>
                                    <v-card-subtitle class="mt-n9">at {{edu.at}}</v-card-subtitle>
                                </v-col>
                                <v-col>
                                    <v-card-subtitle class="text-right">{{edu.date}}</v-card-subtitle>
                                </v-col>
                            </v-row>
                            <v-card-text class="mt-n9">{{edu.desc}}</v-card-text>
                            <v-divider class="mx-5"/>
                        </v-col>
                    </v-row>

                </v-card>

                <v-card class="mt-5">
                    <v-card-title>Work Experience</v-card-title>
                    <v-row v-for="(wExp, i) in workexp" :key="i">
                        <v-col>
                            <v-row>
                                <v-col>
                                    <p class="ms-4 font-weight-black text-subtitle-1">{{wExp.title}}</p>
                                    <v-card-subtitle class="mt-n9">at {{wExp.at}}</v-card-subtitle>
                                </v-col>
                                <v-col>
                                    <v-card-subtitle class="text-right">{{wExp.date}}</v-card-subtitle>
                                </v-col>
                            </v-row>
                            <v-card-text class="mt-n9">{{wExp.desc}}</v-card-text>
                            <v-divider class="mx-5"/>
                        </v-col>
                    </v-row>
                </v-card>
                <v-card class="mt-5">
                    <v-card-title>Courses</v-card-title>
                    <v-row v-for="(cs, i) in courses" :key="i">
                        <v-col>
                            <v-row>
                                <v-col>
                                    <p class="ms-4 font-weight-black text-subtitle-1">{{cs.title}}</p>
                                    <v-card-subtitle class="mt-n9">at {{cs.at}}</v-card-subtitle>
                                </v-col>
                                <v-col>
                                    <v-card-subtitle class="text-right">{{cs.date}}</v-card-subtitle>
                                </v-col>
                            </v-row>
                            <v-card-text class="mt-n9">{{cs.desc}}</v-card-text>
                            <v-divider class="mx-5"/>
                        </v-col>
                    </v-row>
                </v-card>
                <v-card class="mt-5">
                    <v-card-title>Comissions of Trust</v-card-title>
                    <v-row v-for="(t, i) in trust" :key="i">
                        <v-col>
                            <v-row>
                                <v-col>
                                    <p class="ms-4 font-weight-black text-subtitle-1">{{t.title}}</p>
                                    <v-card-subtitle class="mt-n9">at {{t.at}}</v-card-subtitle>
                                </v-col>
                                <v-col>
                                    <v-card-subtitle class="text-right">{{t.date}}</v-card-subtitle>
                                </v-col>
                            </v-row>
                            <v-card-text class="mt-n9">{{t.desc}}</v-card-text>
                            <v-divider class="mx-5"/>
                        </v-col>
                    </v-row>
                    
                </v-card>

            </v-col>

            <v-col cols="12" lg="4">
                <v-card class="mt-5">
                    <v-card-title class="mb-5">Languages and Data skills</v-card-title>
                    <v-card-subtitle>Languages</v-card-subtitle>
                    <v-row class="mt-n10" align="center" v-for="(skill, i) in languageSkills" :key="i">
                        <v-col cols="5" offset="0">
                            <v-card-text>{{skill.name}}</v-card-text>
                        </v-col>
                        <v-col cols="6">
                            <v-progress-linear :value="skill.value" color="accent" height="10" rounded></v-progress-linear>
                        </v-col>                    
                    </v-row>
                    <v-card-subtitle class="font-weight-bold">Data Skills</v-card-subtitle>
                    <v-row class="mt-n10" align="center" v-for="(skill, i) in computerSkills" :key="i">
                        <v-col cols="5" offset="0">
                            <v-card-text>{{skill.name}}</v-card-text>
                        </v-col>
                        <v-col cols="6">
                            <v-progress-linear :value="skill.value" :color="skill.colour" height="10" rounded></v-progress-linear>
                        </v-col>                    
                    </v-row>

                </v-card>
                
                <!-- <v-card class="mt-5">
                    <v-card-title>Publications</v-card-title>
                </v-card> -->
                
                <v-card class="mt-5">
                    <v-card-title>Other Merits</v-card-title>
                    <v-row v-for="(om, i) in otherMerits" :key="i">
                        <v-col>
                            <v-row>
                                <v-col>
                                    <p class="ms-4 font-weight-black text-subtitle-1">{{om.title}}</p>
                                    <v-card-subtitle class="mt-n9">at {{om.at}}</v-card-subtitle>
                                    <v-card-subtitle class="mt-n9 font-italic">{{om.date}}</v-card-subtitle>
                                </v-col>
                            </v-row>
                            <v-divider class="mx-5"/>
                        </v-col>
                    </v-row>
                </v-card>
                <v-card class="mt-5">
                    <v-card-title>References</v-card-title>
                    <v-card-subtitle class="">I will happily provide references on request.</v-card-subtitle>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                                
            </v-col>
        </v-row>

        
        

    </v-container>
  </div>
</template>

<script>
export default {
    name: "CV",

    data: () => ({
        img: require("@/assets/profile.png"),
        contact_info: {
            /*phone: [
                'Phone Number',
                '+46(0) 763 750 667',
                'tel:+46763750667'
            ],*/
            email: [
                'E-mail',
                'johan.t.martinson@gmail.com',
                'mailto:johan.t.martinson@gmail.com'
            ],
            linkedin: [
                'LinkedIn',
                '/in/johanmartinson',
                'https://www.linkedin.com/in/johanmartinson'
            ],
            github: [
                'GitHub',
                '/johmara/',
                'https://github.com/johmara/'
            ]
        },
        education: {
            mpsof: {
                title: 'Master in Software Engineering & Technology',
                at: 'Chalmers University of Technology',
                desc: `A program that combines a number of perspectives on
                    software engineering, all of which promote the common
                    goal of educating engineers who are skilled in
                    designing quality software at low development and
                    maintenance costs.`,
                date: 'Sept 2019 - Ongoing',
                whid: '',
            },
            mpsofThesis: {
                title: 'Master Thesis Software Engineering',
                at: 'Chalmers University of Technology',
                desc: `The purpose of the study is to engineer and evaluate a 
                    plugin for IntelliJ IDE that support developers when recording 
                    feature annotations. The intention is that the tool, consequently, 
                    will aid developers with adding embedded annotations to the code 
                    in order to at a later date have a less complicated time while 
                    locating features at a later date. The editing support for the 
                    annotations will be facilitated by the application’s use of 
                    techniques that can be expected from a modern editing tool. Among 
                    these, support for code completion, error markers, syntax highlighting,
                    consistency checks and refactoring are features to consider. `,
                date: 'Jan 2021 - Ongoing',
                whid: '',
            },
            dai: {
                title: 'Bachelor in Computer Engineering',
                at: 'Chalmers University of Technology',
                desc: `Studied Java, databases, testing and security among
                    other things. The studies included both work in
                    groups and as individual.`,
                date: 'Sept 2015 - Aug 2019',
                whid: '',
            },
            daiThesis: {
                title: 'Bachelors Thesis',
                at: 'Chalmers University of Technology',
                desc: `Worked with a continuous listening as information
                    receiver for an AI machine, a Natural Language
                    Processor.`,
                date: 'Jan 2018 - June 2018',
                whid: '',
            }
        },
        workexp: {
            waya: {
                title: 'Junior Software developer',
                at: 'Waya Finance & Technology',
                desc: `Worked two summers with coding full-stack micro-
                    services and APIs in Java, SQL and C# with .NET
                    frameworks. I mainly created services that
                    communicated with the middleware or our support
                    staff.`,
                date: 'June 2018 - June 2020',
                whid: '',
            },
            H_sektionen: {
                title: 'Educational officer',
                at: 'H-sektionen Chalmersstudentkår',
                desc: `Worked with exploring and informing students how they
                    can impact their education. As an educational officer
                    I also managed and took care of the economy of a team
                    of students focusing on evaluating courses and
                    holding events for students to get help with their
                    studies.`,
                date: 'June 2018 - June 2019',
                whid: '',
            },
        },
        courses: {
            kompletterande:{
                title: 'Complementary engineering skills (SSY326)',
                at: 'H-sektionen Chalmersstudentkår',
                desc: `During the course I have increased my knowledge,
                     understanding and skills in a number of areas that have connections
                     to the professional and personal development. This includes mainly
                     areas such as leadership, presentation techniques, stress management,
                     mental training, creativity, ergonomics, self-esteem, rhetoric, 
                     communication, group dynamics, and career planning.`,
                date: 'Jan 2017 - May 2017',
                whid: '',
            }
        },
        trust: {
            spexet:{
                title: 'PR strategist',
                at: 'Chalmersspexet',
                desc: `Responsible for the overarching marketing plan for the theatre group and leads the PR-group. 
                    Also leading the work regarding sponsorships and talking with other companies.`,
                date: 'Jan 2021 - Dec 2021',
                whid: '',
            },
            chk:{
                title: 'PR-Officer',
                at: 'Chalmers Handbollsklubb',
                desc: `Worked with recruiting new players, showing the members of Chalmers Student Union 
                    what the club do and worked with arranging activities during the reception at Chalmers
                    as well as the rest of the season. I also worked with setting up G-suite and creating
                    a new website.`,
                date: 'July 2019 - June 2020',
                whid: '',
            },
            H_sektionen:{
                title: 'Lay Auditor',
                at: 'H-sektionen Chalmersstudentkår',
                desc: `Audited the economy and activity of different
                    comittées at the student division.`,
                date: 'July 2019 - June 2020',
                whid: '',
            },
            HD:{
                title: 'Chairman',
                at: 'H-sektionens Datorförening',
                desc: `Led a team which arranged game nights, pubs and
                    sittings aswell as handled websites and servers for
                    the committées at the division.`,
                date: 'Apr 2017 - Apr 2018',
                whid: '',
            }
        },
        languageSkills:{
            swe:{
                name: 'Swedish',
                value: 100,
                colour: ''
            },
            eng:{
                name: 'English',
                value: 90,
                colour: ''
            },
            fra:{
                name: 'French',
                value: 40,
                colour: ''
            },
        },
        computerSkills:{
            java: {
                name: 'Java',
                value: 90,
                colour: 'cadet'
            },
            python: {
                name: 'Python',
                value: 74,
                colour: 'cadet'
            },
            SQL: {
                name: 'SQL',
                value: 90,
                colour: 'cadet'
            },
            c: {
                name: 'C',
                value: 56,
                colour: 'cadet'
            },
            Scrum: {
                name: 'Scrum',
                value: 80,
                colour: 'fire'
            },
            ProjectM: {
                name: 'Project Management',
                value: 84,
                colour: 'fire'
            },
            Git: {
                name: 'Git',
                value: 87,
                colour: 'fire'
            },
            UML: {
                name: 'UML',
                value: 77,
                colour: 'fire'
            },
            C_sharp: {
                name: 'C#',
                value: 40,
                colour: 'cadet'
            },
            javascript: {
                name: 'JavaScript',
                value: 80,
                colour: 'cadet'
            },
            html: {
                name: 'HTML',
                value: 70,
                colour: 'cadet'
            },
            css: {
                name: 'CSS',
                value: 60,
                colour: 'cadet'
            },
            vue: {
                name: 'vue',
                value: 50,
                colour: 'space_cadet'
            },
            vuetify: {
                name: 'vuetify',
                value: 70,
                colour: 'space_cadet'
            },


        },
        otherMerits:{
            chk: {
                title: 'Coaching the mens team',
                at: 'Chalmers Handbollsklubb',
                desc: ``,
                date: 'Jan 2019 - July 2021',
                whid: '',
            }
        }
    }),

    mounted() {
        
    },
    
}
</script>

<style>

</style>