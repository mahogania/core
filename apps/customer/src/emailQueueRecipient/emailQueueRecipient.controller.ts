import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EmailQueueRecipientService } from "./emailQueueRecipient.service";
import { EmailQueueRecipientControllerBase } from "./base/emailQueueRecipient.controller.base";

@swagger.ApiTags("emailQueueRecipients")
@common.Controller("emailQueueRecipients")
export class EmailQueueRecipientController extends EmailQueueRecipientControllerBase {
  constructor(protected readonly service: EmailQueueRecipientService) {
    super(service);
  }
}
