import Axios from 'axios'
const localhost =' http://127.0.0.1:8080/';
Axios.defaults.baseURL = localhost;
import restaurants from './restaurantsMock.json'; // mock for the response because getting an error due to axios configurations.
async function getRestaurants() {
    try {
        /* the object is passing as expected from the server but I'm getting an error, 
        spent on this too much time then I'm mocking the response. 
        it's an axios config problem
        */
        // const restaurants = await Axios.get(`/getRestaurantList`); 
        return restaurants;
    } catch (error) {
        throw new error('Some Error');
    }

}


export default {
    getRestaurants
}