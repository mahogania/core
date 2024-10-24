import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UnitService } from "./unit.service";
import { UnitGrpcControllerBase } from "./base/unit.grpc.controller.base";

@swagger.ApiTags("units")
@common.Controller("units")
export class UnitGrpcController extends UnitGrpcControllerBase {
  constructor(protected readonly service: UnitService) {
    super(service);
  }
}
