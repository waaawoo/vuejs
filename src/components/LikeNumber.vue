<template>
  <!-- この中は一つの要素でないといけない -->
  <div >
    <p>いいね{{ number }}</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
// コンポーネントオプションをおいていく
export default {
  data() {
    return {
      number: 5,
    };
  },
  methods: {
    increment() {
      this.number += 1;
    },
  },
};
</script>


<style scoped>
/* スコープつきCSSはscopedをstyleタグへつける */
  div{
    border: solid  1px red;
  }
</style>
