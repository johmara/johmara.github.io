<template>
    <v-container>
  <v-card light color="mint_cream" elevation="10">

    <v-tabs
      v-model="tab"
      background-color="transparent"
      color="basil"
      centered
      grow
    >
      <v-tab
        v-for="item in items"
        :key="item"
      >
        {{ item.name }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in items"
        :key="item"
      >
        <v-card
          flat
          color="mint_cream"
        >
          <v-img :src="item.src" height="350px" contain> </v-img>
          <v-card-text class="text-center">{{item.text}}</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
  </v-card>
    </v-container>
</template>

<script>
  export default {
    name: 'IntFlow',
    data () {
      return {
        tab: null,
        items: [
          { name: 'Vision', src: require('@/assets/LockAR/impl/vision.svg'), text: 'The vision was a prototype which could locate doors through manual inputs and dectect the door through the camera and beeing able to show the unlock animation.'},
          { name: 'Implementation', src: require('@/assets/LockAR/impl/implementation.svg'), text: 'The result could only show the unlock animation and had some basic detection of rectangles'}
        ],
      }
    },
  }
</script>