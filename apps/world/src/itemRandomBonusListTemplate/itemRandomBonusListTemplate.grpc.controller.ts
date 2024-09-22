import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ItemRandomBonusListTemplateService } from "./itemRandomBonusListTemplate.service";
import { ItemRandomBonusListTemplateGrpcControllerBase } from "./base/itemRandomBonusListTemplate.grpc.controller.base";

@swagger.ApiTags("itemRandomBonusListTemplates")
@common.Controller("itemRandomBonusListTemplates")
export class ItemRandomBonusListTemplateGrpcController extends ItemRandomBonusListTemplateGrpcControllerBase {
  constructor(protected readonly service: ItemRandomBonusListTemplateService) {
    super(service);
  }
}
