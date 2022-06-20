<script>
import NavDrawer from "../components/NavDrawer.vue";

  export default {
  name: 'DashboardView',
  components: {
    NavDrawer,

},
  data() {
    return {

    }
  },
  methods:
  {

  }
  }

</script>

<template>
<div class="grid-container grid grid-cols-6 divide-x">
  <div class="h-screen item1 col-span-1 shadow-md">
    <div class="m-5">
        <NavDrawer/>
    </div>
  </div>
  <div class="item2 col-span-5 bg-gray-100">
    <!-- <NavDrawer/> -->
  </div>
</div>

</template>

<style scoped>



</style>