<template>
    <div class='restaurantCard' @click="changeStyle()" :class= "cardClicked ? 'uniqueRestaurantCardStyle' : 'restaurantCard'">
        <div class='restaurantName'>
            {{restaurant.name}}
        </div>
        <div>
            {{restaurant.description}}
        </div>
        <div>
            {{restaurant.address}}
        </div>
    </div>
</template>

<script>
export default {
    name: "RestaurantCard",
    props: {
        restaurant: Object,
        cardClicked: {
            type: Boolean,
            default: false
        }
    },
    methods: {
    changeStyle() {
            this.cardClicked = !this.cardClicked;
        }
    }
};
</script>

<style scoped>
.restaurantName {
    font-weight: bold;
}
.uniqueRestaurantCardStyle {
    border:1px solid green;
    color: white;
    transition: all 0.7s;
    width: 100em;
    transform: scale(1.2);
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
}
.restaurantCard {
    width: 100em;
}
</style>