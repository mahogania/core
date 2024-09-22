import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { QuestGreetingLocaleModuleBase } from "./base/questGreetingLocale.module.base";
import { QuestGreetingLocaleService } from "./questGreetingLocale.service";
import { QuestGreetingLocaleController } from "./questGreetingLocale.controller";
import { QuestGreetingLocaleGrpcController } from "./questGreetingLocale.grpc.controller";
import { QuestGreetingLocaleResolver } from "./questGreetingLocale.resolver";

@Module({
  imports: [QuestGreetingLocaleModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    QuestGreetingLocaleController,
    QuestGreetingLocaleGrpcController,
  ],
  providers: [QuestGreetingLocaleService, QuestGreetingLocaleResolver],
  exports: [QuestGreetingLocaleService],
})
export class QuestGreetingLocaleModule {}
