import { DeliveryDriver } from '../enums/delivery_driver.enum';

export interface IDeliveryDrivers {
  [DeliveryDriver.DRIVER]: string;
  [DeliveryDriver.TOTAL_DELIVERIES]: number;
  [DeliveryDriver.TOTAL_DELIVERED]: number;
}
