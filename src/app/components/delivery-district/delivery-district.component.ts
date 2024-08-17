import { AfterContentChecked, Component, Input, OnInit } from '@angular/core';
import { DeliveryDistrict } from '../../enums/delivery_district.enum';
import { IDelivery } from '../../models/delivery.interface';
import { IDeliveryDistrict } from '../../models/delivery_district.interface';

@Component({
  selector: 'lyncas-delivery-district',
  standalone: true,
  imports: [],
  templateUrl: './delivery-district.component.html'
})
export class DeliveryDistrictComponent implements OnInit, AfterContentChecked {
  @Input() content: IDelivery[] = [];

  rows: IDeliveryDistrict[] = [];
  headers = [
    DeliveryDistrict.DISTRICT,
    DeliveryDistrict.TOTAL_DELIVERIES,
    DeliveryDistrict.TOTAL_DELIVERED
  ];

  deliveryDistricts: IDeliveryDistrict[] = [];

  ngOnInit(): void {
    this.initDeliveryDistrict();
  }

  ngAfterContentChecked(): void {
    this.initDeliveryDistrict();
  }

  initDeliveryDistrict(): void {
    const district: IDeliveryDistrict[] = [];

    this.content.forEach(item => {
      const driverIndex = district.findIndex(district => district[DeliveryDistrict.DISTRICT] === item.cliente_destino.bairro);
      if (driverIndex === -1) {
        district.push({
          [DeliveryDistrict.DISTRICT]: item.cliente_destino.bairro,
          [DeliveryDistrict.TOTAL_DELIVERIES]: 1,
          [DeliveryDistrict.TOTAL_DELIVERED]: item.status_entrega === 'ENTREGUE' ? 1 : 0,
        });
      } else {
        district[driverIndex][DeliveryDistrict.TOTAL_DELIVERIES]++;
        if (item.status_entrega === 'ENTREGUE') {
          district[driverIndex][DeliveryDistrict.TOTAL_DELIVERED]++;
        }
      }
    });

    this.rows = district;
  }
}
