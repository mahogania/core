import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CommunicationMediumService } from "./communicationMedium.service";
import { CommunicationMediumControllerBase } from "./base/communicationMedium.controller.base";

@swagger.ApiTags("communicationMediums")
@common.Controller("communicationMediums")
export class CommunicationMediumController extends CommunicationMediumControllerBase {
  constructor(protected readonly service: CommunicationMediumService) {
    super(service);
  }
}
