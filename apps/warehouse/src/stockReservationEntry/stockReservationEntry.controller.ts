import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StockReservationEntryService } from "./stockReservationEntry.service";
import { StockReservationEntryControllerBase } from "./base/stockReservationEntry.controller.base";

@swagger.ApiTags("stockReservationEntries")
@common.Controller("stockReservationEntries")
export class StockReservationEntryController extends StockReservationEntryControllerBase {
  constructor(protected readonly service: StockReservationEntryService) {
    super(service);
  }
}
