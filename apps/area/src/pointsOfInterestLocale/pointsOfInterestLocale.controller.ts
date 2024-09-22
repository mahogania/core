import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PointsOfInterestLocaleService } from "./pointsOfInterestLocale.service";
import { PointsOfInterestLocaleControllerBase } from "./base/pointsOfInterestLocale.controller.base";

@swagger.ApiTags("pointsOfInterestLocales")
@common.Controller("pointsOfInterestLocales")
export class PointsOfInterestLocaleController extends PointsOfInterestLocaleControllerBase {
  constructor(
    protected readonly service: PointsOfInterestLocaleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
