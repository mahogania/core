import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TbClreDedVlutComnService } from "./tbClreDedVlutComn.service";
import { TbClreDedVlutComnGrpcControllerBase } from "./base/tbClreDedVlutComn.grpc.controller.base";

@swagger.ApiTags("tbClreDedVlutComns")
@common.Controller("tbClreDedVlutComns")
export class TbClreDedVlutComnGrpcController extends TbClreDedVlutComnGrpcControllerBase {
  constructor(protected readonly service: TbClreDedVlutComnService) {
    super(service);
  }
}
