import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ExplorationBasexpService } from "./explorationBasexp.service";
import { ExplorationBasexpGrpcControllerBase } from "./base/explorationBasexp.grpc.controller.base";

@swagger.ApiTags("explorationBasexps")
@common.Controller("explorationBasexps")
export class ExplorationBasexpGrpcController extends ExplorationBasexpGrpcControllerBase {
  constructor(protected readonly service: ExplorationBasexpService) {
    super(service);
  }
}
