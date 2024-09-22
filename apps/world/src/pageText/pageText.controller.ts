import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { PageTextService } from "./pageText.service";
import { PageTextControllerBase } from "./base/pageText.controller.base";

@swagger.ApiTags("pageTexts")
@common.Controller("pageTexts")
export class PageTextController extends PageTextControllerBase {
  constructor(
    protected readonly service: PageTextService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
