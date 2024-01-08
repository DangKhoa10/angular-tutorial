import { Product } from "../interface/product";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const api =  "https://localhost:6004/api"

@Injectable({
    providedIn: 'root',
})
export class ProductService{
    constructor(private http: HttpClient){}

    getAllProduct(){
        return this.http.get<any>(`${api}/CreatorCollectionShow/get-all-col-show`)
    }
}