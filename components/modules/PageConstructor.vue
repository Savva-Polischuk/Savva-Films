<template lang='pug'>
.navigation
    nav
        NuxtLink(
            to="../films/"
            :class="{active: props.namePage === 'films'}") Фильмы
        NuxtLink(
            to="../series/"
            :class="{active: props.namePage === 'series'}") Сериалы
        NuxtLink(
            to="../animations/"
            :class="{active: props.namePage === 'animations'}") Анимация

.content
    .cards(v-if="props.cards")
        Card(v-for="card in props.cards"
            :namePage='props.namePage'
            :cardName='card')
</template>

<script lang='ts' setup>
type NamePage = "films" | "series" | "animations"
interface PageConstructor {
    namePage: NamePage
    cards: string[]
}

const props = defineProps<PageConstructor>()
</script>

<style lang='sass' scoped>
.navigation
    +flex($align-items: center)
    height: 87px
    padding: 0 94px

    nav
        +flex($gap: 30)

        a
            color: #767676

            &.active
                transform: scale(1.3)
                color: #fff

.content
    +flex($align-items: center, $justify-content: center)

    .cards
        +flex($wrap: wrap, $gap: 23)
        width: 1095px
</style>