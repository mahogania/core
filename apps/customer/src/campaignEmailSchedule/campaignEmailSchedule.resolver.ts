import * as graphql from "@nestjs/graphql";
import { CampaignEmailScheduleResolverBase } from "./base/campaignEmailSchedule.resolver.base";
import { CampaignEmailSchedule } from "./base/CampaignEmailSchedule";
import { CampaignEmailScheduleService } from "./campaignEmailSchedule.service";

@graphql.Resolver(() => CampaignEmailSchedule)
export class CampaignEmailScheduleResolver extends CampaignEmailScheduleResolverBase {
  constructor(protected readonly service: CampaignEmailScheduleService) {
    super(service);
  }
}
