import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FragmentService } from "./fragment.service";
import { FragmentControllerBase } from "./base/fragment.controller.base";

@swagger.ApiTags("fragments")
@common.Controller("fragments")
export class FragmentController extends FragmentControllerBase {
  constructor(protected readonly service: FragmentService) {
    super(service);
  }
}
