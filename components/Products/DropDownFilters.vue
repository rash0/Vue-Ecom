<template>
    <div class="d-flex justify-content-center p-3">
        <button class="btn btn-light" role="button" @click="toggleFilters">
            <span style="color:#f2be00;">{{ (filtersVisible === 'SHOWN')?'HIDE FILTERS' :'SHOW FILTERS' }}</span>
        </button>
        <div class="dropdown px-4 px-sm-0">
            <a class="btn btn-light dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">SORT BY
                <span style="color:#f2be00;">{{ sort }}</span>
            </a>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <a class="dropdown-item" @click="sortBy('newest')" value="newest">Newest</a>
                <a class="dropdown-item" @click="sortBy('price')" value="price">Price</a>
                <a class="dropdown-item" @click="sortBy('trending')" value="trending">Trending</a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const sort = ref('DEFAULT')
const filtersVisible = ref('SHOWN')

const toggleFilters = () => {
    filtersVisible.value = (filtersVisible.value === 'SHOWN') ? 'HIDDEN' : 'SHOWN'
    emit('toggleFilters', filtersVisible.value)
}

const emit = defineEmits<{
    (e: 'sortItem', name: string): void,
    (e: 'toggleFilters', filterToggle: string): void
}>()

function sortBy(value: string): void {
    emit('sortItem', value)
    sort.value = value.toUpperCase()
}

</script>

<style scoped>
.d-flex {
  z-index: 80;
  position: sticky;
  top: 56px;
  align-self: start;
  background-color: #F8F8F8;
}
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
    cursor: pointer;
}
</style>