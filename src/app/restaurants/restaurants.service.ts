import { Restaurant } from "./restaurant/restaurant.model";

export class RestaurantsService {

    rests: Restaurant[] = [
        {
            id: "bread-bakery",
            name: "Bread & Bakery",
            category: "Bakery",
            deliveryEstimate: "25m",
            rating: 4.9,
            imagePath: "assets/img/restaurants/breadbakery.png"
        },
        {
            id: "bread-teste",
            name: "Bread & Bakery",
            category: "Bakery",
            deliveryEstimate: "25m",
            rating: 4.9,
            imagePath: "assets/img/restaurants/breadbakery.png"
        }
    ]

    constructor(){}

    restaurants(): Restaurant[] {
        return this.rests;
    }

}