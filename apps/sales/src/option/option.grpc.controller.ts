import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { OptionService } from "./option.service";
import { OptionGrpcControllerBase } from "./base/option.grpc.controller.base";

@swagger.ApiTags("options")
@common.Controller("options")
export class OptionGrpcController extends OptionGrpcControllerBase {
  constructor(protected readonly service: OptionService) {
    super(service);
  }
}
