import { inject, Injectable } from "@angular/core";
import { catchError, Observable, Subject, tap } from "rxjs";
import { IDelivery } from '../models/delivery.interface';
import { ApiService } from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {
  private _apiService = inject(ApiService);

  deliveryList = new Subject<IDelivery[]>();
  deliveryList$ = this.deliveryList.asObservable();

  deliveryItem = new Subject<IDelivery>();
  deliveryItem$ = this.deliveryItem.asObservable();

  getDeliveries(): Observable<IDelivery[]> {
    return this._apiService.getDeliveries().pipe(
      tap((result: IDelivery[]) => {
        this.deliveryList.next(result);
      }),
      catchError((error: string) => {
        console.error(error);
        throw error;
      })
    );
  }

  selectItemDelivery(item: IDelivery) {
    this.deliveryItem.next(item);
  }

  getDeliveryItem(): Observable<IDelivery> {
    return this.deliveryItem.asObservable();
  }
}
