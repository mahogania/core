import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ConnectedAppService } from "./connectedApp.service";
import { ConnectedAppControllerBase } from "./base/connectedApp.controller.base";

@swagger.ApiTags("connectedApps")
@common.Controller("connectedApps")
export class ConnectedAppController extends ConnectedAppControllerBase {
  constructor(protected readonly service: ConnectedAppService) {
    super(service);
  }
}
