<template>
    <img src="@/assets/logo.png" alt="" />
    <div>{{ hello }}</div>
    <button @click="changeName('jerry')">changeName</button>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const hello = computed(() => store.state.user.name)
const changeName = (name: string) => store.commit('user/changeName', name)
</script>
<style lang="scss"></style>
