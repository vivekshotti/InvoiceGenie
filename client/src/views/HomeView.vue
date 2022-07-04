<script>
  import HomeInfo from "../components/HomeInfo.vue";
  import HomeLoginSignup from "../components/HomeLoginSignup.vue";
  import SaleBanner from "../components/SaleBanner.vue";
  import GlobalFooter from "../components/GlobalFooter.vue";


  export default {
  name: 'App',
  components: {
    HomeInfo,
    HomeLoginSignup,
    SaleBanner,
    GlobalFooter

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

<template> <!--color: "bg-[#111827]"--> <!-- <img src="../assets/logoig.png"/> -->
<SaleBanner/>
  <div class="m-5 md:m-10">

    <div class="md:h-full md:flex md:flex-row md:space-x-4">
      <div class="md:p-10 md:border-solid md:border-2 md:border-blue-700 md:basis-1/2">
        <HomeInfo/>
      </div>
      <div class="md:p-10 md:border-solid md:border-2 md:border-blue-700 md:basis-1/2">
        <div class="grid grid-cols-1 gap-10">
          <div class="basis-1/2">
            <HomeLoginSignup/>
          </div>
        </div>
      </div>
    </div>

  </div>
  <div class="m-5 md:m-10">
    <GlobalFooter/>
  </div>
  <!-- <div class="">

  </div> -->
  
</template>


<style scoped>

</style>
