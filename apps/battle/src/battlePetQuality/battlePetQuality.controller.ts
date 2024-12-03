import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BattlePetQualityService } from "./battlePetQuality.service";
import { BattlePetQualityControllerBase } from "./base/battlePetQuality.controller.base";

@swagger.ApiTags("battlePetQualities")
@common.Controller("battlePetQualities")
export class BattlePetQualityController extends BattlePetQualityControllerBase {
  constructor(
    protected readonly service: BattlePetQualityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
