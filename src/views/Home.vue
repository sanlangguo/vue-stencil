<template>
  <div id="home">
    <div>{{Home}}</div>
    <Father></Father>
  </div>
</template>
<script>
import { getResourcesToken } from "../api/index";
import Father from "../components/Father";
export default {
  components: {
    Father
  },
  data() {
    return {
      Home: "home"
    };
  },
  created() {}
};
</script>

<style lang="sass" scoped>

</style>

