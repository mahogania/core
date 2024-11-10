import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CampaignItemService } from "./campaignItem.service";
import { CampaignItemControllerBase } from "./base/campaignItem.controller.base";

@swagger.ApiTags("campaignItems")
@common.Controller("campaignItems")
export class CampaignItemController extends CampaignItemControllerBase {
  constructor(protected readonly service: CampaignItemService) {
    super(service);
  }
}
