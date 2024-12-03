import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SerialAndBatchBundleService } from "./serialAndBatchBundle.service";
import { SerialAndBatchBundleControllerBase } from "./base/serialAndBatchBundle.controller.base";

@swagger.ApiTags("serialAndBatchBundles")
@common.Controller("serialAndBatchBundles")
export class SerialAndBatchBundleController extends SerialAndBatchBundleControllerBase {
  constructor(protected readonly service: SerialAndBatchBundleService) {
    super(service);
  }
}
