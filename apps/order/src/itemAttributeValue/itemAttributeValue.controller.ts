import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ItemAttributeValueService } from "./itemAttributeValue.service";
import { ItemAttributeValueControllerBase } from "./base/itemAttributeValue.controller.base";

@swagger.ApiTags("itemAttributeValues")
@common.Controller("itemAttributeValues")
export class ItemAttributeValueController extends ItemAttributeValueControllerBase {
  constructor(protected readonly service: ItemAttributeValueService) {
    super(service);
  }
}
