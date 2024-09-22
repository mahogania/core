import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CreatureTemplateAddonService } from "./creatureTemplateAddon.service";
import { CreatureTemplateAddonGrpcControllerBase } from "./base/creatureTemplateAddon.grpc.controller.base";

@swagger.ApiTags("creatureTemplateAddons")
@common.Controller("creatureTemplateAddons")
export class CreatureTemplateAddonGrpcController extends CreatureTemplateAddonGrpcControllerBase {
  constructor(protected readonly service: CreatureTemplateAddonService) {
    super(service);
  }
}
