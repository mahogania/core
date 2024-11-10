import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AttributeService } from "./attribute.service";
import { AttributeGrpcControllerBase } from "./base/attribute.grpc.controller.base";

@swagger.ApiTags("attributes")
@common.Controller("attributes")
export class AttributeGrpcController extends AttributeGrpcControllerBase {
  constructor(protected readonly service: AttributeService) {
    super(service);
  }
}
