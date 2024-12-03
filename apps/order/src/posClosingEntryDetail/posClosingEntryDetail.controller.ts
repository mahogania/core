import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PosClosingEntryDetailService } from "./posClosingEntryDetail.service";
import { PosClosingEntryDetailControllerBase } from "./base/posClosingEntryDetail.controller.base";

@swagger.ApiTags("posClosingEntryDetails")
@common.Controller("posClosingEntryDetails")
export class PosClosingEntryDetailController extends PosClosingEntryDetailControllerBase {
  constructor(protected readonly service: PosClosingEntryDetailService) {
    super(service);
  }
}
