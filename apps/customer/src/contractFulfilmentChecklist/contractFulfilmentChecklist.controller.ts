import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ContractFulfilmentChecklistService } from "./contractFulfilmentChecklist.service";
import { ContractFulfilmentChecklistControllerBase } from "./base/contractFulfilmentChecklist.controller.base";

@swagger.ApiTags("contractFulfilmentChecklists")
@common.Controller("contractFulfilmentChecklists")
export class ContractFulfilmentChecklistController extends ContractFulfilmentChecklistControllerBase {
  constructor(protected readonly service: ContractFulfilmentChecklistService) {
    super(service);
  }
}
