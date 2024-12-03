import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SpawnGroupService } from "./spawnGroup.service";
import { SpawnGroupGrpcControllerBase } from "./base/spawnGroup.grpc.controller.base";

@swagger.ApiTags("spawnGroups")
@common.Controller("spawnGroups")
export class SpawnGroupGrpcController extends SpawnGroupGrpcControllerBase {
  constructor(protected readonly service: SpawnGroupService) {
    super(service);
  }
}
