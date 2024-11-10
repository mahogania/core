import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EmailDomainService } from "./emailDomain.service";
import { EmailDomainControllerBase } from "./base/emailDomain.controller.base";

@swagger.ApiTags("emailDomains")
@common.Controller("emailDomains")
export class EmailDomainController extends EmailDomainControllerBase {
  constructor(protected readonly service: EmailDomainService) {
    super(service);
  }
}
