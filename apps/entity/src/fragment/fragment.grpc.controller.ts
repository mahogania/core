import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FragmentService } from "./fragment.service";
import { FragmentGrpcControllerBase } from "./base/fragment.grpc.controller.base";

@swagger.ApiTags("fragments")
@common.Controller("fragments")
export class FragmentGrpcController extends FragmentGrpcControllerBase {
  constructor(protected readonly service: FragmentService) {
    super(service);
  }
}
