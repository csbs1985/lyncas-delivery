import { NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { StatusDelivery } from '../../enums/status_delivery.enum';
import { IDelivery } from '../../models/delivery.interface';
import { DeliveryService } from '../../services/delivery.service';

@Component({
  selector: 'lyncas-delivery-details',
  standalone: true,
  imports: [NgIf],
  templateUrl: './delivery-details.component.html'
})
export class DeliveryDetailsComponent implements OnInit {
  private _deliveryService = inject(DeliveryService);

  StatusDelivery?: typeof StatusDelivery;

  content?: IDelivery;

  ngOnInit(): void {
    this.StatusDelivery = StatusDelivery;
    this.initDeliveryDetails();
  }

  initDeliveryDetails(): void {
    this._deliveryService.getDeliveryItem().subscribe((result) => {
      this.content = result;
    });
  }
}
