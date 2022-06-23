<script>
import NavDrawer from "../components/NavDrawer.vue";
import TotalInvoicesChart1 from "../components/TotalInvoicesChart1.vue";

  export default {
  name: 'DashboardView',
  components: {
    NavDrawer,
    TotalInvoicesChart1,

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
        <!-- <div class="flex-none grid grid-rows-2 grid-flow-col">
          <div class="border-solid border-2">
            <div class="total invoices">
              <TotalInvoicesChart1 />
            </div>
          </div>
          <div class="border-solid border-2">2</div>
          <div class="border-solid border-2">3</div>
          <div class="border-solid border-2">4</div>
        </div> -->
        <div class="container border-solid border-2">
          <div class="center grid grid-cols-2 gap-4">
            <div class="w-1/2 grid grid-rows-2">
              <div>1</div>
              <div>1</div>
            </div>
            <div class="w-1/2 grid grid-rows-3">
              <div>2</div> 
              <div>2</div> 
              <div>2</div> 
            </div>
          </div>
        </div>
      </div>
      

    </div>
  </div>
</div>

</template>

<style scoped>



</style>