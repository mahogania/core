import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CreatureSummonedDataService } from "./creatureSummonedData.service";
import { CreatureSummonedDataGrpcControllerBase } from "./base/creatureSummonedData.grpc.controller.base";

@swagger.ApiTags("creatureSummonedData")
@common.Controller("creatureSummonedData")
export class CreatureSummonedDataGrpcController extends CreatureSummonedDataGrpcControllerBase {
  constructor(protected readonly service: CreatureSummonedDataService) {
    super(service);
  }
}
