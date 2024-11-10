import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FinanceBookService } from "./financeBook.service";
import { FinanceBookControllerBase } from "./base/financeBook.controller.base";

@swagger.ApiTags("financeBooks")
@common.Controller("financeBooks")
export class FinanceBookController extends FinanceBookControllerBase {
  constructor(protected readonly service: FinanceBookService) {
    super(service);
  }
}
