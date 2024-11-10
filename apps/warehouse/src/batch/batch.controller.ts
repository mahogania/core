import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BatchService } from "./batch.service";
import { BatchControllerBase } from "./base/batch.controller.base";

@swagger.ApiTags("batches")
@common.Controller("batches")
export class BatchController extends BatchControllerBase {
  constructor(protected readonly service: BatchService) {
    super(service);
  }
}
