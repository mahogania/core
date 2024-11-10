import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QuestPoiPointsService } from "./questPoiPoints.service";
import { QuestPoiPointsGrpcControllerBase } from "./base/questPoiPoints.grpc.controller.base";

@swagger.ApiTags("questPoiPoints")
@common.Controller("questPoiPoints")
export class QuestPoiPointsGrpcController extends QuestPoiPointsGrpcControllerBase {
  constructor(protected readonly service: QuestPoiPointsService) {
    super(service);
  }
}
