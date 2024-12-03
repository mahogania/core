import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TbClreDedTaxService } from "./tbClreDedTax.service";
import { TbClreDedTaxGrpcControllerBase } from "./base/tbClreDedTax.grpc.controller.base";

@swagger.ApiTags("tbClreDedTaxes")
@common.Controller("tbClreDedTaxes")
export class TbClreDedTaxGrpcController extends TbClreDedTaxGrpcControllerBase {
  constructor(protected readonly service: TbClreDedTaxService) {
    super(service);
  }
}
