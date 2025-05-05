<template lang='pug'>
Header(@search="handleSearch")
slot
Footer
</template>

<script lang='ts' setup>
const emit = defineEmits(['search'])

const handleSearch = (value: string) => {
    emit('search', value)
}
</script>

<style lang='sass' scoped>

</style>