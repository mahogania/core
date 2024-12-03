import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StockLedgerEntryService } from "./stockLedgerEntry.service";
import { StockLedgerEntryControllerBase } from "./base/stockLedgerEntry.controller.base";

@swagger.ApiTags("stockLedgerEntries")
@common.Controller("stockLedgerEntries")
export class StockLedgerEntryController extends StockLedgerEntryControllerBase {
  constructor(protected readonly service: StockLedgerEntryService) {
    super(service);
  }
}
