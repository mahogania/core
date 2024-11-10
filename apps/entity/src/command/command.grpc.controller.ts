import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CommandService } from "./command.service";
import { CommandGrpcControllerBase } from "./base/command.grpc.controller.base";

@swagger.ApiTags("commands")
@common.Controller("commands")
export class CommandGrpcController extends CommandGrpcControllerBase {
  constructor(protected readonly service: CommandService) {
    super(service);
  }
}
