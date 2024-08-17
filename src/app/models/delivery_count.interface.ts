import { StatusDelivery } from "../enums/status_delivery.enum";

export interface DeliveryCount {
  id: number;
  status_entrega: StatusDelivery;
  count: number;
}
