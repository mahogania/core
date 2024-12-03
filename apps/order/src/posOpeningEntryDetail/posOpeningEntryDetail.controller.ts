import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PosOpeningEntryDetailService } from "./posOpeningEntryDetail.service";
import { PosOpeningEntryDetailControllerBase } from "./base/posOpeningEntryDetail.controller.base";

@swagger.ApiTags("posOpeningEntryDetails")
@common.Controller("posOpeningEntryDetails")
export class PosOpeningEntryDetailController extends PosOpeningEntryDetailControllerBase {
  constructor(protected readonly service: PosOpeningEntryDetailService) {
    super(service);
  }
}
