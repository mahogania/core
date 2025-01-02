import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ClreDedTaxService } from "./clreDedTax.service";
import { ClreDedTaxGrpcControllerBase } from "./base/clreDedTax.grpc.controller.base";

@swagger.ApiTags("clreDedTaxes")
@common.Controller("clreDedTaxes")
export class ClreDedTaxGrpcController extends ClreDedTaxGrpcControllerBase {
  constructor(protected readonly service: ClreDedTaxService) {
    super(service);
  }
}
