import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QuestDetailsService } from "./questDetails.service";
import { QuestDetailsGrpcControllerBase } from "./base/questDetails.grpc.controller.base";

@swagger.ApiTags("questDetails")
@common.Controller("questDetails")
export class QuestDetailsGrpcController extends QuestDetailsGrpcControllerBase {
  constructor(protected readonly service: QuestDetailsService) {
    super(service);
  }
}
