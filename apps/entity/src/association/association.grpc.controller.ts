import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AssociationService } from "./association.service";
import { AssociationGrpcControllerBase } from "./base/association.grpc.controller.base";

@swagger.ApiTags("associations")
@common.Controller("associations")
export class AssociationGrpcController extends AssociationGrpcControllerBase {
  constructor(protected readonly service: AssociationService) {
    super(service);
  }
}
