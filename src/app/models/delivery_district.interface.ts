import { DeliveryDistrict } from "../enums/delivery_district.enum";

export interface IDeliveryDistrict {
  [DeliveryDistrict.DISTRICT]: string;
  [DeliveryDistrict.TOTAL_DELIVERIES]: number;
  [DeliveryDistrict.TOTAL_DELIVERED]: number;
}
