import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ViewService } from "./view.service";
import { ViewGrpcControllerBase } from "./base/view.grpc.controller.base";

@swagger.ApiTags("views")
@common.Controller("views")
export class ViewGrpcController extends ViewGrpcControllerBase {
  constructor(protected readonly service: ViewService) {
    super(service);
  }
}
