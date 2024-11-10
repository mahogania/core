import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LocationProfileService } from "./locationProfile.service";
import { LocationProfileControllerBase } from "./base/locationProfile.controller.base";

@swagger.ApiTags("locationProfiles")
@common.Controller("locationProfiles")
export class LocationProfileController extends LocationProfileControllerBase {
  constructor(protected readonly service: LocationProfileService) {
    super(service);
  }
}
