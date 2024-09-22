import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ItemTemplateAddonService } from "./itemTemplateAddon.service";
import { ItemTemplateAddonGrpcControllerBase } from "./base/itemTemplateAddon.grpc.controller.base";

@swagger.ApiTags("itemTemplateAddons")
@common.Controller("itemTemplateAddons")
export class ItemTemplateAddonGrpcController extends ItemTemplateAddonGrpcControllerBase {
  constructor(protected readonly service: ItemTemplateAddonService) {
    super(service);
  }
}
