import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OutdoorpvpTemplateService } from "./outdoorpvpTemplate.service";
import { OutdoorpvpTemplateGrpcControllerBase } from "./base/outdoorpvpTemplate.grpc.controller.base";

@swagger.ApiTags("outdoorpvpTemplates")
@common.Controller("outdoorpvpTemplates")
export class OutdoorpvpTemplateGrpcController extends OutdoorpvpTemplateGrpcControllerBase {
  constructor(protected readonly service: OutdoorpvpTemplateService) {
    super(service);
  }
}
