import * as graphql from "@nestjs/graphql";
import { ContractTemplateFulfilmentTermsResolverBase } from "./base/contractTemplateFulfilmentTerms.resolver.base";
import { ContractTemplateFulfilmentTerms } from "./base/ContractTemplateFulfilmentTerms";
import { ContractTemplateFulfilmentTermsService } from "./contractTemplateFulfilmentTerms.service";

@graphql.Resolver(() => ContractTemplateFulfilmentTerms)
export class ContractTemplateFulfilmentTermsResolver extends ContractTemplateFulfilmentTermsResolverBase {
  constructor(
    protected readonly service: ContractTemplateFulfilmentTermsService
  ) {
    super(service);
  }
}
