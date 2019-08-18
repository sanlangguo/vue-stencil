<template>
  <div class="hello">
    <Child :msg="text" :fromChild="fatherFn" @getChildMsg='getMewMsg'></Child>
    <div>{{fromChildWotd}}</div>
  </div>
</template>

<script>
import Child from "./Child";
export default {
  components: {Child},
  data() {
    return {
      text: "fathertochild",
      fromChildWotd: '',
    };
  },
  methods: {
    /**
     * 子组件触发父组件的方法
     */
    fatherFn() {
      this.text = 'change msg bacause child do it';
    },

    /**
     * 子组件给父组件穿值
     */
    getMewMsg(msg) {
      this.fromChildWotd = msg;
    }
  }
};
</script>

