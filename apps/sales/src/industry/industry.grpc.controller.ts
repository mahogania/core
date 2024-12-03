import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { IndustryService } from "./industry.service";
import { IndustryGrpcControllerBase } from "./base/industry.grpc.controller.base";

@swagger.ApiTags("industries")
@common.Controller("industries")
export class IndustryGrpcController extends IndustryGrpcControllerBase {
  constructor(protected readonly service: IndustryService) {
    super(service);
  }
}
