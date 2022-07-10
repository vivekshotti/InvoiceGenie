<script>
  export default {
      name: 'HomeClientList',
  } 
</script>

<template>
  <div class="grid grid-cols-4 gap-4">
    <div class="">
      <img src="../assets/google.png" />
    </div>
    <div>
      <img src="../assets/microsoft.png" />
    </div>
    <div>
        <img src="../assets/meta.png" />
    </div>
    <div>
        <img src="../assets/twitter.png" />
    </div>
    <div>
        <img src="../assets/samsung.png" />
    </div>
    <div>
        <img src="../assets/zoom.png" />
    </div>
    <div>
        <img src="../assets/sap.png" />
    </div>
    <div>
        <img src="../assets/ibm.png" />
    </div>
    <div>
        <img src="../assets/mcdonalds.png" />
    </div>
    <div>
        <img src="../assets/starbucks.png" />
    </div>
    <div>
        <img src="../assets/burger-king.png" />
    </div>
    <div>
        <img src="../assets/pepsi.png" />
    </div>
    <div>
        <img src="../assets/reliance.png" />
    </div>
    <div class="mt-2">
        <img src="../assets/tata.png" />
    </div>
    <div class="mt-14">
        <img src="../assets/adani.png" />
    </div>
    <div class="mt-10">
        <img src="../assets/jsw.png" />
    </div>
  </div>

</template>

<style scoped>
img {
  transition: filter .1s ease-in-out;
  -webkit-filter: grayscale(0%); /* Ch 23+, Saf 6.0+, BB 10.0+ */
  filter: grayscale(100%); /* FF 35+ */
}

img:hover {
  -webkit-filter: grayscale(100%); /* Ch 23+, Saf 6.0+, BB 10.0+ */
  filter: grayscale(0%); /* FF 35+ */
}
</style>