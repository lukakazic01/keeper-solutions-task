<template>
    <div class="role-card">
        <p class="inactive" v-if="!role.active">Inactive</p>
        <p>{{role.name}}</p>
        <p>{{role.type}}</p>
        <p>{{role.description}}</p>
        <span v-for="user in role.users">
                <img :src="user.photo_url" width="60" height="60" class="img-container">
            </span>
        <p>Date created: {{convertToHumanReadableDate(role.created_on)}}</p>
        <div v-if="role.editable" class="buttons">
            <button>edit</button>
            <button>Delete</button>
        </div>
        <div v-else>
            <p class="not-editable">Not editable</p>
        </div>
    </div>
</template>

<script setup>
defineProps(['role'])
const convertToHumanReadableDate = (date) => {
    const formatedDate = new Date(date);
    return formatedDate.toLocaleDateString('en-GB');
}
</script>

<style scoped>
.img-container {
    border-radius: 50%;
}
.buttons {
    margin-top: 10px;
}
button:not(:first-child) {
    margin-left: 10px;
}
.inactive {
    color: red
}
.not-editable {
    color: blue;
}
</style>