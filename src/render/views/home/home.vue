<template>
  <div class="box">
    首页 你好啊
    <input type="file" @change="handleFileChange" />

  </div>
</template>

<script setup>
import { reactive, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const data = reactive({
  mouseOver: 0,
  filePath: '',
  fileContent: null
});

const handleFileChange = (event) => {
  const file = event.target.files[0];
  if (file) {
    data.filePath = window.api.getFilePath(file);
    data.fileContent = window.api.readFile(data.filePath);
  } else {
    console.log('未选择文件');
  }
}

const loadFile = () => {



  window.api.readFile('./electext/index.txt', (err, data) => {

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
