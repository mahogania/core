import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { CreatureSummonedDataService } from "./creatureSummonedData.service";
import { CreatureSummonedDataControllerBase } from "./base/creatureSummonedData.controller.base";

@swagger.ApiTags("creatureSummonedData")
@common.Controller("creatureSummonedData")
export class CreatureSummonedDataController extends CreatureSummonedDataControllerBase {
  constructor(
    protected readonly service: CreatureSummonedDataService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
