<template>
    <div class="d-flex align-self-end">    
        <button style="height: max-content;" type="button" @click="$emit('incrementCards')" class="flex-fill btn btn-outline-secondary">More
            +</button>
    </div>
</template>
<script setup lang="ts">

defineEmits<{
    (e: 'incrementCards'): void
}>()

</script>

<style scoped>
.btn-outline-secondary {
    border-radius: 0 !important;
}
</style>