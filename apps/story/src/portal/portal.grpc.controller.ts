import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PortalService } from "./portal.service";
import { PortalGrpcControllerBase } from "./base/portal.grpc.controller.base";

@swagger.ApiTags("portals")
@common.Controller("portals")
export class PortalGrpcController extends PortalGrpcControllerBase {
  constructor(protected readonly service: PortalService) {
    super(service);
  }
}
