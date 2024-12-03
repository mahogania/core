import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BattlemasterEntryService } from "./battlemasterEntry.service";
import { BattlemasterEntryGrpcControllerBase } from "./base/battlemasterEntry.grpc.controller.base";

@swagger.ApiTags("battlemasterEntries")
@common.Controller("battlemasterEntries")
export class BattlemasterEntryGrpcController extends BattlemasterEntryGrpcControllerBase {
  constructor(protected readonly service: BattlemasterEntryService) {
    super(service);
  }
}
