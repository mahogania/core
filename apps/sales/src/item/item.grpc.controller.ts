import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ItemService } from "./item.service";
import { ItemGrpcControllerBase } from "./base/item.grpc.controller.base";

@swagger.ApiTags("items")
@common.Controller("items")
export class ItemGrpcController extends ItemGrpcControllerBase {
  constructor(protected readonly service: ItemService) {
    super(service);
  }
}
