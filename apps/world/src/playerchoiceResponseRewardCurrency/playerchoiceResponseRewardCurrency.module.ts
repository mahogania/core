import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PlayerchoiceResponseRewardCurrencyModuleBase } from "./base/playerchoiceResponseRewardCurrency.module.base";
import { PlayerchoiceResponseRewardCurrencyService } from "./playerchoiceResponseRewardCurrency.service";
import { PlayerchoiceResponseRewardCurrencyController } from "./playerchoiceResponseRewardCurrency.controller";
import { PlayerchoiceResponseRewardCurrencyGrpcController } from "./playerchoiceResponseRewardCurrency.grpc.controller";
import { PlayerchoiceResponseRewardCurrencyResolver } from "./playerchoiceResponseRewardCurrency.resolver";

@Module({
  imports: [
    PlayerchoiceResponseRewardCurrencyModuleBase,
    forwardRef(() => AuthModule),
  ],
  controllers: [
    PlayerchoiceResponseRewardCurrencyController,
    PlayerchoiceResponseRewardCurrencyGrpcController,
  ],
  providers: [
    PlayerchoiceResponseRewardCurrencyService,
    PlayerchoiceResponseRewardCurrencyResolver,
  ],
  exports: [PlayerchoiceResponseRewardCurrencyService],
})
export class PlayerchoiceResponseRewardCurrencyModule {}
