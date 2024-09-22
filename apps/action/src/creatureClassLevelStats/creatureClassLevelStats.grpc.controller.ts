import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CreatureClassLevelStatsService } from "./creatureClassLevelStats.service";
import { CreatureClassLevelStatsGrpcControllerBase } from "./base/creatureClassLevelStats.grpc.controller.base";

@swagger.ApiTags("creatureClassLevelStats")
@common.Controller("creatureClassLevelStats")
export class CreatureClassLevelStatsGrpcController extends CreatureClassLevelStatsGrpcControllerBase {
  constructor(protected readonly service: CreatureClassLevelStatsService) {
    super(service);
  }
}
