import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CreatureLevelStatService } from "./creatureLevelStat.service";
import { CreatureLevelStatGrpcControllerBase } from "./base/creatureLevelStat.grpc.controller.base";

@swagger.ApiTags("creatureLevelStats")
@common.Controller("creatureLevelStats")
export class CreatureLevelStatGrpcController extends CreatureLevelStatGrpcControllerBase {
  constructor(protected readonly service: CreatureLevelStatService) {
    super(service);
  }
}
