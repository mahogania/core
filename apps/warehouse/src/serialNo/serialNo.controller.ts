import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SerialNoService } from "./serialNo.service";
import { SerialNoControllerBase } from "./base/serialNo.controller.base";

@swagger.ApiTags("serialNos")
@common.Controller("serialNos")
export class SerialNoController extends SerialNoControllerBase {
  constructor(protected readonly service: SerialNoService) {
    super(service);
  }
}
