import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StockEntryDetailService } from "./stockEntryDetail.service";
import { StockEntryDetailControllerBase } from "./base/stockEntryDetail.controller.base";

@swagger.ApiTags("stockEntryDetails")
@common.Controller("stockEntryDetails")
export class StockEntryDetailController extends StockEntryDetailControllerBase {
  constructor(protected readonly service: StockEntryDetailService) {
    super(service);
  }
}
