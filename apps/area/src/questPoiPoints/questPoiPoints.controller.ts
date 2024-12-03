import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { QuestPoiPointsService } from "./questPoiPoints.service";
import { QuestPoiPointsControllerBase } from "./base/questPoiPoints.controller.base";

@swagger.ApiTags("questPoiPoints")
@common.Controller("questPoiPoints")
export class QuestPoiPointsController extends QuestPoiPointsControllerBase {
  constructor(
    protected readonly service: QuestPoiPointsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
