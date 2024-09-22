import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ConversationTemplateService } from "./conversationTemplate.service";
import { ConversationTemplateGrpcControllerBase } from "./base/conversationTemplate.grpc.controller.base";

@swagger.ApiTags("conversationTemplates")
@common.Controller("conversationTemplates")
export class ConversationTemplateGrpcController extends ConversationTemplateGrpcControllerBase {
  constructor(protected readonly service: ConversationTemplateService) {
    super(service);
  }
}
