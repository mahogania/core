import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { QuestGreetingService } from "./questGreeting.service";
import { QuestGreetingGrpcControllerBase } from "./base/questGreeting.grpc.controller.base";

@swagger.ApiTags("questGreetings")
@common.Controller("questGreetings")
export class QuestGreetingGrpcController extends QuestGreetingGrpcControllerBase {
  constructor(protected readonly service: QuestGreetingService) {
    super(service);
  }
}
