import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PetLevelstatsService } from "./petLevelstats.service";
import { PetLevelstatsGrpcControllerBase } from "./base/petLevelstats.grpc.controller.base";

@swagger.ApiTags("petLevelstats")
@common.Controller("petLevelstats")
export class PetLevelstatsGrpcController extends PetLevelstatsGrpcControllerBase {
  constructor(protected readonly service: PetLevelstatsService) {
    super(service);
  }
}
