<template>
  <div class="box">
    首页
  </div>
</template>

<script setup>
import { reactive, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const data = reactive({
  mouseOver: 0
});

const loadFile = () => {



  window.api.readFile('/Users/xueyuan/Desktop/electext/index.txt', (err, data) => {

    if (err) {
      console.error('Error reading file:', err);
      return;
    }
    console.log('File content:', data);
  });


}
onMounted(() => {

  console.log(' window.api: ', window.api.readFile);
  loadFile()



})

</script>

<style lang="scss" scoped>
.box {
  font-size: 60px;
}
</style>
