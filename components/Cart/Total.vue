<template>
    <div class="row align-items-center p-2" style="background:#7dcf85">
        <div class="col pl-3 pt-3">
            <h4>Subtotal</h4>
            <p class="fs-6 px-3" style="color:#303E49;margin-top: -8px">
                {{ `(${store.itemsNumber} items)` }}
            </p>
        </div>
        <div class="col text-center pr-3">
            <h4>${{ store.totalPrice }}</h4>
        </div>
    </div>
</template>

<script>
const store = useMainStore()
</script>