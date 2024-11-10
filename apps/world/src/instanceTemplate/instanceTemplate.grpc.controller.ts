import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InstanceTemplateService } from "./instanceTemplate.service";
import { InstanceTemplateGrpcControllerBase } from "./base/instanceTemplate.grpc.controller.base";

@swagger.ApiTags("instanceTemplates")
@common.Controller("instanceTemplates")
export class InstanceTemplateGrpcController extends InstanceTemplateGrpcControllerBase {
  constructor(protected readonly service: InstanceTemplateService) {
    super(service);
  }
}
