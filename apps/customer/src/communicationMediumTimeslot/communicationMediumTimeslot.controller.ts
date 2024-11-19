import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CommunicationMediumTimeslotService } from "./communicationMediumTimeslot.service";
import { CommunicationMediumTimeslotControllerBase } from "./base/communicationMediumTimeslot.controller.base";

@swagger.ApiTags("communicationMediumTimeslots")
@common.Controller("communicationMediumTimeslots")
export class CommunicationMediumTimeslotController extends CommunicationMediumTimeslotControllerBase {
  constructor(protected readonly service: CommunicationMediumTimeslotService) {
    super(service);
  }
}
