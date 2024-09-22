import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AreaTriggerInvolvedRelationService } from "./areaTriggerInvolvedRelation.service";
import { AreaTriggerInvolvedRelationGrpcControllerBase } from "./base/areaTriggerInvolvedRelation.grpc.controller.base";

@swagger.ApiTags("areaTriggerInvolvedRelations")
@common.Controller("areaTriggerInvolvedRelations")
export class AreaTriggerInvolvedRelationGrpcController extends AreaTriggerInvolvedRelationGrpcControllerBase {
  constructor(protected readonly service: AreaTriggerInvolvedRelationService) {
    super(service);
  }
}
