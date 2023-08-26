<template>
    <div v-if="props.isAddingRoleOpened">
        <input placeholder="Role Name" v-model="roleName"/>
        <input placeholder="Role Type" v-model="roleType"/>
        <input placeholder="Role Description" v-model="roleDescription"/>
        <span class="active-checkbox">active</span>
        <input type="checkbox" v-model="roleActive">
        <span>editable</span>
        <input type="checkbox" v-model="roleEditable">
        <button class="btn-submit" @click="addNewRole">Submit</button>
    </div>
</template>

<script setup>
import {ref} from "vue";
import {useStore} from "vuex";

const props = defineProps(['isAddingRoleOpened'])
const roleName = ref('');
const roleType = ref('');
const roleDescription = ref('');
const roleActive = ref('')
const roleEditable = ref('')
const store = useStore();
const addNewRole = () => {
    const newRole = {
        name: roleName,
        type: roleType,
        description: roleDescription,
        active: roleActive,
        editable: roleEditable,
        created_on: new Date()
    }
    store.commit('setNewRole', newRole)
}
</script>

<style scoped>
.btn-submit {
    color: white;
    background-color: lightgreen;
    border: none;
    padding: 3px;
    margin-left: 10px;
}
.active-checkbox {
    margin-left: 10px;
}
</style>