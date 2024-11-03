import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EmailFlagQueueService } from "./emailFlagQueue.service";
import { EmailFlagQueueControllerBase } from "./base/emailFlagQueue.controller.base";

@swagger.ApiTags("emailFlagQueues")
@common.Controller("emailFlagQueues")
export class EmailFlagQueueController extends EmailFlagQueueControllerBase {
  constructor(protected readonly service: EmailFlagQueueService) {
    super(service);
  }
}
