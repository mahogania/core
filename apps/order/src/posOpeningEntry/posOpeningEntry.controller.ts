import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PosOpeningEntryService } from "./posOpeningEntry.service";
import { PosOpeningEntryControllerBase } from "./base/posOpeningEntry.controller.base";

@swagger.ApiTags("posOpeningEntries")
@common.Controller("posOpeningEntries")
export class PosOpeningEntryController extends PosOpeningEntryControllerBase {
  constructor(protected readonly service: PosOpeningEntryService) {
    super(service);
  }
}
