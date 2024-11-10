import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TraitService } from "./trait.service";
import { TraitGrpcControllerBase } from "./base/trait.grpc.controller.base";

@swagger.ApiTags("traits")
@common.Controller("traits")
export class TraitGrpcController extends TraitGrpcControllerBase {
  constructor(protected readonly service: TraitService) {
    super(service);
  }
}
