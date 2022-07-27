<script setup>
import NavDrawer from "../components/NavDrawer.vue";
import RevenueTrend from "../components/RevenueTrendDashDashboardView.vue";



</script>

<template>
<div class="grid-container grid grid-cols-6 divide-x">
  <div class="h-screen col-span-1">
    <div class="m-2">
        <NavDrawer/>
    </div>
  </div>
  <div class="item2 col-span-5 bg-gray-100">
    <div class="flex flex-col">
      <!-- BreadCrumbs -->
      <div class="flex flex-rows bg-white border-b-2">
        <div class="breadcrumbs mx-5 my-3">
          <nav class="flex" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 md:space-x-3">
              <li class="inline-flex items-center">
                <a href="#" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  <div>
                      <font-awesome-icon icon="fa-solid fa-chart-line" />
                      Dashboard
                  </div>
                </a>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <!-- Vitals Label -->
      <div class="mx-5 my-3">
        <text class="text-2xl">Vitals : </text>
      </div>

      <!-- Vitals Boxes -->
      <div class="mx-5 space-x-5 flex flex-rows h-1/4">
        <div class="w-1/3 bg-white rounded-[0.5rem] border-2 flex items-center">
          <div class="px-5 py-4">
            <div class="grid grid-cols-12">
              <div class="col-span-6">Number of Invoice Payments due today: </div>
              <div class="col-span-6 text-center">
                <text class="text-5xl">4</text>
              </div>
            </div>
          </div>
        </div>
        <div class="w-1/3 bg-white rounded-[0.5rem] border-2 flex items-center">
          <div class="px-5 py-4">
            <div class="grid grid-cols-12">
              <div class="col-span-6">Total Value of Invoice Payments due today: </div>
              <div class="col-span-6 text-center">
                <text class="text-5xl">₹99,800</text>
              </div>
            </div>
          </div>
        </div>
        <div class="w-1/3 bg-white rounded-[0.5rem] border-2 flex items-center">
          <div class="px-5 py-4">
            <div class="grid grid-cols-12">
              <div class="col-span-4 flex items-center">Revenue Trend till now: </div>
              <div class="col-span-8">
                <RevenueTrend />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Overview Label -->
      <!-- <div class="mx-5 my-3">
        <text class="text-2xl">Overview : </text>
      </div> -->

      <!-- Overview Box -->
      <!-- <div class="mx-5">
        <div class="w-full h-max bg-white rounded-[0.5rem] border-2 flex items-center">
          <div class="px-5 py-4">
            <div class="w-full grid grid-rows-2 grid-flow-col gap-4">
              <div class="w-1/2">01</div>
              <div class="w-1/2">02</div>
              <div class="w-1/2">03</div>
              <div class="w-1/2">04</div>
            </div>
          </div>
        </div>
      </div> -->

    </div>
  </div>
</div>

</template>

<style scoped>

</style>