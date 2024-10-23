import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EntityService } from "./entity.service";
import { EntityGrpcControllerBase } from "./base/entity.grpc.controller.base";

@swagger.ApiTags("entities")
@common.Controller("entities")
export class EntityGrpcController extends EntityGrpcControllerBase {
  constructor(protected readonly service: EntityService) {
    super(service);
  }
}
