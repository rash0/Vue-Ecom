<template>
    <div class="d-flex">
        <div class="dropdown flex-fill px-4 px-sm-0">
            <a class="btn btn-light dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">SORT BY
                <span style="color:#f2be00;">{{ sort }}</span>
            </a>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item" @click="sortBy('newset')" value="newset">Newest</a>
                <a class="dropdown-item" @click="sortBy('price')" value="price">Price</a>
                <a class="dropdown-item" @click="sortBy('trending')" value="trending">Trending</a>
            </div>
        </div>
        <div class="dropdown d-block d-lg-none d-xl-none px-4 px-sm-0">
            <button class="btn btn-light dropdown-toggle" role="button" id="MenuLink" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">CATAGORIES</button>
            <!-- <div class="dropdown-menu" aria-labelledby="MenuLink">
                <a class="dropdown-item" v-for="item in grid.types" :key="item.name" @click="sortItems"
                    :value="item.value">{{
                        item.name }}</a>
                <div class="dropdown-divider"></div>
                <div class="pl-3">
                    <span v-for="item in grid.colors" :key="item.name" class="circle"
                        style="`background-color:${item.name}`" @click="sortItems" :value="item.value"></span>
                </div>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" @click="reSet">Reset</a>
            </div> -->
        </div>
    </div>
</template>

<script setup lang="ts">

const sort = ref('DEFAULT')

const emit = defineEmits<{
    (e: 'sortItem', name: string): void
}>()

function sortBy(value: string): void {
    emit('sortItem', value);
    sort.value = value.toUpperCase()
}

</script>

<style scoped>
.btn-light {
    color: black !important;
    background: white;
    border-radius: 0 !important;
    border: 1px solid grey !important;
}

.dropdown-menu {
    background-color: #F8F8F8 !important;
    color: #2c3539 !important;
}

.dropdown-menu>a:hover {
    background-color: #dae0e5;
    cursor: pointer
}
</style>