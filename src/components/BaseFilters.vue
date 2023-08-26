<template>
    <select @change="changeDataBasedOnFilters($event)">
        <option disabled selected="true">Choose option</option>
        <option>Active</option>
        <option>Inactive</option>
        <option>Active and Inactive</option>
    </select>
</template>

<script setup>
import {useStore} from "vuex";

const props = defineProps(['data'])
const store = useStore();
const changeDataBasedOnFilters = (e) => {
    store.commit('setDataBasedOnFilter', {filter: e.target.value.toLowerCase(), data: props.data})
}
</script>

<style lang="scss" scoped>

</style>