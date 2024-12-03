import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PointsOfInterestLocaleService } from "./pointsOfInterestLocale.service";
import { PointsOfInterestLocaleGrpcControllerBase } from "./base/pointsOfInterestLocale.grpc.controller.base";

@swagger.ApiTags("pointsOfInterestLocales")
@common.Controller("pointsOfInterestLocales")
export class PointsOfInterestLocaleGrpcController extends PointsOfInterestLocaleGrpcControllerBase {
  constructor(protected readonly service: PointsOfInterestLocaleService) {
    super(service);
  }
}
