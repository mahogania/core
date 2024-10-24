import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RepresentationService } from "./representation.service";
import { RepresentationGrpcControllerBase } from "./base/representation.grpc.controller.base";

@swagger.ApiTags("representations")
@common.Controller("representations")
export class RepresentationGrpcController extends RepresentationGrpcControllerBase {
  constructor(protected readonly service: RepresentationService) {
    super(service);
  }
}
