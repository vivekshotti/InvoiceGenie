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
    <div class="grid grid-rows-6 grid-flow-col">
      <div class="row-span-1">
        <nav class="flex py-3 px-5 text-gray-700 bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700" aria-label="Breadcrumb">
          <ol class="inline-flex items-center space-x-1 md:space-x-3">
            <li class="inline-flex items-center">
              <div class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                Dashboard
              </div>
            </li>
          </ol>
        </nav>
      </div>
      <div class="row-span-5">     

      </div>
      

    </div>
  </div>
</div>

</template>

<style scoped>



</style>