import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ConfigurationService } from "./configuration.service";
import { ConfigurationGrpcControllerBase } from "./base/configuration.grpc.controller.base";

@swagger.ApiTags("configurations")
@common.Controller("configurations")
export class ConfigurationGrpcController extends ConfigurationGrpcControllerBase {
  constructor(protected readonly service: ConfigurationService) {
    super(service);
  }
}
