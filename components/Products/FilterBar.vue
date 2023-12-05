<template>
    <div class="col-3 d-none d-lg-block d-xl-block">
        <div class="card-selector">
            <div class="card-body p-5">
                <div class="search-title">
                    <h4 class="mb-3">Catagories</h4>
                    <div class="form-check" v-for="item in info.types" :key="item.name" > 
                        <input class="form-check-input" type="checkbox" v-model="typeFilters" :value="item.value" :id="`cat-${item.name}`">
                        <label class="form-check-label" :for="`cat-${item.name}`"> {{ item.name }} </label>
                    </div>
                    <button type="button" class="mt-3 btn btn-primary" @click="typeFilters = []">Clear</button>                    
                </div>
                <div class="search-title">
                    <h4 class="mb-3">Colors</h4>
                    <div class="form-check" v-for="item in info.colors" :key="item.name" > 
                        <input class="form-check-input" type="checkbox" v-model="colorFilters" :value="item.value" :id="`cat-${item.name}`">
                        <label class="form-check-label" :for="`cat-${item.name}`"> {{ item.name }} </label>
                        <span class="circle" :style="`background-color:${item.colVal}`" ></span>
                    </div>
                    <button type="button" class="mt-3 btn btn-primary" @click="colorFilters = []">Clear</button>    

                    <!-- <div class="colors">
                        <h5>Color</h5>
                        <span v-for="item in info.colors" :key="item.name" class="circle"
                            :style="`background-color:${item.value}`" @click="" :value="item.name"></span>
                    </div> -->
                </div>
                <div class="search-title">
                    <h5>Price Range</h5>
                    <input type="range" min="0" max="100" value="50" class="slider" />
                </div>
            </div>
        </div>
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

watch([typeFilters, colorFilters], () => emitApplyFilters())

const emitApplyFilters = () => {
    const router = useRouter()
    emit('applyFilters', { types: typeFilters.value, colors: colorFilters.value } )
    router.push({ query: { types: typeFilters.value, colors: colorFilters.value } })
}

onMounted(()=>{
    emit('applyFilters', { types: typeFilters.value, colors: colorFilters.value } )
})

</script>
<style scoped>
.card-selector {
    color: #DCDCDC;
    height: 40rem;
    background: #2c3539 !important;
    box-shadow: 0 8px 6px 0 rgba(0, 0, 0, 0.1), 0 26px 70px 0 rgba(0, 0, 0, 0.69);
}

.search-title {
    margin-bottom: 60px;
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