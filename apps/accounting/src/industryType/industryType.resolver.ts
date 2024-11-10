import * as graphql from "@nestjs/graphql";
import { IndustryTypeResolverBase } from "./base/industryType.resolver.base";
import { IndustryType } from "./base/IndustryType";
import { IndustryTypeService } from "./industryType.service";

@graphql.Resolver(() => IndustryType)
export class IndustryTypeResolver extends IndustryTypeResolverBase {
  constructor(protected readonly service: IndustryTypeService) {
    super(service);
  }
}
