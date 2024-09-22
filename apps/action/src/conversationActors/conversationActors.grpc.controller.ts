import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ConversationActorsService } from "./conversationActors.service";
import { ConversationActorsGrpcControllerBase } from "./base/conversationActors.grpc.controller.base";

@swagger.ApiTags("conversationActors")
@common.Controller("conversationActors")
export class ConversationActorsGrpcController extends ConversationActorsGrpcControllerBase {
  constructor(protected readonly service: ConversationActorsService) {
    super(service);
  }
}
