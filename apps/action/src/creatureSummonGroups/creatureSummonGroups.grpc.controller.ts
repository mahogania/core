import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CreatureSummonGroupsService } from "./creatureSummonGroups.service";
import { CreatureSummonGroupsGrpcControllerBase } from "./base/creatureSummonGroups.grpc.controller.base";

@swagger.ApiTags("creatureSummonGroups")
@common.Controller("creatureSummonGroups")
export class CreatureSummonGroupsGrpcController extends CreatureSummonGroupsGrpcControllerBase {
  constructor(protected readonly service: CreatureSummonGroupsService) {
    super(service);
  }
}
