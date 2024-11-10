import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PetLevelstatsService } from "./petLevelstats.service";
import { PetLevelstatsControllerBase } from "./base/petLevelstats.controller.base";

@swagger.ApiTags("petLevelstats")
@common.Controller("petLevelstats")
export class PetLevelstatsController extends PetLevelstatsControllerBase {
  constructor(
    protected readonly service: PetLevelstatsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
