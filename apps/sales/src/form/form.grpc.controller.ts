import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FormService } from "./form.service";
import { FormGrpcControllerBase } from "./base/form.grpc.controller.base";

@swagger.ApiTags("forms")
@common.Controller("forms")
export class FormGrpcController extends FormGrpcControllerBase {
  constructor(protected readonly service: FormService) {
    super(service);
  }
}
