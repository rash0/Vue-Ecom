<template>
    <div class="searc d-none d-xl-block d-lg-block pr-3">
        <input type="search" class="search">
    </div>
</template>

<style scoped lang="scss">
.search {
    outline: none;
    border: 1px #F8F8F8;
    background: #ededed url('@/assets/search.png') no-repeat 5px center;
    padding: 5px 8px 4px 26px;
    width: 10px;
    -webkit-border-radius: 10em;
    -moz-border-radius: 10em;
    border-radius: 10em;
    -webkit-transition: all .5s;
    -moz-transition: all .5s;
    transition: all .5s;
    margin-right: 10px;

    &:focus {
        width: 160px;
        font-family: inherit;
        padding-left: 30px;
        border: solid 1px #ccc;
        background-color: #fff;
        border-color: #98ccfd;
        -webkit-box-shadow: 0 0 5px rgba(109, 207, 246, .5);
        -moz-box-shadow: 0 0 5px rgba(109, 207, 246, .5);
        box-shadow: 0 0 5px rgba(109, 207, 246, .5);
        backface-visibility: hidden;
        perspective: 1000;
    }
}
</style>
