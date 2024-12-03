import * as graphql from "@nestjs/graphql";
import { SalesStageResolverBase } from "./base/salesStage.resolver.base";
import { SalesStage } from "./base/SalesStage";
import { SalesStageService } from "./salesStage.service";

@graphql.Resolver(() => SalesStage)
export class SalesStageResolver extends SalesStageResolverBase {
  constructor(protected readonly service: SalesStageService) {
    super(service);
  }
}
