import * as graphql from "@nestjs/graphql";
import { BundleResolverBase } from "./base/bundle.resolver.base";
import { Bundle } from "./base/Bundle";
import { BundleService } from "./bundle.service";

@graphql.Resolver(() => Bundle)
export class BundleResolver extends BundleResolverBase {
  constructor(protected readonly service: BundleService) {
    super(service);
  }
}
