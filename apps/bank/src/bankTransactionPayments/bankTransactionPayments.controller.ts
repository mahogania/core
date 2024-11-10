import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BankTransactionPaymentsService } from "./bankTransactionPayments.service";
import { BankTransactionPaymentsControllerBase } from "./base/bankTransactionPayments.controller.base";

@swagger.ApiTags("bankTransactionPayments")
@common.Controller("bankTransactionPayments")
export class BankTransactionPaymentsController extends BankTransactionPaymentsControllerBase {
  constructor(protected readonly service: BankTransactionPaymentsService) {
    super(service);
  }
}
