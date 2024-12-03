import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ConversationLineTemplateService } from "./conversationLineTemplate.service";
import { ConversationLineTemplateGrpcControllerBase } from "./base/conversationLineTemplate.grpc.controller.base";

@swagger.ApiTags("conversationLineTemplates")
@common.Controller("conversationLineTemplates")
export class ConversationLineTemplateGrpcController extends ConversationLineTemplateGrpcControllerBase {
  constructor(protected readonly service: ConversationLineTemplateService) {
    super(service);
  }
}
