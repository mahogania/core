import * as graphql from "@nestjs/graphql";
import { CompanyHistoryResolverBase } from "./base/companyHistory.resolver.base";
import { CompanyHistory } from "./base/CompanyHistory";
import { CompanyHistoryService } from "./companyHistory.service";

@graphql.Resolver(() => CompanyHistory)
export class CompanyHistoryResolver extends CompanyHistoryResolverBase {
  constructor(protected readonly service: CompanyHistoryService) {
    super(service);
  }
}
