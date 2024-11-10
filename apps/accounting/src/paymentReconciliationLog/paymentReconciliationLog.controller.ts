import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PaymentReconciliationLogService } from "./paymentReconciliationLog.service";
import { PaymentReconciliationLogControllerBase } from "./base/paymentReconciliationLog.controller.base";

@swagger.ApiTags("paymentReconciliationLogs")
@common.Controller("paymentReconciliationLogs")
export class PaymentReconciliationLogController extends PaymentReconciliationLogControllerBase {
  constructor(protected readonly service: PaymentReconciliationLogService) {
    super(service);
  }
}
