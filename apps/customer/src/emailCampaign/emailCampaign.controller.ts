import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EmailCampaignService } from "./emailCampaign.service";
import { EmailCampaignControllerBase } from "./base/emailCampaign.controller.base";

@swagger.ApiTags("emailCampaigns")
@common.Controller("emailCampaigns")
export class EmailCampaignController extends EmailCampaignControllerBase {
  constructor(protected readonly service: EmailCampaignService) {
    super(service);
  }
}
