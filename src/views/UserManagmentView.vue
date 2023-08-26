<template>
    <p>User Role Managment</p>
    <span v-if="data">
      <BaseSearch @set-data="setDataBackToInitialState" :data="data"/>
      <Filters :data="data"/>
    </span>
    <button class="btn-new-role" @click="isAddingRoleOpened = !isAddingRoleOpened">{{btnNewRoleText}}</button>
    <AddNewRole :isAddingRoleOpened="isAddingRoleOpened" @close-add-new-role="closeAddNewRoleMenu"/>
  <div class="role-container">
    <div v-for="role in store.state.data" class="role">
        <UserCard :role="role" ></UserCard>
    </div>
  </div>

</template>

<script setup>
import { useStore } from 'vuex'
import {computed, ref} from "vue";
import UserCard from "../components/UserCard.vue";
import BaseSearch from "../components/BaseSearch.vue";
import Filters from "../components/BaseFilters.vue";
import AddNewRole from "../components/AddNewRole.vue";
const store = useStore();
const data = ref(null);
const isAddingRoleOpened = ref(false);
const btnNewRoleText = computed(() => isAddingRoleOpened.value ? 'close' : 'create new role');

(async() => {
    try{
        await store.dispatch('FetchDataFromJson');
        data.value = store.state.data;
    } catch(err) {
        console.log(err)
    }
})()

const setDataBackToInitialState = () => {
    store.commit('setData', data.value)
}

const closeAddNewRoleMenu = () => {
    isAddingRoleOpened.value = false
}
</script>

<style scoped>
select {
    margin-left: 10px;
}
.role-container{
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
}
.role {
    display: flex;
    justify-content: center;
    flex-basis: 33.3333%;
    border: 1px solid gray;
    padding: 30px;
}
.btn-new-role {
    margin-left: 10px;
}
</style>