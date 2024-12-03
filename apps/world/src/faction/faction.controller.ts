import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FactionService } from "./faction.service";
import { FactionControllerBase } from "./base/faction.controller.base";

@swagger.ApiTags("factions")
@common.Controller("factions")
export class FactionController extends FactionControllerBase {
  constructor(
    protected readonly service: FactionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
