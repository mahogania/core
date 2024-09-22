import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CreatureModelInfoService } from "./creatureModelInfo.service";
import { CreatureModelInfoGrpcControllerBase } from "./base/creatureModelInfo.grpc.controller.base";

@swagger.ApiTags("creatureModelInfos")
@common.Controller("creatureModelInfos")
export class CreatureModelInfoGrpcController extends CreatureModelInfoGrpcControllerBase {
  constructor(protected readonly service: CreatureModelInfoService) {
    super(service);
  }
}
