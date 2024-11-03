import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EmailDigestService } from "./emailDigest.service";
import { EmailDigestControllerBase } from "./base/emailDigest.controller.base";

@swagger.ApiTags("emailDigests")
@common.Controller("emailDigests")
export class EmailDigestController extends EmailDigestControllerBase {
  constructor(protected readonly service: EmailDigestService) {
    super(service);
  }
}
