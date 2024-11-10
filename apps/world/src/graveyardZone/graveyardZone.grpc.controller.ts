import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GraveyardZoneService } from "./graveyardZone.service";
import { GraveyardZoneGrpcControllerBase } from "./base/graveyardZone.grpc.controller.base";

@swagger.ApiTags("graveyardZones")
@common.Controller("graveyardZones")
export class GraveyardZoneGrpcController extends GraveyardZoneGrpcControllerBase {
  constructor(protected readonly service: GraveyardZoneService) {
    super(service);
  }
}
