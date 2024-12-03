import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PaymentReconciliationService } from "./paymentReconciliation.service";
import { PaymentReconciliationControllerBase } from "./base/paymentReconciliation.controller.base";

@swagger.ApiTags("paymentReconciliations")
@common.Controller("paymentReconciliations")
export class PaymentReconciliationController extends PaymentReconciliationControllerBase {
  constructor(protected readonly service: PaymentReconciliationService) {
    super(service);
  }
}
