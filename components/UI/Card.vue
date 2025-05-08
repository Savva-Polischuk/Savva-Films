<template lang='pug'>
.Card(@click='handleCardClick')
    img(:src="'/' + props.namePage + '/' + props.cardName + '.png'")
</template>

<script lang='ts' setup>
interface Card {
    namePage: string
    cardName: string
}

const props = defineProps<Card>()

const handleCardClick = () => {
    const favoriteStore = localStorage.getItem('favorite')
    if (favoriteStore) {
        let favorite = JSON.parse(favoriteStore)
        if (favorite[props.namePage].find((el: string) => el === props.cardName)) {
           favorite[props.namePage] = excludeFavorite(favorite[props.namePage])
        }
        else {
            favorite[props.namePage] = addFavorite(favorite[props.namePage])
        }
        localStorage.setItem('favorite', JSON.stringify(favorite))
    }
    else {
        if (confirm('Добавить в избранные?')) {
            const newFavoriteList = {films: [], series: [], animations: []}
            newFavoriteList[props.namePage]?.push(props.cardName)
            localStorage.setItem('favorite', JSON.stringify(newFavoriteList))
        }
    }
}

const excludeFavorite = (list: string[]) => {
    return confirm('Исключить из избранных?') ? list.filter(el => el !== props.cardName) : list
}

const addFavorite = (list: string[]) => {
    if (confirm('Добавить в избранные?')) {
        list.push(props.cardName)
    }
    return list
}
</script>

<style lang='sass' scoped>
.Card
    img
        border-radius: 5px
        width: 200px
        height: 300px
</style>