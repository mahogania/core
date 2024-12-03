import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ChoiceService } from "./choice.service";
import { ChoiceGrpcControllerBase } from "./base/choice.grpc.controller.base";

@swagger.ApiTags("choices")
@common.Controller("choices")
export class ChoiceGrpcController extends ChoiceGrpcControllerBase {
  constructor(protected readonly service: ChoiceService) {
    super(service);
  }
}
