import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { QuestRequestItemsLocaleService } from "./questRequestItemsLocale.service";
import { QuestRequestItemsLocaleControllerBase } from "./base/questRequestItemsLocale.controller.base";

@swagger.ApiTags("questRequestItemsLocales")
@common.Controller("questRequestItemsLocales")
export class QuestRequestItemsLocaleController extends QuestRequestItemsLocaleControllerBase {
  constructor(
    protected readonly service: QuestRequestItemsLocaleService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
