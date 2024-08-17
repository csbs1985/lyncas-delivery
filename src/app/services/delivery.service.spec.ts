import { TestBed } from "@angular/core/testing";
import { DeliveryService } from "./delivery.service";

describe("DeliveryService", () => {
  let service: DeliveryService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [DeliveryService] });
    service = TestBed.inject(DeliveryService);
  });

  it("can load instance", () => {
    expect(service).toBeTruthy();
  });
});
