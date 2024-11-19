import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CreatureQuestCurrencyModuleBase } from "./base/creatureQuestCurrency.module.base";
import { CreatureQuestCurrencyService } from "./creatureQuestCurrency.service";
import { CreatureQuestCurrencyController } from "./creatureQuestCurrency.controller";
import { CreatureQuestCurrencyGrpcController } from "./creatureQuestCurrency.grpc.controller";
import { CreatureQuestCurrencyResolver } from "./creatureQuestCurrency.resolver";

@Module({
  imports: [CreatureQuestCurrencyModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    CreatureQuestCurrencyController,
    CreatureQuestCurrencyGrpcController,
  ],
  providers: [CreatureQuestCurrencyService, CreatureQuestCurrencyResolver],
  exports: [CreatureQuestCurrencyService],
})
export class CreatureQuestCurrencyModule {}
