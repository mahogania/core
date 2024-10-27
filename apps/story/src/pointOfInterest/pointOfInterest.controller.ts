import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PointOfInterestService } from "./pointOfInterest.service";
import { PointOfInterestControllerBase } from "./base/pointOfInterest.controller.base";

@swagger.ApiTags("pointOfInterests")
@common.Controller("pointOfInterests")
export class PointOfInterestController extends PointOfInterestControllerBase {
  constructor(
    protected readonly service: PointOfInterestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
