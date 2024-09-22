import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ConversationTemplateService } from "./conversationTemplate.service";
import { ConversationTemplateControllerBase } from "./base/conversationTemplate.controller.base";

@swagger.ApiTags("conversationTemplates")
@common.Controller("conversationTemplates")
export class ConversationTemplateController extends ConversationTemplateControllerBase {
  constructor(
    protected readonly service: ConversationTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
