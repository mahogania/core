import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AccountingDimensionFilterService } from "./accountingDimensionFilter.service";
import { AccountingDimensionFilterControllerBase } from "./base/accountingDimensionFilter.controller.base";

@swagger.ApiTags("accountingDimensionFilters")
@common.Controller("accountingDimensionFilters")
export class AccountingDimensionFilterController extends AccountingDimensionFilterControllerBase {
  constructor(protected readonly service: AccountingDimensionFilterService) {
    super(service);
  }
}
