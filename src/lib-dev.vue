<script>
import { VueCommercioUiSample } from './entry';
export default {
    name:  'VueCommercioUiLibDev', // vue library dev component
    components: {
        VueCommercioUiSample,
    },
}
</script>

<template>
    <div class="vue-commercio-ui-lib-dev">
        <vue-commercio-ui-sample></vue-commercio-ui-sample>
    </div>
</template>

<style scoped>
    .vue-commercio-ui-lib-dev {
        display: block;
        width: 400px;
        margin: 25px auto;
    }
</style>
