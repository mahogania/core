import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PointsOfInterestService } from "./pointsOfInterest.service";
import { PointsOfInterestGrpcControllerBase } from "./base/pointsOfInterest.grpc.controller.base";

@swagger.ApiTags("pointsOfInterests")
@common.Controller("pointsOfInterests")
export class PointsOfInterestGrpcController extends PointsOfInterestGrpcControllerBase {
  constructor(protected readonly service: PointsOfInterestService) {
    super(service);
  }
}
