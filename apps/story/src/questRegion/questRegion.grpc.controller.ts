import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QuestRegionService } from "./questRegion.service";
import { QuestRegionGrpcControllerBase } from "./base/questRegion.grpc.controller.base";

@swagger.ApiTags("questRegions")
@common.Controller("questRegions")
export class QuestRegionGrpcController extends QuestRegionGrpcControllerBase {
  constructor(protected readonly service: QuestRegionService) {
    super(service);
  }
}
