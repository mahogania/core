import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ItemLootTemplateService } from "./itemLootTemplate.service";
import { ItemLootTemplateGrpcControllerBase } from "./base/itemLootTemplate.grpc.controller.base";

@swagger.ApiTags("itemLootTemplates")
@common.Controller("itemLootTemplates")
export class ItemLootTemplateGrpcController extends ItemLootTemplateGrpcControllerBase {
  constructor(protected readonly service: ItemLootTemplateService) {
    super(service);
  }
}
