import * as graphql from "@nestjs/graphql";
import { CampaignItemResolverBase } from "./base/campaignItem.resolver.base";
import { CampaignItem } from "./base/CampaignItem";
import { CampaignItemService } from "./campaignItem.service";

@graphql.Resolver(() => CampaignItem)
export class CampaignItemResolver extends CampaignItemResolverBase {
  constructor(protected readonly service: CampaignItemService) {
    super(service);
  }
}
