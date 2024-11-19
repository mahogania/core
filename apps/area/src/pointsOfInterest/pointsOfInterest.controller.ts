import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PointsOfInterestService } from "./pointsOfInterest.service";
import { PointsOfInterestControllerBase } from "./base/pointsOfInterest.controller.base";

@swagger.ApiTags("pointsOfInterests")
@common.Controller("pointsOfInterests")
export class PointsOfInterestController extends PointsOfInterestControllerBase {
  constructor(
    protected readonly service: PointsOfInterestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
