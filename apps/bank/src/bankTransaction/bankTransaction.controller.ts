import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BankTransactionService } from "./bankTransaction.service";
import { BankTransactionControllerBase } from "./base/bankTransaction.controller.base";

@swagger.ApiTags("bankTransactions")
@common.Controller("bankTransactions")
export class BankTransactionController extends BankTransactionControllerBase {
  constructor(protected readonly service: BankTransactionService) {
    super(service);
  }
}
