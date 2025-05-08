<template lang='pug'>
PageConstructor(
    :namePage='props.namePage'
    :cards='getCards(namePage)')
</template>

<script lang='ts' setup>
type NamePage = "films" | "series" | "animations"
interface Page {
    namePage: NamePage
    isIndexPage?: boolean
}

const props = defineProps<Page>()

const getCards = (namePage: NamePage) => {
    // Получаем карточки в зависимости от страницы и раздела
    let cards = {}
    if (props.isIndexPage) {
        cards = {
            series: [
                'breakingBad',
                'twinPeaks', 
                'trueDetective', 
                'betterCallSoul', 
                'sexEducation', 
                'lost', 
                'house', 
                'gameOfThrones', 
                'sopranos', 
                'doctorWho'
            ],
            films: [
                'fightClub', 
                'bladeRunner',
                'revenant', 
                'dune',
                'lighthouse', 
                'bigLebowski', 
                'prisoners', 
                'inHollywood', 
                'romanHolyday', 
                'grandBudapesht'
            ],
            animations: [

            ]
        }
    }
    else {
        if (!!localStorage.getItem('favorite')) {
            cards = JSON.parse(localStorage.getItem('favorite'))
        }
    }

    return cards[namePage]
}
</script>

<style lang='sass' scoped>

</style>