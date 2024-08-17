import { NgFor } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { DeliveryCardComponent } from '../../components/delivery-card/delivery-card.component';
import { DeliveryDistrictComponent } from '../../components/delivery-district/delivery-district.component';
import { DeliveryDriverComponent } from '../../components/delivery-driver/delivery-driver.component';
import { DeliveryFailComponent } from '../../components/delivery-fail/delivery-fail.component';
import { IDelivery } from '../../models/delivery.interface';
import { DeliveryService } from '../../services/delivery.service';

@Component({
  standalone: true,
  imports: [DeliveryCardComponent, DeliveryDriverComponent, DeliveryFailComponent, DeliveryDistrictComponent, NgFor],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  private _deliveryService = inject(DeliveryService);

  deliveries?: IDelivery[];

  ngOnInit(): void {
    this.deliveries= [];

    this.getDeliveries();
  }

  private getDeliveries(): void {
    this._deliveryService.getDeliveries().subscribe((data: IDelivery[]) => {
      this.deliveries = data;
    });
  }
}
