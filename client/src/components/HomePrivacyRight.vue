<script>
  export default {
      name: 'HomePrivacyRight',
  } 
</script>

<template>

  <div class="grid h-full place-items-center">
    <img src="../assets/keysSecure.png" height="200"/>
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