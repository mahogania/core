import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SalesPartnerService } from "./salesPartner.service";
import { SalesPartnerControllerBase } from "./base/salesPartner.controller.base";

@swagger.ApiTags("salesPartners")
@common.Controller("salesPartners")
export class SalesPartnerController extends SalesPartnerControllerBase {
  constructor(protected readonly service: SalesPartnerService) {
    super(service);
  }
}
