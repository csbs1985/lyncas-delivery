import { NgFor } from '@angular/common';
import { AfterContentChecked, AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { IDelivery } from '../../models/delivery.interface';
import { IDeliveryFails } from '../../models/delivery_fails.interface';

@Component({
  selector: 'lyncas-delivery-fail',
  standalone: true,
  imports: [NgFor],
  templateUrl: './delivery-fail.component.html',
})
export class DeliveryFailComponent implements OnInit, AfterViewInit, AfterContentChecked {
  @Input() content: IDelivery[] = [];

  @ViewChild('totalElement') totalElement?: ElementRef;

  deliveryFails: IDeliveryFails[] = [];

  totalWidth: number = 0;

  ngOnInit(): void {
    this.initDeliveryFail();
  }

  ngAfterContentChecked(): void {
    this.initDeliveryFail();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.fillBarDeliveryFails();
    });
  }

  fillBarDeliveryFails(): void {
    if (this.totalElement!) {
      this.totalWidth = this.totalElement.nativeElement.offsetWidth;
    }
  }

  initDeliveryFail(): void {
    const driver: IDeliveryFails[] = [];

    this.content.forEach(item => {
      const driverIndex = driver.findIndex(driver => driver.name === item.motorista.nome);
      if (driverIndex === -1) {
        driver.push({
          name: item.motorista.nome,
          qtyDeliveries: 1,
          qtyFails: item.status_entrega === 'INSUCESSO' ? 1 : 0,
        });
      } else {
        driver[driverIndex].qtyDeliveries++;
        if (item.status_entrega === 'INSUCESSO') driver[driverIndex].qtyFails++;
      }
    });

    this.deliveryFails = driver;
  }

  calculateWidth(percent: number): number {
    const width = (this.totalWidth / 100) * (percent * 10);
    return width;
  }
}
