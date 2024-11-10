import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AutoEmailReportService } from "./autoEmailReport.service";
import { AutoEmailReportControllerBase } from "./base/autoEmailReport.controller.base";

@swagger.ApiTags("autoEmailReports")
@common.Controller("autoEmailReports")
export class AutoEmailReportController extends AutoEmailReportControllerBase {
  constructor(protected readonly service: AutoEmailReportService) {
    super(service);
  }
}
