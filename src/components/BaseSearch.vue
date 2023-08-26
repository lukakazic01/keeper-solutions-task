<template>
    <span>
        <input type="text" placeholder="Search..." @input="searchForRole()" v-model.trim="searchedValue">
    </span>
</template>

<script setup>
import {useStore} from "vuex";
import {ref} from "vue";

const store = useStore();
const searchedValue = ref('');
const emit = defineEmits(['setData'])
const props = defineProps(['data'])
const searchForRole = () => {
    if(searchedValue.value.length === 0) {
        emit('setData')
    } else {
        store.commit('setSearchedRole', {searchedValue, data: props.data})
    }
}
</script>

<style lang="scss" scoped>

</style>