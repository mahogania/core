import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EpicService } from "./epic.service";
import { EpicControllerBase } from "./base/epic.controller.base";

@swagger.ApiTags("epics")
@common.Controller("epics")
export class EpicController extends EpicControllerBase {
  constructor(
    protected readonly service: EpicService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
