import { NgFor, NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IDelivery } from '../../models/delivery.interface';
import { DeliveryService } from '../../services/delivery.service';

@Component({
  selector: 'lyncas-deleivery-list',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './deleivery-list.component.html',
})
export class DeleiveryListComponent implements OnInit {
  private _deliveryService = inject(DeliveryService);

  deliveries?: IDelivery[];
  filteredDeliveries?: IDelivery[];

  currentPage?: number;
  totalPage?: number;
  itemsPerPage?: number;

  driverFilter?: string;
  statusFilter?: string;

  ngOnInit(): void {
    this.deliveries= [];
    this.filteredDeliveries= [];

    this.currentPage = 0;
    this.totalPage = 1;
    this.itemsPerPage = 10;

    this.driverFilter = '';
    this.statusFilter = '';

    this.getDeliveries();
  }

  private getDeliveries(): void {
    this._deliveryService.getDeliveries().subscribe((data: IDelivery[]) => {
      this.deliveries = data;
      this.totalPage = data.length / 10;
      this.filterDeliveries();
      this.filteredDeliveries = this.filteredDeliveries!.slice(0, 10);
    });
  }

  filterDeliveries(): void {
    this.filteredDeliveries = this.deliveries!.filter((delivery) => {
      return (
        delivery.motorista.nome.toLowerCase().includes(this.driverFilter!.toLowerCase()) &&
        delivery.status_entrega.toLowerCase().includes(this.statusFilter!.toLowerCase())
      );
    });
  }

  paginateDeliveries(): void {
    const currentPage = this.currentPage;
    const start = (this.currentPage !- 1) * this.itemsPerPage!;
    const end = start + this.itemsPerPage!;

    if (start >= 0 && end <= this.deliveries!.length) {
      this.filteredDeliveries = this.deliveries!.slice(start, end);
    } else {
      this.currentPage = currentPage;
    }
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.paginateDeliveries();
  }

  onStatusFilterChange(status: string): void {
    this.statusFilter = status;
    this.filterDeliveries();
    this.filteredDeliveries = this.filteredDeliveries!.slice(0, 10);
    this.paginateDeliveries();
  }

  onDriverFilterChange(filter: Event): void {
    this.driverFilter = filter.toString();
    this.filterDeliveries();
    this.filteredDeliveries = this.filteredDeliveries!.slice(0, 10);
    this.paginateDeliveries();
  }

  selectDelivery(delivery: IDelivery): void {
    this._deliveryService.selectItemDelivery(delivery);
  }
}
