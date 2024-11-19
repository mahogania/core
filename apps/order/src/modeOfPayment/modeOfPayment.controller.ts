import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ModeOfPaymentService } from "./modeOfPayment.service";
import { ModeOfPaymentControllerBase } from "./base/modeOfPayment.controller.base";

@swagger.ApiTags("modeOfPayments")
@common.Controller("modeOfPayments")
export class ModeOfPaymentController extends ModeOfPaymentControllerBase {
  constructor(protected readonly service: ModeOfPaymentService) {
    super(service);
  }
}
