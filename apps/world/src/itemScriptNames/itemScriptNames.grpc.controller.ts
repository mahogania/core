import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ItemScriptNamesService } from "./itemScriptNames.service";
import { ItemScriptNamesGrpcControllerBase } from "./base/itemScriptNames.grpc.controller.base";

@swagger.ApiTags("itemScriptNames")
@common.Controller("itemScriptNames")
export class ItemScriptNamesGrpcController extends ItemScriptNamesGrpcControllerBase {
  constructor(protected readonly service: ItemScriptNamesService) {
    super(service);
  }
}
