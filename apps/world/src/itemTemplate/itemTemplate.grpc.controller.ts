import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ItemTemplateService } from "./itemTemplate.service";
import { ItemTemplateGrpcControllerBase } from "./base/itemTemplate.grpc.controller.base";

@swagger.ApiTags("itemTemplates")
@common.Controller("itemTemplates")
export class ItemTemplateGrpcController extends ItemTemplateGrpcControllerBase {
  constructor(protected readonly service: ItemTemplateService) {
    super(service);
  }
}
