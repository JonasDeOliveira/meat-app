import { Injectable } from "@angular/core";
import { Restaurant } from "./restaurant/restaurant.model";
import { Http } from '@angular/http';
import { MEAT_API } from '../app.api';

@Injectable()
export class RestaurantsService {

    constructor(private http: Http){}

    restaurants(): Restaurant[] {
        return this.http.get(`${MEAT_API}/restaurants`)
    }

}