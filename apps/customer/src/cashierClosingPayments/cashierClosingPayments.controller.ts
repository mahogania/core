import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CashierClosingPaymentsService } from "./cashierClosingPayments.service";
import { CashierClosingPaymentsControllerBase } from "./base/cashierClosingPayments.controller.base";

@swagger.ApiTags("cashierClosingPayments")
@common.Controller("cashierClosingPayments")
export class CashierClosingPaymentsController extends CashierClosingPaymentsControllerBase {
  constructor(protected readonly service: CashierClosingPaymentsService) {
    super(service);
  }
}
