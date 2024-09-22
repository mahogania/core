import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QuestPoiService } from "./questPoi.service";
import { QuestPoiGrpcControllerBase } from "./base/questPoi.grpc.controller.base";

@swagger.ApiTags("questPois")
@common.Controller("questPois")
export class QuestPoiGrpcController extends QuestPoiGrpcControllerBase {
  constructor(protected readonly service: QuestPoiService) {
    super(service);
  }
}
