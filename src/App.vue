<template>
  <div>
    <LikeHeader></LikeHeader>
    <LikeNumber></LikeNumber>
  </div>
</template>


<script>
// ローカルで使うコンポーネントをインポートする
import LikeHeader from "./components/LikeHeader";

export default {
  // コンポーネントを用意
  components: {
    // 使いたい名前: コンポーネントの中身ES6はkeyvalueが一緒なら省略できる
    LikeHeader,
  },
};
</script>

<style scoped>
  /*  */
  div{
    border: blue solid 1px;
  }
</style>
