import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EventScriptNamesModuleBase } from "./base/eventScriptNames.module.base";
import { EventScriptNamesService } from "./eventScriptNames.service";
import { EventScriptNamesController } from "./eventScriptNames.controller";
import { EventScriptNamesGrpcController } from "./eventScriptNames.grpc.controller";
import { EventScriptNamesResolver } from "./eventScriptNames.resolver";

@Module({
  imports: [EventScriptNamesModuleBase, forwardRef(() => AuthModule)],
  controllers: [EventScriptNamesController, EventScriptNamesGrpcController],
  providers: [EventScriptNamesService, EventScriptNamesResolver],
  exports: [EventScriptNamesService],
})
export class EventScriptNamesModule {}
