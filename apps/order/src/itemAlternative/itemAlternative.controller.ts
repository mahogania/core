import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ItemAlternativeService } from "./itemAlternative.service";
import { ItemAlternativeControllerBase } from "./base/itemAlternative.controller.base";

@swagger.ApiTags("itemAlternatives")
@common.Controller("itemAlternatives")
export class ItemAlternativeController extends ItemAlternativeControllerBase {
  constructor(protected readonly service: ItemAlternativeService) {
    super(service);
  }
}
