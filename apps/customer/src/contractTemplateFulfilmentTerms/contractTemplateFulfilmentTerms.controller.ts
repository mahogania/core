import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ContractTemplateFulfilmentTermsService } from "./contractTemplateFulfilmentTerms.service";
import { ContractTemplateFulfilmentTermsControllerBase } from "./base/contractTemplateFulfilmentTerms.controller.base";

@swagger.ApiTags("contractTemplateFulfilmentTerms")
@common.Controller("contractTemplateFulfilmentTerms")
export class ContractTemplateFulfilmentTermsController extends ContractTemplateFulfilmentTermsControllerBase {
  constructor(
    protected readonly service: ContractTemplateFulfilmentTermsService
  ) {
    super(service);
  }
}
