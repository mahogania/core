import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CreatureAddonService } from "./creatureAddon.service";
import { CreatureAddonGrpcControllerBase } from "./base/creatureAddon.grpc.controller.base";

@swagger.ApiTags("creatureAddons")
@common.Controller("creatureAddons")
export class CreatureAddonGrpcController extends CreatureAddonGrpcControllerBase {
  constructor(protected readonly service: CreatureAddonService) {
    super(service);
  }
}
