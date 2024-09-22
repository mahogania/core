import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GameEventModuleBase } from "./base/gameEvent.module.base";
import { GameEventService } from "./gameEvent.service";
import { GameEventController } from "./gameEvent.controller";
import { GameEventGrpcController } from "./gameEvent.grpc.controller";
import { GameEventResolver } from "./gameEvent.resolver";

@Module({
  imports: [GameEventModuleBase, forwardRef(() => AuthModule)],
  controllers: [GameEventController, GameEventGrpcController],
  providers: [GameEventService, GameEventResolver],
  exports: [GameEventService],
})
export class GameEventModule {}
