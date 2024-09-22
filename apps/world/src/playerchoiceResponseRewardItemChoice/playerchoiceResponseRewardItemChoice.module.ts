import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PlayerchoiceResponseRewardItemChoiceModuleBase } from "./base/playerchoiceResponseRewardItemChoice.module.base";
import { PlayerchoiceResponseRewardItemChoiceService } from "./playerchoiceResponseRewardItemChoice.service";
import { PlayerchoiceResponseRewardItemChoiceController } from "./playerchoiceResponseRewardItemChoice.controller";
import { PlayerchoiceResponseRewardItemChoiceGrpcController } from "./playerchoiceResponseRewardItemChoice.grpc.controller";
import { PlayerchoiceResponseRewardItemChoiceResolver } from "./playerchoiceResponseRewardItemChoice.resolver";

@Module({
  imports: [
    PlayerchoiceResponseRewardItemChoiceModuleBase,
    forwardRef(() => AuthModule),
  ],
  controllers: [
    PlayerchoiceResponseRewardItemChoiceController,
    PlayerchoiceResponseRewardItemChoiceGrpcController,
  ],
  providers: [
    PlayerchoiceResponseRewardItemChoiceService,
    PlayerchoiceResponseRewardItemChoiceResolver,
  ],
  exports: [PlayerchoiceResponseRewardItemChoiceService],
})
export class PlayerchoiceResponseRewardItemChoiceModule {}
