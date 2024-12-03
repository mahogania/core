import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PosClosingEntryService } from "./posClosingEntry.service";
import { PosClosingEntryControllerBase } from "./base/posClosingEntry.controller.base";

@swagger.ApiTags("posClosingEntries")
@common.Controller("posClosingEntries")
export class PosClosingEntryController extends PosClosingEntryControllerBase {
  constructor(protected readonly service: PosClosingEntryService) {
    super(service);
  }
}
