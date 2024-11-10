import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { QuestMailService } from "./questMail.service";
import { QuestMailControllerBase } from "./base/questMail.controller.base";

@swagger.ApiTags("questMails")
@common.Controller("questMails")
export class QuestMailController extends QuestMailControllerBase {
  constructor(
    protected readonly service: QuestMailService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
