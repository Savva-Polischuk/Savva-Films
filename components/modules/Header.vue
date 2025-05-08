<template lang='pug'>
header.Header
    NuxtLink.logo(to="/")
        Logo(name="icon:logo")

    .nav
        NuxtLink.logo(to="/myfilms/")
            Logo(name="icon:heart")
        .search
            input(
                v-model="searchModel"
                type="text"
                placeholder="название")
            button(@click="handleSearch")
                Logo(name="icon:search")
</template>

<script lang='ts' setup>
const searchModel = ref('')

const emit = defineEmits(['search'])

const handleSearch = () => {
    emit('search', searchModel)
}
</script>

<style lang='sass' scoped>
.Header
    +flex($justify-content: space-between, $align-items: center)
    height: 70px
    border: solid
    border-width: 0 0 2px 0
    border-color: #800000
    padding: 0 94px

    .logo
        width: 55px
        aspect-ratio: 1

    .nav
        +flex(row, center, center, $gap: 16)

        .logo
            width: 30px
            aspect-ratio: 1

        .search
            +flex(row, center, center)
            width: 283px
            background-color: #fff
            padding: 6px 7px
            border-radius: 3px

            input
                border: none
                background-color: transparent
                font-size: 20px
                outline: none
                padding: 0

            button
                border: none
                background-color: transparent
                box-sizing: border-box
                width: 18px
                height: 18px
</style>