import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BundleService } from "./bundle.service";
import { BundleControllerBase } from "./base/bundle.controller.base";

@swagger.ApiTags("bundles")
@common.Controller("bundles")
export class BundleController extends BundleControllerBase {
  constructor(protected readonly service: BundleService) {
    super(service);
  }
}
