import * as graphql from "@nestjs/graphql";
import { BrandResolverBase } from "./base/brand.resolver.base";
import { Brand } from "./base/Brand";
import { BrandService } from "./brand.service";

@graphql.Resolver(() => Brand)
export class BrandResolver extends BrandResolverBase {
  constructor(protected readonly service: BrandService) {
    super(service);
  }
}
