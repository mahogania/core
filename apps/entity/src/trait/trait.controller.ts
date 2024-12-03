import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TraitService } from "./trait.service";
import { TraitControllerBase } from "./base/trait.controller.base";

@swagger.ApiTags("traits")
@common.Controller("traits")
export class TraitController extends TraitControllerBase {
  constructor(protected readonly service: TraitService) {
    super(service);
  }
}
