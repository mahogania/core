import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ConversationActorsService } from "./conversationActors.service";
import { ConversationActorsControllerBase } from "./base/conversationActors.controller.base";

@swagger.ApiTags("conversationActors")
@common.Controller("conversationActors")
export class ConversationActorsController extends ConversationActorsControllerBase {
  constructor(
    protected readonly service: ConversationActorsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
