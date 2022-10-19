<template>
  <div>关于本站：HuiIndex</div>
  <div>
    <a href="https://github.com/liyupi/yuindex" target="_blank">
      代码开源，欢迎 star 和贡献~
    </a>
  </div>
  <div></div>
</template>

<script setup lang="ts">
interface InfoBoxProps {
  seconds: string;
}

const props = withDefaults(defineProps<InfoBoxProps>(), {});
</script>

<style scoped></style>
