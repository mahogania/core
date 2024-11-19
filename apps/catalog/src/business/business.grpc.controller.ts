import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BusinessService } from "./business.service";
import { BusinessGrpcControllerBase } from "./base/business.grpc.controller.base";

@swagger.ApiTags("businesses")
@common.Controller("businesses")
export class BusinessGrpcController extends BusinessGrpcControllerBase {
  constructor(protected readonly service: BusinessService) {
    super(service);
  }
}
