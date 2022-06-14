<script>
  import HomeInfo from "../components/HomeInfo.vue";

  export default {
  name: 'App',
  components: {
    HomeInfo
},
  data() {
    return {

    }
  },
  methods:
  {

  },
  
}

</script>

<template>
  <div>
    <div class="h-screen m-8 flex flex-row space-x-4">
      <div class="p-10 border-solid border-2 border-sky-500 basis-1/2">
        <HomeInfo/>
      </div>
      <div class="p-10 border-solid border-2 border-sky-500 basis-1/2">
        yopity yopity yo
      </div>
    </div>
  </div>
</template>

<style>
  
</style>
