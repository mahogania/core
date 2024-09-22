import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ConversationLineTemplateService } from "./conversationLineTemplate.service";
import { ConversationLineTemplateControllerBase } from "./base/conversationLineTemplate.controller.base";

@swagger.ApiTags("conversationLineTemplates")
@common.Controller("conversationLineTemplates")
export class ConversationLineTemplateController extends ConversationLineTemplateControllerBase {
  constructor(
    protected readonly service: ConversationLineTemplateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
