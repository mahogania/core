import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EmailQueueService } from "./emailQueue.service";
import { EmailQueueControllerBase } from "./base/emailQueue.controller.base";

@swagger.ApiTags("emailQueues")
@common.Controller("emailQueues")
export class EmailQueueController extends EmailQueueControllerBase {
  constructor(protected readonly service: EmailQueueService) {
    super(service);
  }
}
