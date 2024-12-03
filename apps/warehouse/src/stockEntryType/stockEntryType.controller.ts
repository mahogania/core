import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StockEntryTypeService } from "./stockEntryType.service";
import { StockEntryTypeControllerBase } from "./base/stockEntryType.controller.base";

@swagger.ApiTags("stockEntryTypes")
@common.Controller("stockEntryTypes")
export class StockEntryTypeController extends StockEntryTypeControllerBase {
  constructor(protected readonly service: StockEntryTypeService) {
    super(service);
  }
}
