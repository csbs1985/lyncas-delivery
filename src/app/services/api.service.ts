import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IDelivery } from "../models/delivery.interface";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  private _httpClient = inject(HttpClient);

  private apiUrl = 'https://raw.githubusercontent.com/brunochikuji/example/main/entregas.json';

  getDeliveries(): Observable<IDelivery[]> {
    return this._httpClient.get<IDelivery[]>(this.apiUrl);
  }
}
