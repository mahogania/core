import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SerialAndBatchEntryService } from "./serialAndBatchEntry.service";
import { SerialAndBatchEntryControllerBase } from "./base/serialAndBatchEntry.controller.base";

@swagger.ApiTags("serialAndBatchEntries")
@common.Controller("serialAndBatchEntries")
export class SerialAndBatchEntryController extends SerialAndBatchEntryControllerBase {
  constructor(protected readonly service: SerialAndBatchEntryService) {
    super(service);
  }
}
