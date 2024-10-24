import * as graphql from "@nestjs/graphql";
import { IndustryResolverBase } from "./base/industry.resolver.base";
import { Industry } from "./base/Industry";
import { IndustryService } from "./industry.service";

@graphql.Resolver(() => Industry)
export class IndustryResolver extends IndustryResolverBase {
  constructor(protected readonly service: IndustryService) {
    super(service);
  }
}
