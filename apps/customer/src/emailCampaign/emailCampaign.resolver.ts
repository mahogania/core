import * as graphql from "@nestjs/graphql";
import { EmailCampaignResolverBase } from "./base/emailCampaign.resolver.base";
import { EmailCampaign } from "./base/EmailCampaign";
import { EmailCampaignService } from "./emailCampaign.service";

@graphql.Resolver(() => EmailCampaign)
export class EmailCampaignResolver extends EmailCampaignResolverBase {
  constructor(protected readonly service: EmailCampaignService) {
    super(service);
  }
}
