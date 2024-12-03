import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QuestPoolService } from "./questPool.service";
import { QuestPoolGrpcControllerBase } from "./base/questPool.grpc.controller.base";

@swagger.ApiTags("questPools")
@common.Controller("questPools")
export class QuestPoolGrpcController extends QuestPoolGrpcControllerBase {
  constructor(protected readonly service: QuestPoolService) {
    super(service);
  }
}
