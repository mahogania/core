import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ContactPhoneService } from "./contactPhone.service";
import { ContactPhoneControllerBase } from "./base/contactPhone.controller.base";

@swagger.ApiTags("contactPhones")
@common.Controller("contactPhones")
export class ContactPhoneController extends ContactPhoneControllerBase {
  constructor(protected readonly service: ContactPhoneService) {
    super(service);
  }
}
