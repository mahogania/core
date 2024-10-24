import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ContractService } from "./contract.service";
import { ContractGrpcControllerBase } from "./base/contract.grpc.controller.base";

@swagger.ApiTags("contracts")
@common.Controller("contracts")
export class ContractGrpcController extends ContractGrpcControllerBase {
  constructor(protected readonly service: ContractService) {
    super(service);
  }
}
