<template>
  <div class="hello">
    <div class="row"  style="padding-top: 55px;background-color:#fff;">
      //给自己需要导出的ui部分.定义id为"pdfDom".此部分将就是pdf显示的部分
    </div>
    <button type="button" class="btn btn-primary" v-on:click="getPdf()">导出PDF</button>
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
// import html2canvas from 'html2canvas';
// import $ from 'jquery'
// import JsPDF from 'jspdf'
export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },
    data () {
        return {
            htmlTitle: '页面导出PDF文件名'
        }
    },
    mounted() {
    },
    methods: {
        // dataURLToBlob(dataurl) {//ie 图片转格式
        //     var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
        //         bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
        //     while (n--) {
        //         u8arr[n] = bstr.charCodeAt(n);
        //     }
        //     return new Blob([u8arr], {type: mime})
        // },
        // downloadResult(name) {
        //     let canvasID = document.body
        //     let a = document.createElement('a');
        //     html2canvas(canvasID).then(canvas => {
        //         let dom = document.body.appendChild(canvas);
        //         dom.style.display = "none";
        //         a.style.display = "none";
        //         document.body.removeChild(dom);
        //         let blob = this.dataURLToBlob(dom.toDataURL("image/png"));
        //         a.setAttribute("href", URL.createObjectURL(blob));
        //         a.setAttribute("download", name + ".png")
        //         document.body.appendChild(a);
        //         a.click();
        //         URL.revokeObjectURL(blob);
        //         document.body.removeChild(a);
        //     });
        // },
        // printOut(name) {
        //     // 个人观察只是截取可见范围以及以下的区域，所以先将滚动条置顶
        //     $(window).scrollTop(0); // jQuery 的方法
        //     document.body.scrollTop = 0; // IE的
        //     document.documentElement.scrollTop = 0; // 其他
        //     this.downloadResult(name)
        // },
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
