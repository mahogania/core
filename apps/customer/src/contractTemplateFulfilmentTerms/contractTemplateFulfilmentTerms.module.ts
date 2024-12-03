import { Module } from "@nestjs/common";
import { ContractTemplateFulfilmentTermsModuleBase } from "./base/contractTemplateFulfilmentTerms.module.base";
import { ContractTemplateFulfilmentTermsService } from "./contractTemplateFulfilmentTerms.service";
import { ContractTemplateFulfilmentTermsController } from "./contractTemplateFulfilmentTerms.controller";
import { ContractTemplateFulfilmentTermsResolver } from "./contractTemplateFulfilmentTerms.resolver";

@Module({
  imports: [ContractTemplateFulfilmentTermsModuleBase],
  controllers: [ContractTemplateFulfilmentTermsController],
  providers: [
    ContractTemplateFulfilmentTermsService,
    ContractTemplateFulfilmentTermsResolver,
  ],
  exports: [ContractTemplateFulfilmentTermsService],
})
export class ContractTemplateFulfilmentTermsModule {}
