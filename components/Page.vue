<template lang='pug'>
.navigation
    nav
        NuxtLink(
            to="/"
            :class="{active: props.namePage === 'films'}") Фильмы
        NuxtLink(
            to="series"
            :class="{active: props.namePage === 'series'}") Сериалы
        NuxtLink(
            to="animation"
            :class="{active: props.namePage === 'animations'}") Анимация

.content
    .cards(v-if="props.cards")
        .card(v-for="card in props.cards")
            img(:src="props.namePage + '/' + card + '.png'")
</template>

<script lang='ts' setup>
type NamePage = "films" | "series" | "animations"
interface Page {
    namePage: NamePage
    cards: string[]
}

const props = defineProps<Page>()
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

        .card
            border-radius: 5px

            img
                width: 200px
                height: 300px
</style>