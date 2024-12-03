import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PaymentReconciliationLogAllocationService } from "./paymentReconciliationLogAllocation.service";
import { PaymentReconciliationLogAllocationControllerBase } from "./base/paymentReconciliationLogAllocation.controller.base";

@swagger.ApiTags("paymentReconciliationLogAllocations")
@common.Controller("paymentReconciliationLogAllocations")
export class PaymentReconciliationLogAllocationController extends PaymentReconciliationLogAllocationControllerBase {
  constructor(
    protected readonly service: PaymentReconciliationLogAllocationService
  ) {
    super(service);
  }
}
