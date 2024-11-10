import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ItemBehaviourService } from "./itemBehaviour.service";
import { ItemBehaviourGrpcControllerBase } from "./base/itemBehaviour.grpc.controller.base";

@swagger.ApiTags("itemBehaviours")
@common.Controller("itemBehaviours")
export class ItemBehaviourGrpcController extends ItemBehaviourGrpcControllerBase {
  constructor(protected readonly service: ItemBehaviourService) {
    super(service);
  }
}
