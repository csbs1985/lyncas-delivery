import { StatusDelivery } from "../enums/status_delivery.enum";
import { ICostumer } from "./customer.interface";
import { IDestination } from "./destination.interface";
import { IDriver } from "./driver.interface";

export interface IDelivery {
  id: string;
  documento: string;
  motorista: IDriver;
  cliente_origem: ICostumer;
  cliente_destino: IDestination;
  status_entrega: StatusDelivery;
}
