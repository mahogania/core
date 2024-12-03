import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PosFieldService } from "./posField.service";
import { PosFieldControllerBase } from "./base/posField.controller.base";

@swagger.ApiTags("posFields")
@common.Controller("posFields")
export class PosFieldController extends PosFieldControllerBase {
  constructor(protected readonly service: PosFieldService) {
    super(service);
  }
}
