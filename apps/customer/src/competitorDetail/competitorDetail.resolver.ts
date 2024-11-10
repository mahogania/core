import * as graphql from "@nestjs/graphql";
import { CompetitorDetailResolverBase } from "./base/competitorDetail.resolver.base";
import { CompetitorDetail } from "./base/CompetitorDetail";
import { CompetitorDetailService } from "./competitorDetail.service";

@graphql.Resolver(() => CompetitorDetail)
export class CompetitorDetailResolver extends CompetitorDetailResolverBase {
  constructor(protected readonly service: CompetitorDetailService) {
    super(service);
  }
}
