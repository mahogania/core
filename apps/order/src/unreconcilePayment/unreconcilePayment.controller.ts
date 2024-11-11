import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UnreconcilePaymentService } from "./unreconcilePayment.service";
import { UnreconcilePaymentControllerBase } from "./base/unreconcilePayment.controller.base";

@swagger.ApiTags("unreconcilePayments")
@common.Controller("unreconcilePayments")
export class UnreconcilePaymentController extends UnreconcilePaymentControllerBase {
  constructor(protected readonly service: UnreconcilePaymentService) {
    super(service);
  }
}
