import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { QuestMailSenderService } from "./questMailSender.service";
import { QuestMailSenderControllerBase } from "./base/questMailSender.controller.base";

@swagger.ApiTags("questMailSenders")
@common.Controller("questMailSenders")
export class QuestMailSenderController extends QuestMailSenderControllerBase {
  constructor(
    protected readonly service: QuestMailSenderService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
