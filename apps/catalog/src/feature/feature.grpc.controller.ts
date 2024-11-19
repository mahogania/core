import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FeatureService } from "./feature.service";
import { FeatureGrpcControllerBase } from "./base/feature.grpc.controller.base";

@swagger.ApiTags("features")
@common.Controller("features")
export class FeatureGrpcController extends FeatureGrpcControllerBase {
  constructor(protected readonly service: FeatureService) {
    super(service);
  }
}
