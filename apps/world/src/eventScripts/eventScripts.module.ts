import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { EventScriptsModuleBase } from "./base/eventScripts.module.base";
import { EventScriptsService } from "./eventScripts.service";
import { EventScriptsController } from "./eventScripts.controller";
import { EventScriptsGrpcController } from "./eventScripts.grpc.controller";
import { EventScriptsResolver } from "./eventScripts.resolver";

@Module({
  imports: [EventScriptsModuleBase, forwardRef(() => AuthModule)],
  controllers: [EventScriptsController, EventScriptsGrpcController],
  providers: [EventScriptsService, EventScriptsResolver],
  exports: [EventScriptsService],
})
export class EventScriptsModule {}
