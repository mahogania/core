import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ContactEmailService } from "./contactEmail.service";
import { ContactEmailControllerBase } from "./base/contactEmail.controller.base";

@swagger.ApiTags("contactEmails")
@common.Controller("contactEmails")
export class ContactEmailController extends ContactEmailControllerBase {
  constructor(protected readonly service: ContactEmailService) {
    super(service);
  }
}
