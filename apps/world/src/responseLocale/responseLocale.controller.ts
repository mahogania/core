import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ResponseLocaleService } from "./responseLocale.service";
import { ResponseLocaleControllerBase } from "./base/responseLocale.controller.base";

@swagger.ApiTags("responseLocales")
@common.Controller("responseLocales")
export class ResponseLocaleController extends ResponseLocaleControllerBase {
  constructor(
    protected readonly service: ResponseLocaleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
