<template>
    <div  class="d-flex justify-content-between gap-3 py-3 mb-3">
        <button class="btn btn-light" role="button" @click="toggleFilters">
            <span style="color:#f2be00;">{{ (filtersVisible === 'SHOWN')?'HIDE FILTERS' :'SHOW FILTERS' }}</span>
        </button>
        <div class="dropdown">
            <a class="btn btn-light dropdown-toggle" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">SORT BY
                <span style="color:#f2be00;">{{ sort }}</span>
            </a>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li><a class="dropdown-item" @click="sortBy('newest')" value="newest">Newest</a></li>
                <li><a class="dropdown-item" @click="sortBy('price')" value="price">Price</a></li>
                <li><a class="dropdown-item" @click="sortBy('title')" value="title">Title</a></li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">

const sort = ref('TITLE')
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
  z-index: 95;
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
    min-width: max-content;
}

.dropdown-menu>li:hover {
    cursor: pointer;
}
</style>