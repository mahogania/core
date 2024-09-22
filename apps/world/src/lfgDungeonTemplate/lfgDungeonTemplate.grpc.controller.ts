import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LfgDungeonTemplateService } from "./lfgDungeonTemplate.service";
import { LfgDungeonTemplateGrpcControllerBase } from "./base/lfgDungeonTemplate.grpc.controller.base";

@swagger.ApiTags("lfgDungeonTemplates")
@common.Controller("lfgDungeonTemplates")
export class LfgDungeonTemplateGrpcController extends LfgDungeonTemplateGrpcControllerBase {
  constructor(protected readonly service: LfgDungeonTemplateService) {
    super(service);
  }
}
