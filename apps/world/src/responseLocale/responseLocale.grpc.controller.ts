import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ResponseLocaleService } from "./responseLocale.service";
import { ResponseLocaleGrpcControllerBase } from "./base/responseLocale.grpc.controller.base";

@swagger.ApiTags("responseLocales")
@common.Controller("responseLocales")
export class ResponseLocaleGrpcController extends ResponseLocaleGrpcControllerBase {
  constructor(protected readonly service: ResponseLocaleService) {
    super(service);
  }
}
