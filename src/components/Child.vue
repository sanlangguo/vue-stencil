<template>
  <div class="child">
    <p>{{msg}}</p>
    <button @click="fromChild">to father fn</button>
    <button @click="toFatherMsg">to father Msg</button>
  </div>
</template>

<script>
export default {
  props: ["msg", "fromChild"],
  data() {
    return {
      word: "to father msg",
      childMsg: "2 22"
    };
  },
  methods: {
    toFatherMsg() {
      this.$emit("getChildMsg", this.childMsg);
    }
  }
};
</script>

