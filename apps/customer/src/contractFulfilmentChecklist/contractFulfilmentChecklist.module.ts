import { Module } from "@nestjs/common";
import { ContractFulfilmentChecklistModuleBase } from "./base/contractFulfilmentChecklist.module.base";
import { ContractFulfilmentChecklistService } from "./contractFulfilmentChecklist.service";
import { ContractFulfilmentChecklistController } from "./contractFulfilmentChecklist.controller";
import { ContractFulfilmentChecklistResolver } from "./contractFulfilmentChecklist.resolver";

@Module({
  imports: [ContractFulfilmentChecklistModuleBase],
  controllers: [ContractFulfilmentChecklistController],
  providers: [
    ContractFulfilmentChecklistService,
    ContractFulfilmentChecklistResolver,
  ],
  exports: [ContractFulfilmentChecklistService],
})
export class ContractFulfilmentChecklistModule {}
