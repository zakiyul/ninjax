<template>
  <div>
    <product-list-one></product-list-one>
    <product-list-two></product-list-two>
  </div>
</template>

<script>
import ProductListOne from "./components/product-list-one.vue";
import ProductListTwo from "./components/product-list-two.vue";

export default {
  name: "App",
  components: {
    "product-list-one": ProductListOne,
    "product-list-two": ProductListTwo,
  },
  data() {
    return {};
  },
};
</script>

<style>
body {
  font-family: Ubuntu;
  color: #555;
}
</style>
