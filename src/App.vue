<template>
  <div>
    <LikeHeader></LikeHeader>
    <LikeNumber></LikeNumber>
  </div>
</template>


<script>
// ローカルで使うコンポーネントをインポートする
import LikeHeader from "./LikeHeader";

export default {
  // コンポーネントを用意
  components: {
    // 使いたい名前: コンポーネントの中身
    LikeHeader,
  },
};
</script>
