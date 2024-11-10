import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PoolTemplateService } from "./poolTemplate.service";
import { PoolTemplateGrpcControllerBase } from "./base/poolTemplate.grpc.controller.base";

@swagger.ApiTags("poolTemplates")
@common.Controller("poolTemplates")
export class PoolTemplateGrpcController extends PoolTemplateGrpcControllerBase {
  constructor(protected readonly service: PoolTemplateService) {
    super(service);
  }
}
