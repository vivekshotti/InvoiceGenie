<script>
import NavDrawer from "../components/NavDrawer.vue";

  export default {
  name: 'DashHomeView',
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
  <div class="h-screen col-span-1 shadow-md">
    <div class="m-2">
        <NavDrawer/>
    </div>
  </div>
  <div class="item2 col-span-5 bg-gray-100">
    <div class="flex flex-col bg-white border-b-2">
      <div class="breadcrumbs mx-5 my-3">
        <nav class="flex" aria-label="Breadcrumb">
          <ol class="inline-flex items-center space-x-1 md:space-x-3">
            <li class="inline-flex items-center">
              <a href="#" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                <div>
                    <font-awesome-icon icon="fa-solid fa-circle-question" />
                    Help
                </div>
              </a>
            </li>
            <!-- <li>
              <div class="flex items-center">
                <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                <a href="#" class="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white">Projects</a>
              </div>
            </li>
            <li aria-current="page">
              <div class="flex items-center">
                <svg class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Flowbite</span>
              </div>
            </li> -->
          </ol>
        </nav>
      </div>
    </div>
    <div class="mx-5 my-3 text-center">
      <text class="text-2xl">
        Coming Soon ...
      </text>
    </div>
  </div>
</div>

</template>

<style scoped>

</style>