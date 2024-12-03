import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WorldService } from "./world.service";
import { WorldControllerBase } from "./base/world.controller.base";

@swagger.ApiTags("worlds")
@common.Controller("worlds")
export class WorldController extends WorldControllerBase {
  constructor(protected readonly service: WorldService) {
    super(service);
  }
}
