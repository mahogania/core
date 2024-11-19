import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { RelationService } from "./relation.service";
import { RelationGrpcControllerBase } from "./base/relation.grpc.controller.base";

@swagger.ApiTags("relations")
@common.Controller("relations")
export class RelationGrpcController extends RelationGrpcControllerBase {
  constructor(protected readonly service: RelationService) {
    super(service);
  }
}
