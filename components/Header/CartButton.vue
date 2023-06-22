<template>
    <div class="bag" @click="$emit('open')">
        <img class="pb-1" src="https://img.icons8.com/ultraviolet/70/shopping-cart.png" alt="move-by-trolley"
            title="cart-trolley">
        <span class="mb-3" v-if="store.itemsNumber">{{ store.itemsNumber }}</span>
    </div>
</template>

<script setup lang="ts">

const store = useMainStore()

defineEmits(['open'])

</script>

<style scoped lang="scss">
.bag {
    span {
        background-color: #6394F8;
        border-radius: 10px;
        color: white;
        position: absolute;
        font-size: 15px;
        line-height: 1;
        padding: 2px 3px 3px 3px;
        text-align: center;
        vertical-align: middle;
        white-space: nowrap;
        margin-left: -9px;
        bottom: 1rem;
    }

    img {
        cursor: pointer;
        width: 30px;
        height: auto;
    }
}
</style>