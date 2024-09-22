import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QuestMailSenderService } from "./questMailSender.service";
import { QuestMailSenderGrpcControllerBase } from "./base/questMailSender.grpc.controller.base";

@swagger.ApiTags("questMailSenders")
@common.Controller("questMailSenders")
export class QuestMailSenderGrpcController extends QuestMailSenderGrpcControllerBase {
  constructor(protected readonly service: QuestMailSenderService) {
    super(service);
  }
}
