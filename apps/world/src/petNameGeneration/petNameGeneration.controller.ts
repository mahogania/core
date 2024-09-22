import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PetNameGenerationService } from "./petNameGeneration.service";
import { PetNameGenerationControllerBase } from "./base/petNameGeneration.controller.base";

@swagger.ApiTags("petNameGenerations")
@common.Controller("petNameGenerations")
export class PetNameGenerationController extends PetNameGenerationControllerBase {
  constructor(
    protected readonly service: PetNameGenerationService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
