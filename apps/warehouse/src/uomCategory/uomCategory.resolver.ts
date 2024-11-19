import * as graphql from "@nestjs/graphql";
import { UomCategoryResolverBase } from "./base/uomCategory.resolver.base";
import { UomCategory } from "./base/UomCategory";
import { UomCategoryService } from "./uomCategory.service";

@graphql.Resolver(() => UomCategory)
export class UomCategoryResolver extends UomCategoryResolverBase {
  constructor(protected readonly service: UomCategoryService) {
    super(service);
  }
}
