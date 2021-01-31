<template>
  <div class="footer">
      <v-card color="mint_cream">
          <v-container>
              <v-row>
                <v-col cols="1" class="pa-5 ma-5">
                    <v-avatar size="50">
                        <v-img class="rounded-circle" :src="img" contain/>
                    </v-avatar>
                </v-col>
                <v-col v-for="(info, i) in contact_info" :key="i">
                    <v-row dense>
                        <v-card-text :href="info[2]" class="font-weight-bold">{{info[0]}}</v-card-text>
                    </v-row>
                    <v-row dense class="mt-n6">
                        <v-card-text :href="info[2]" class="font-weight-bold">{{info[1]}}</v-card-text>
                    </v-row>
                </v-col>
            </v-row>
          </v-container>
      </v-card>
  </div>
</template>

<script>
export default {
    name: "Footer",

    data: () => ({
        img: require("@/assets/profile.png"),
        contact_info: {
            address: [
                'Address',
                'Richertsgatan 2F lgh 1402, 412 81 Göteborg, Sverige',
                ''
            ],
            phone: [
                'Phone Number',
                '+46(0) 763 750 667',
                'tel:+46763750667'
            ],
            email: [
                'E-mail',
                'johan.t.martinson@gmail.com',
                'mailto:johan.t.martinson@gmail.com'
            ],
            linkedin: [
                'LinkedIn',
                '/in/johanmartinson',
                'https://www.linkedin.com/in/johanmartinson'
            ]
        }

    })

}
</script>

<style>

</style>