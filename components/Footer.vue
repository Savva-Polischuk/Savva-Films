<template lang='pug'>
footer.Footer
    NuxtLink.messenger(
        v-for="messenger in messengers"
        to='/')
        Logo(:name="'icon:' + messenger")
</template>

<script lang='ts' setup>
const messengers = ['telegram', 'vk', 'youtube', 'tiktok']
</script>

<style lang='sass' scoped>
.Footer
    +flex(row, center, center, $gap: 11)
    height: 70px
    border: solid
    border-width: 2px 0 0 0
    border-color: #800000
    margin-top: 45px

    .messenger
        width: 24px
        aspect-ratio: 1
</style>