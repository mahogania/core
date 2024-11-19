import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CraftLevelStatService } from "./craftLevelStat.service";
import { CraftLevelStatGrpcControllerBase } from "./base/craftLevelStat.grpc.controller.base";

@swagger.ApiTags("craftLevelStats")
@common.Controller("craftLevelStats")
export class CraftLevelStatGrpcController extends CraftLevelStatGrpcControllerBase {
  constructor(protected readonly service: CraftLevelStatService) {
    super(service);
  }
}
