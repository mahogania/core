import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ItemDefaultService } from "./itemDefault.service";
import { ItemDefaultControllerBase } from "./base/itemDefault.controller.base";

@swagger.ApiTags("itemDefaults")
@common.Controller("itemDefaults")
export class ItemDefaultController extends ItemDefaultControllerBase {
  constructor(protected readonly service: ItemDefaultService) {
    super(service);
  }
}
