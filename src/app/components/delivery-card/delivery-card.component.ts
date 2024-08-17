import { NgFor } from '@angular/common';
import { AfterContentChecked, Component, Input, OnInit } from '@angular/core';
import { StatusDelivery } from '../../enums/status_delivery.enum';
import { IDelivery } from '../../models/delivery.interface';
import { DeliveryCount } from '../../models/delivery_count.interface';

@Component({
  selector: 'lyncas-delivery-card',
  standalone: true,
  imports: [NgFor],
  templateUrl: './delivery-card.component.html'
})
export class DeliveryCardComponent implements OnInit, AfterContentChecked {
  @Input() content: IDelivery[] = [];

  deliveryCard: DeliveryCount[] = [];

  StatusDelivery = StatusDelivery;

  ngOnInit(): void {
    this.initDeliveryCard();
  }

  ngAfterContentChecked(): void {
    this.initDeliveryCard();
  }

  private initDeliveryCard(): void {
    const statusCount: DeliveryCount[] = Object.entries(StatusDelivery).map(([_, value], index) => {
      return {
        id: index,
        status_entrega: value,
        count: this.content.filter((delivery) => delivery.status_entrega === value).length
      };
    });

    statusCount[0].count = this.content.length;

    this.deliveryCard = statusCount;
  }
}
