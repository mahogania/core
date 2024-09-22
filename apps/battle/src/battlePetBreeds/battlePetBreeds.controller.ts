import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BattlePetBreedsService } from "./battlePetBreeds.service";
import { BattlePetBreedsControllerBase } from "./base/battlePetBreeds.controller.base";

@swagger.ApiTags("battlePetBreeds")
@common.Controller("battlePetBreeds")
export class BattlePetBreedsController extends BattlePetBreedsControllerBase {
  constructor(
    protected readonly service: BattlePetBreedsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
