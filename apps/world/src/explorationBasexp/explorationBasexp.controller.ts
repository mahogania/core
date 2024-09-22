import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ExplorationBasexpService } from "./explorationBasexp.service";
import { ExplorationBasexpControllerBase } from "./base/explorationBasexp.controller.base";

@swagger.ApiTags("explorationBasexps")
@common.Controller("explorationBasexps")
export class ExplorationBasexpController extends ExplorationBasexpControllerBase {
  constructor(
    protected readonly service: ExplorationBasexpService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
