import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { BattlemasterEntryService } from "./battlemasterEntry.service";
import { BattlemasterEntryControllerBase } from "./base/battlemasterEntry.controller.base";

@swagger.ApiTags("battlemasterEntries")
@common.Controller("battlemasterEntries")
export class BattlemasterEntryController extends BattlemasterEntryControllerBase {
  constructor(
    protected readonly service: BattlemasterEntryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
