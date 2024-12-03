import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CashierClosingService } from "./cashierClosing.service";
import { CashierClosingControllerBase } from "./base/cashierClosing.controller.base";

@swagger.ApiTags("cashierClosings")
@common.Controller("cashierClosings")
export class CashierClosingController extends CashierClosingControllerBase {
  constructor(protected readonly service: CashierClosingService) {
    super(service);
  }
}
