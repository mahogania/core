import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { QuestRegionService } from "./questRegion.service";
import { QuestRegionControllerBase } from "./base/questRegion.controller.base";

@swagger.ApiTags("questRegions")
@common.Controller("questRegions")
export class QuestRegionController extends QuestRegionControllerBase {
  constructor(
    protected readonly service: QuestRegionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
