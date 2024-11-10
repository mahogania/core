import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BomUpdateBatchService } from "./bomUpdateBatch.service";
import { BomUpdateBatchControllerBase } from "./base/bomUpdateBatch.controller.base";

@swagger.ApiTags("bomUpdateBatches")
@common.Controller("bomUpdateBatches")
export class BomUpdateBatchController extends BomUpdateBatchControllerBase {
  constructor(protected readonly service: BomUpdateBatchService) {
    super(service);
  }
}
