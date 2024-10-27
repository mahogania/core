import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QuestMailService } from "./questMail.service";
import { QuestMailGrpcControllerBase } from "./base/questMail.grpc.controller.base";

@swagger.ApiTags("questMails")
@common.Controller("questMails")
export class QuestMailGrpcController extends QuestMailGrpcControllerBase {
  constructor(protected readonly service: QuestMailService) {
    super(service);
  }
}
