import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ResponseService } from "./response.service";
import { ResponseGrpcControllerBase } from "./base/response.grpc.controller.base";

@swagger.ApiTags("responses")
@common.Controller("responses")
export class ResponseGrpcController extends ResponseGrpcControllerBase {
  constructor(protected readonly service: ResponseService) {
    super(service);
  }
}
