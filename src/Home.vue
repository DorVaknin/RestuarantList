<template>
  <div>
    <button v-if="disableButton" class="load-restuarants-button" @click="enableRestaurants()">load restaurants</button>
    <div class="restuarant-card-list" v-if="isLoadRestaurantsButtonClicked">
      <div v-for="restaurant in restaurants">
        <RestaurantCard :restaurant="restaurant" />
      </div>
    </div>
  </div>
</template>
<script>

import restaurantsService from "../src/services/restaurants.js";
import RestaurantCard from "../src/components/RestaurantCard";
export default {
    name: "Home",
    data() {
      return {
        isLoadRestaurantsButtonClicked: false,
      }
    },
    computed: {
      disableButton: function () {
        return !this.isLoadRestaurantsButtonClicked;
      }
    },
    methods: {
      enableRestaurants() {
        this.isLoadRestaurantsButtonClicked = !this.isLoadRestaurantsButtonClicked;
      }
    },
    components: { RestaurantCard },
    async created() {
      this.restaurants = await restaurantsService.getRestaurants();
      const x = 0;
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .restuarant-card-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>
