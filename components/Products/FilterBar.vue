<template>
    <div class="col-3 d-none d-lg-block d-xl-block">
        <div class="card-selector">
            <div class="card-body p-5">
                <div class="search-title">
                    <h4 class="mb-3">Catagories +</h4>
                    <div class="form-check" v-for="item in info.types" :key="item.name" > 
                        <input class="form-check-input" type="checkbox" v-model="typeFilters" :value="item.value" :id="`cat-${item.name}`">
                        <label class="form-check-label" :for="`cat-${item.name}`"> {{ item.name }} </label>
                    </div>
                    <button type="button" class="mt-3 btn btn-primary" @click="typeFilters = []">Clear</button>                    
                </div>
                <div class="search-title">
                    <h4>Filter by +</h4>
                    <div class="colors">
                        <h5>Color</h5>
                        <span v-for="item in info.colors" :key="item.name" class="circle"
                            :style="`background-color:${item.value}`" @click="" :value="item.name"></span>
                    </div>
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

const info = reactive({
    types: [
        { name: 'Table', value: 'table' },
        { name: 'Lamps', value: 'lamp' },
        { name: 'Chairs', value: 'chair' },
        { name: 'Sofas', value: 'sofa' }
    ],
    colors: [
        // TODO change the background colors to better and more subtle ones
        { name: 'yellow', value: '#FFC015' },
        { name: 'blue', value: '#829FAA' },
        { name: 'white', value: '#BFB8AE' },
        { name: 'silver', value: '#817A77' }
    ]
})

const typeFilters = ref([])

const emit = defineEmits<{
    (e: 'applyFilters', name: string): void,
}>()

watch(typeFilters, () => {
    emit('applyFilters', typeFilters)
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