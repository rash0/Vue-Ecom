<template>
    <div class="card-selector">
   
        <PrimePanel toggleable class="p-2">
            <template #header>
                <h5>Catagories</h5>
            </template>
            <div class="form-check" v-for="item in info.types" :key="item.name" > 
                <input class="form-check-input" type="checkbox" v-model="typeFilters" :value="item.value" :id="`cat-${item.name}`">
                <label class="form-check-label" :for="`cat-${item.name}`"> {{ item.name }} </label>
            </div>
            <template #icons>
                <button class="p-panel-header-icon p-link mr-2" @click="typeFilters = []" :class="{'d-none':typeFilters.length === 0}">
                    <span class="pi pi-filter-slash"></span>
                </button>
            </template>
        </PrimePanel>

        <PrimePanel toggleable collapsed class="p-2">
            <template #header>
                <h5>Colors</h5>
            </template>
            <div class="form-check" v-for="item in info.colors" :key="item.name" > 
                <input class="form-check-input" type="checkbox" v-model="colorFilters" :value="item.value" :id="`cat-${item.name}`">
                <label class="form-check-label" :for="`cat-${item.name}`"> {{ item.name }} </label>
                <span class="circle" :style="`background-color:${item.colVal}`" ></span>
            </div>
            <template #icons>
                <button class="p-panel-header-icon p-link mr-2" @click="colorFilters = []" :class="{'d-none':colorFilters.length === 0}">
                    <span class="pi pi-filter-slash"></span>
                </button>
            </template>
        </PrimePanel>
        
        <PrimePanel toggleable collapsed class="p-2">
            <template #header>
                <h5>Price</h5>
            </template>
            <div class="d-flex justify-content-between mb-2">
                <label>${{ priceFilters[0] }}</label>
                <label>${{ priceFilters[1] }}</label>
            </div>
            <PrimeSlider v-model="priceFilters" range :min=min :max=max @slideend="doFiltering" />
            <template #icons>
                <button class="p-panel-header-icon p-link mr-2" @click="resetPriceFilters" :class="{'d-none':priceFilters[0]=== min && priceFilters[1] === max}">
                    <span class="pi pi-filter-slash"></span>
                </button>
            </template>
        </PrimePanel>
    </div>
</template>

<script setup lang="ts">

import { reactive, ref, watch } from '#imports';
import type { Filters } from '../types'

const emit = defineEmits<{
    (e: 'applyFilters', filters: Filters): void,
}>()

const info = reactive({
    types: [
        { name: 'Table', value: 'table' },
        { name: 'Lamps', value: 'lamp' },
        { name: 'Chairs', value: 'chair' },
        { name: 'Sofas', value: 'sofa' }
    ],
    colors: [
        // TODO change the background colors to better and more subtle ones
        { name: 'yellow', value: 'yellow', colVal: '#FFC015' },
        { name: 'blue', value: 'blue', colVal: '#829FAA' },
        { name: 'white', value: 'white', colVal: '#BFB8AE' },
        { name: 'silver', value: 'silver', colVal: '#817A77' }
    ]
})

const typeFilters = ref<string[]>([])
const colorFilters = ref<string[]>([])
const min:number = 0
const max:number = 1000
const priceFilters = ref<number[]>([min, max])

const router = useRouter()
const route = useRoute()

// Can locationQueryValue be anything other than string(s)?
if (route.query.types !== undefined) {
    if (Array.isArray(route.query.types)) {
        typeFilters.value = route.query.types as string[]
    } else {
        typeFilters.value.push(route.query.types as string)
    }
}
if (route.query.colors !== undefined) {
    if (Array.isArray(route.query.colors)) {
        colorFilters.value = route.query.colors as string[]
    } else {
        colorFilters.value.push(route.query.colors as string)
    }
}
if (route.query.minPrice !== undefined) {
    priceFilters.value[0] = Number(route.query.minPrice)
}
if (route.query.maxPrice !== undefined) {
    priceFilters.value[1] = Number(route.query.maxPrice)
}

watch([typeFilters, colorFilters], () => doFiltering())

const emitApplyFilters = () => emit('applyFilters', { types: typeFilters.value, colors: colorFilters.value, minPrice: priceFilters.value[0], maxPrice: priceFilters.value[1] } )

const doFiltering = () => {
    emitApplyFilters()
    const filterQuery = { types: typeFilters.value, colors: colorFilters.value }
    if (priceFilters.value[0] !== min) {
        // @ts-ignore 'Property does not exists' because we want to create it!
        filterQuery.minPrice = priceFilters.value[0] 
    }
    if (priceFilters.value[1] !== max) {
        // @ts-ignore 'Property does not exists' because we want to create it!
        filterQuery.maxPrice = priceFilters.value[1]
    }
    router.push({ query: filterQuery })
}

const resetPriceFilters = () => {
    priceFilters.value = [min,max]
    emitApplyFilters()
    router.push({ query: { types: typeFilters.value, colors: colorFilters.value }})
}

onMounted(()=> emitApplyFilters())

</script>

<style scoped>
.card-selector {
    color: #DCDCDC;
    /* height: 40rem; */
    background: lightgray !important;
    background: #F8F8F8 !important;
    /* box-shadow: 0 8px 6px 0 rgba(0, 0, 0, 0.1), 0 26px 70px 0 rgba(0, 0, 0, 0.69); */
    box-shadow: 0 4px 3px 0 rgba(0, 0, 0, 0.1), 0 13px 35px 0 rgba(0, 0, 0, 0.69);
    flex-basis: 250px;
    flex-grow: 1;

    position: sticky;
    /* top: 56px; */
    top: 125px;
    align-self: start;
    z-index: 90;
    border-radius: var(--bs-border-radius);
}
.search-title h6 {
    cursor: pointer;
}
.circle {
    height: 17px;
    width: 17px;
    border-radius: 50%;
    display: inline-block;
    margin-left: 6px;
    cursor: pointer
}
</style>