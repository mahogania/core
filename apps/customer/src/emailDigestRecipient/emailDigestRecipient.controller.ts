import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EmailDigestRecipientService } from "./emailDigestRecipient.service";
import { EmailDigestRecipientControllerBase } from "./base/emailDigestRecipient.controller.base";

@swagger.ApiTags("emailDigestRecipients")
@common.Controller("emailDigestRecipients")
export class EmailDigestRecipientController extends EmailDigestRecipientControllerBase {
  constructor(protected readonly service: EmailDigestRecipientService) {
    super(service);
  }
}
