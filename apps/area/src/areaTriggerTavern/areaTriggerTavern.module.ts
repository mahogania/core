import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AreaTriggerTavernModuleBase } from "./base/areaTriggerTavern.module.base";
import { AreaTriggerTavernService } from "./areaTriggerTavern.service";
import { AreaTriggerTavernController } from "./areaTriggerTavern.controller";
import { AreaTriggerTavernGrpcController } from "./areaTriggerTavern.grpc.controller";
import { AreaTriggerTavernResolver } from "./areaTriggerTavern.resolver";

@Module({
  imports: [AreaTriggerTavernModuleBase, forwardRef(() => AuthModule)],
  controllers: [AreaTriggerTavernController, AreaTriggerTavernGrpcController],
  providers: [AreaTriggerTavernService, AreaTriggerTavernResolver],
  exports: [AreaTriggerTavernService],
})
export class AreaTriggerTavernModule {}
