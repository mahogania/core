import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LocationProfileService } from "./locationProfile.service";
import { LocationProfileGrpcControllerBase } from "./base/locationProfile.grpc.controller.base";

@swagger.ApiTags("locationProfiles")
@common.Controller("locationProfiles")
export class LocationProfileGrpcController extends LocationProfileGrpcControllerBase {
  constructor(protected readonly service: LocationProfileService) {
    super(service);
  }
}
