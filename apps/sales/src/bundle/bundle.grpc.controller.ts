import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BundleService } from "./bundle.service";
import { BundleGrpcControllerBase } from "./base/bundle.grpc.controller.base";

@swagger.ApiTags("bundles")
@common.Controller("bundles")
export class BundleGrpcController extends BundleGrpcControllerBase {
  constructor(protected readonly service: BundleService) {
    super(service);
  }
}
