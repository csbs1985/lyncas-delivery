import { Component } from '@angular/core';
import { DeleiveryListComponent } from '../../components/deleivery-list/deleivery-list.component';
import { DeliveryDetailsComponent } from '../../components/delivery-details/delivery-details.component';
import { IDelivery } from '../../models/delivery.interface';

@Component({
  selector: 'app-delivery',
  standalone: true,
  imports: [DeleiveryListComponent, DeliveryDetailsComponent],
  templateUrl: './delivery.component.html'
})
export class DeliveryComponent {
  selectedDelivery?: IDelivery;

  deliverySelected(delivery: IDelivery): void {
    this.selectedDelivery = delivery;
  }
}
