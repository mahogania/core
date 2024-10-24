import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CurrencyService } from "./currency.service";
import { CurrencyGrpcControllerBase } from "./base/currency.grpc.controller.base";

@swagger.ApiTags("currencies")
@common.Controller("currencies")
export class CurrencyGrpcController extends CurrencyGrpcControllerBase {
  constructor(protected readonly service: CurrencyService) {
    super(service);
  }
}
