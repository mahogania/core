import * as graphql from "@nestjs/graphql";
import { AssetActivityResolverBase } from "./base/assetActivity.resolver.base";
import { AssetActivity } from "./base/AssetActivity";
import { AssetActivityService } from "./assetActivity.service";

@graphql.Resolver(() => AssetActivity)
export class AssetActivityResolver extends AssetActivityResolverBase {
  constructor(protected readonly service: AssetActivityService) {
    super(service);
  }
}
