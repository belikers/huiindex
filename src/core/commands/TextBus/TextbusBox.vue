<template>
  <div ref="editorContainer" class="first"></div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { createEditor } from "@textbus/editor";
import "@textbus/editor/bundles/textbus.min.css";

export default defineComponent({
  setup() {
    const editorContainer = ref();
    onMounted(() => {
      const editor = createEditor();
      editor.mount(editorContainer.value);
      editor.onChange.subscribe(() => {
        console.log(editor.getContents());
      });
    });

    return {
      editorContainer,
    };
  },
});
</script>
<style>
.first {
  width: 100%;
  height: 80vh;
  min-height: 600px;
}
</style>
