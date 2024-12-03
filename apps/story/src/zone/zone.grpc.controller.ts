import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ZoneService } from "./zone.service";
import { ZoneGrpcControllerBase } from "./base/zone.grpc.controller.base";

@swagger.ApiTags("zones")
@common.Controller("zones")
export class ZoneGrpcController extends ZoneGrpcControllerBase {
  constructor(protected readonly service: ZoneService) {
    super(service);
  }
}
