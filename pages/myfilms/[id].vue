<template lang='pug'>
Page(:namePage='$route.params.id')
</template>

<script lang='ts' setup>
const route = useRoute()

if (route.params.id !== 'animations' && route.params.id !== 'series' && route.params.id !== 'films') {
    await navigateTo('/myfilms/films/')
}
</script>

<style lang='sass' scoped>

</style>