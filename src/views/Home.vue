<template>
    <div id="home">
        {{Home}}
    </div>
</template>
<script>
import { getResourcesToken } from '../api/index';
export default {
    data() {
        return {
            Home: 'home',
        }
    },
    created() {
        getResourcesToken().then(res => {
            // console.log(res, 'suce')
        }).catch(() => {
            // console.log('error', 212)
        })
    }
}
</script>

<style lang="sass" scoped>

</style>

