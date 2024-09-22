import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FishingLootTemplateService } from "./fishingLootTemplate.service";
import { FishingLootTemplateControllerBase } from "./base/fishingLootTemplate.controller.base";

@swagger.ApiTags("fishingLootTemplates")
@common.Controller("fishingLootTemplates")
export class FishingLootTemplateController extends FishingLootTemplateControllerBase {
  constructor(
    protected readonly service: FishingLootTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
