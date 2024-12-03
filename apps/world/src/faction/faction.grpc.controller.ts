import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FactionService } from "./faction.service";
import { FactionGrpcControllerBase } from "./base/faction.grpc.controller.base";

@swagger.ApiTags("factions")
@common.Controller("factions")
export class FactionGrpcController extends FactionGrpcControllerBase {
  constructor(protected readonly service: FactionService) {
    super(service);
  }
}
