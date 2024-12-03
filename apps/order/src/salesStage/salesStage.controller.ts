import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SalesStageService } from "./salesStage.service";
import { SalesStageControllerBase } from "./base/salesStage.controller.base";

@swagger.ApiTags("salesStages")
@common.Controller("salesStages")
export class SalesStageController extends SalesStageControllerBase {
  constructor(protected readonly service: SalesStageService) {
    super(service);
  }
}
