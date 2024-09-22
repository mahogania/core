import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { NpcTextService } from "./npcText.service";
import { NpcTextControllerBase } from "./base/npcText.controller.base";

@swagger.ApiTags("npcTexts")
@common.Controller("npcTexts")
export class NpcTextController extends NpcTextControllerBase {
  constructor(
    protected readonly service: NpcTextService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
