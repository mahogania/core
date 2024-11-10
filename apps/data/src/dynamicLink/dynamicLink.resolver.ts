import * as graphql from "@nestjs/graphql";
import { DynamicLinkResolverBase } from "./base/dynamicLink.resolver.base";
import { DynamicLink } from "./base/DynamicLink";
import { DynamicLinkService } from "./dynamicLink.service";

@graphql.Resolver(() => DynamicLink)
export class DynamicLinkResolver extends DynamicLinkResolverBase {
  constructor(protected readonly service: DynamicLinkService) {
    super(service);
  }
}
