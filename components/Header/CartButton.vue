<template>
    <div class="bag" @click="$emit('open')">
        <img class="pb-1" src="https://img.icons8.com/ultraviolet/70/shopping-cart.png" width="70" height="70"
            alt="move-by-trolley">
        <span class="mb-3" v-if="store.itemsNumber">{{ store.itemsNumber }}</span>
    </div>
</template>

<script setup lang="ts">

const store = useMainStore()

defineEmits(['open'])

</script>