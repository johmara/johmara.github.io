<template>
  <v-footer class="footer mt-6" color="mint_cream" elevation="4">
      <v-container>
              <v-row>
                <v-col cols="1" class="pa-5 ma-5">
                    <v-avatar size="50">
                        <v-img class="rounded-circle" :src="img" contain/>
                    </v-avatar>
                </v-col>
                <v-col v-for="(info, i) in contact_info" :key="i">
                    <v-row dense>
                        <v-card-text class="font-weight-bold">{{info[0]}}:</v-card-text>
                    </v-row>
                    <v-row dense class="mt-n7">
                        <v-card-text  class="font-weight-bold">
                            <a :href="info[2]">{{info[1]}}</a>
                            </v-card-text>
                        <v-card-text class="mt-n9 font-weight-bold" v-if="info[0] == 'Address'">
                            {{info[2]}}
                        </v-card-text>
                    </v-row>
                </v-col>
            </v-row>
            <v-divider></v-divider>
          </v-container>
  </v-footer>
</template>

<script>
export default {
    name: "Footer",

    data: () => ({
        img: require("@/assets/profile.png"),
        contact_info: {
            email: [
                'E-mail',
                'johan.t.martinson@gmail.com',
                'mailto:johan.t.martinson@gmail.com?subject=%5Bjohmara.dev%5D'
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
        }

    })

}
</script>

<style>

</style>