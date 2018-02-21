import { Http, Response } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs"
import 'rxjs/add/operator/map';
import { Product } from "./product";

@Injectable()
export class DataService {
    constructor(private http: Http) { }

    public products: Product[] = [];

    public loadProducts(): Observable<Product[]> {
        return this.http.get("/api/products")
            .map((result: Response) => this.products = result.json());
    }
}