import * as graphql from "@nestjs/graphql";
import { ContractFulfilmentChecklistResolverBase } from "./base/contractFulfilmentChecklist.resolver.base";
import { ContractFulfilmentChecklist } from "./base/ContractFulfilmentChecklist";
import { ContractFulfilmentChecklistService } from "./contractFulfilmentChecklist.service";

@graphql.Resolver(() => ContractFulfilmentChecklist)
export class ContractFulfilmentChecklistResolver extends ContractFulfilmentChecklistResolverBase {
  constructor(protected readonly service: ContractFulfilmentChecklistService) {
    super(service);
  }
}
