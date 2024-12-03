import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AccountingPeriodService } from "./accountingPeriod.service";
import { AccountingPeriodControllerBase } from "./base/accountingPeriod.controller.base";

@swagger.ApiTags("accountingPeriods")
@common.Controller("accountingPeriods")
export class AccountingPeriodController extends AccountingPeriodControllerBase {
  constructor(protected readonly service: AccountingPeriodService) {
    super(service);
  }
}
