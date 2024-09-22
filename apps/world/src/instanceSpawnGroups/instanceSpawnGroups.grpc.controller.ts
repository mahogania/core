import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InstanceSpawnGroupsService } from "./instanceSpawnGroups.service";
import { InstanceSpawnGroupsGrpcControllerBase } from "./base/instanceSpawnGroups.grpc.controller.base";

@swagger.ApiTags("instanceSpawnGroups")
@common.Controller("instanceSpawnGroups")
export class InstanceSpawnGroupsGrpcController extends InstanceSpawnGroupsGrpcControllerBase {
  constructor(protected readonly service: InstanceSpawnGroupsService) {
    super(service);
  }
}
