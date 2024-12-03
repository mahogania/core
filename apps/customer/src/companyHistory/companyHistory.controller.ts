import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CompanyHistoryService } from "./companyHistory.service";
import { CompanyHistoryControllerBase } from "./base/companyHistory.controller.base";

@swagger.ApiTags("companyHistories")
@common.Controller("companyHistories")
export class CompanyHistoryController extends CompanyHistoryControllerBase {
  constructor(protected readonly service: CompanyHistoryService) {
    super(service);
  }
}
