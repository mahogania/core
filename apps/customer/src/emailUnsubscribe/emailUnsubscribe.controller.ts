import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EmailUnsubscribeService } from "./emailUnsubscribe.service";
import { EmailUnsubscribeControllerBase } from "./base/emailUnsubscribe.controller.base";

@swagger.ApiTags("emailUnsubscribes")
@common.Controller("emailUnsubscribes")
export class EmailUnsubscribeController extends EmailUnsubscribeControllerBase {
  constructor(protected readonly service: EmailUnsubscribeService) {
    super(service);
  }
}
