import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QuestDetailService } from "./questDetail.service";
import { QuestDetailGrpcControllerBase } from "./base/questDetail.grpc.controller.base";

@swagger.ApiTags("questDetails")
@common.Controller("questDetails")
export class QuestDetailGrpcController extends QuestDetailGrpcControllerBase {
  constructor(protected readonly service: QuestDetailService) {
    super(service);
  }
}
