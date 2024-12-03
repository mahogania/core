import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { QuestPoiService } from "./questPoi.service";
import { QuestPoiControllerBase } from "./base/questPoi.controller.base";

@swagger.ApiTags("questPois")
@common.Controller("questPois")
export class QuestPoiController extends QuestPoiControllerBase {
  constructor(
    protected readonly service: QuestPoiService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
