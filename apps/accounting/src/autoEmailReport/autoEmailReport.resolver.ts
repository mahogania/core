import * as graphql from "@nestjs/graphql";
import { AutoEmailReportResolverBase } from "./base/autoEmailReport.resolver.base";
import { AutoEmailReport } from "./base/AutoEmailReport";
import { AutoEmailReportService } from "./autoEmailReport.service";

@graphql.Resolver(() => AutoEmailReport)
export class AutoEmailReportResolver extends AutoEmailReportResolverBase {
  constructor(protected readonly service: AutoEmailReportService) {
    super(service);
  }
}
