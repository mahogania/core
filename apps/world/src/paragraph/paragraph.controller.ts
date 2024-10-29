import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ParagraphService } from "./paragraph.service";
import { ParagraphControllerBase } from "./base/paragraph.controller.base";

@swagger.ApiTags("paragraphs")
@common.Controller("paragraphs")
export class ParagraphController extends ParagraphControllerBase {
  constructor(
    protected readonly service: ParagraphService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
