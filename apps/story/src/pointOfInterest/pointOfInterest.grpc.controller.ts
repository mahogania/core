import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PointOfInterestService } from "./pointOfInterest.service";
import { PointOfInterestGrpcControllerBase } from "./base/pointOfInterest.grpc.controller.base";

@swagger.ApiTags("pointOfInterests")
@common.Controller("pointOfInterests")
export class PointOfInterestGrpcController extends PointOfInterestGrpcControllerBase {
  constructor(protected readonly service: PointOfInterestService) {
    super(service);
  }
}
