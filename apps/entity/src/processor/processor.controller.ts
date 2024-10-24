import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ProcessorService } from "./processor.service";
import { ProcessorControllerBase } from "./base/processor.controller.base";

@swagger.ApiTags("processors")
@common.Controller("processors")
export class ProcessorController extends ProcessorControllerBase {
  constructor(protected readonly service: ProcessorService) {
    super(service);
  }
}
