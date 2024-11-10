import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BinService } from "./bin.service";
import { BinControllerBase } from "./base/bin.controller.base";

@swagger.ApiTags("bins")
@common.Controller("bins")
export class BinController extends BinControllerBase {
  constructor(protected readonly service: BinService) {
    super(service);
  }
}
