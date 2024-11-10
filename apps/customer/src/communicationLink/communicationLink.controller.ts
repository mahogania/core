import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CommunicationLinkService } from "./communicationLink.service";
import { CommunicationLinkControllerBase } from "./base/communicationLink.controller.base";

@swagger.ApiTags("communicationLinks")
@common.Controller("communicationLinks")
export class CommunicationLinkController extends CommunicationLinkControllerBase {
  constructor(protected readonly service: CommunicationLinkService) {
    super(service);
  }
}
