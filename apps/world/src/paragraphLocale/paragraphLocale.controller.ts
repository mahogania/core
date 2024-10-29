import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ParagraphLocaleService } from "./paragraphLocale.service";
import { ParagraphLocaleControllerBase } from "./base/paragraphLocale.controller.base";

@swagger.ApiTags("paragraphLocales")
@common.Controller("paragraphLocales")
export class ParagraphLocaleController extends ParagraphLocaleControllerBase {
  constructor(
    protected readonly service: ParagraphLocaleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
