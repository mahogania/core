import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CampaignEmailScheduleService } from "./campaignEmailSchedule.service";
import { CampaignEmailScheduleControllerBase } from "./base/campaignEmailSchedule.controller.base";

@swagger.ApiTags("campaignEmailSchedules")
@common.Controller("campaignEmailSchedules")
export class CampaignEmailScheduleController extends CampaignEmailScheduleControllerBase {
  constructor(protected readonly service: CampaignEmailScheduleService) {
    super(service);
  }
}
