import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CompetitorDetailService } from "./competitorDetail.service";
import { CompetitorDetailControllerBase } from "./base/competitorDetail.controller.base";

@swagger.ApiTags("competitorDetails")
@common.Controller("competitorDetails")
export class CompetitorDetailController extends CompetitorDetailControllerBase {
  constructor(protected readonly service: CompetitorDetailService) {
    super(service);
  }
}
