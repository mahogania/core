import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PageTextLocaleService } from "./pageTextLocale.service";
import { PageTextLocaleControllerBase } from "./base/pageTextLocale.controller.base";

@swagger.ApiTags("pageTextLocales")
@common.Controller("pageTextLocales")
export class PageTextLocaleController extends PageTextLocaleControllerBase {
  constructor(
    protected readonly service: PageTextLocaleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
