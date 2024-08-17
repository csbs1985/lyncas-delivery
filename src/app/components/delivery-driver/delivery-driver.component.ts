import { NgFor } from '@angular/common';
import { AfterContentChecked, Component, Input, OnInit } from '@angular/core';
import { DeliveryDriver } from '../../enums/delivery_driver.enum';
import { IDelivery } from '../../models/delivery.interface';
import { IDeliveryDrivers } from '../../models/delivery_drivers.interface';

@Component({
  selector: 'lyncas-delivery-driver',
  standalone: true,
  imports: [NgFor],
  templateUrl: './delivery-driver.component.html'
})
export class DeliveryDriverComponent implements OnInit, AfterContentChecked {
  @Input() content: IDelivery[] = [];

  rows: IDeliveryDrivers[] = [];
  headers = [
    DeliveryDriver.DRIVER,
    DeliveryDriver.TOTAL_DELIVERIES,
    DeliveryDriver.TOTAL_DELIVERED
  ];

  ngOnInit(): void {
    this.initDeliveryDriver();
  }

  ngAfterContentChecked(): void {
    this.initDeliveryDriver();
  }

  initDeliveryDriver(): void {
    const driver: IDeliveryDrivers[] = [];

    this.content.forEach(item => {
      const driverIndex = driver.findIndex(driver => driver[DeliveryDriver.DRIVER] === item.motorista.nome);
      if (driverIndex === -1) {
        driver.push({
          [DeliveryDriver.DRIVER]: item.motorista.nome,
          [DeliveryDriver.TOTAL_DELIVERIES]: 1,
          [DeliveryDriver.TOTAL_DELIVERED]: item.status_entrega === 'ENTREGUE' ? 1 : 0
        });
      } else {
        driver[driverIndex][DeliveryDriver.TOTAL_DELIVERIES]++;
        if (item.status_entrega === 'ENTREGUE') {
          driver[driverIndex][DeliveryDriver.TOTAL_DELIVERED]++;
        }
      }
    });

    this.rows = driver;
  }
}
