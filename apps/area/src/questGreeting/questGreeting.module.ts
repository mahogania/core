import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { QuestGreetingModuleBase } from "./base/questGreeting.module.base";
import { QuestGreetingService } from "./questGreeting.service";
import { QuestGreetingController } from "./questGreeting.controller";
import { QuestGreetingGrpcController } from "./questGreeting.grpc.controller";
import { QuestGreetingResolver } from "./questGreeting.resolver";

@Module({
  imports: [QuestGreetingModuleBase, forwardRef(() => AuthModule)],
  controllers: [QuestGreetingController, QuestGreetingGrpcController],
  providers: [QuestGreetingService, QuestGreetingResolver],
  exports: [QuestGreetingService],
})
export class QuestGreetingModule {}
