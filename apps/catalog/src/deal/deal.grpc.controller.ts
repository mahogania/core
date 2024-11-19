import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DealService } from "./deal.service";
import { DealGrpcControllerBase } from "./base/deal.grpc.controller.base";

@swagger.ApiTags("deals")
@common.Controller("deals")
export class DealGrpcController extends DealGrpcControllerBase {
  constructor(protected readonly service: DealService) {
    super(service);
  }
}
