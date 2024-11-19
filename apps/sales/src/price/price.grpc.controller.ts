import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PriceService } from "./price.service";
import { PriceGrpcControllerBase } from "./base/price.grpc.controller.base";

@swagger.ApiTags("prices")
@common.Controller("prices")
export class PriceGrpcController extends PriceGrpcControllerBase {
  constructor(protected readonly service: PriceService) {
    super(service);
  }
}
