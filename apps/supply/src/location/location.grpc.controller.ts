import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LocationService } from "./location.service";
import { LocationGrpcControllerBase } from "./base/location.grpc.controller.base";

@swagger.ApiTags("locations")
@common.Controller("locations")
export class LocationGrpcController extends LocationGrpcControllerBase {
  constructor(protected readonly service: LocationService) {
    super(service);
  }
}
