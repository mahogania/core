import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PlayerchoiceResponseMawPowerModuleBase } from "./base/playerchoiceResponseMawPower.module.base";
import { PlayerchoiceResponseMawPowerService } from "./playerchoiceResponseMawPower.service";
import { PlayerchoiceResponseMawPowerController } from "./playerchoiceResponseMawPower.controller";
import { PlayerchoiceResponseMawPowerGrpcController } from "./playerchoiceResponseMawPower.grpc.controller";
import { PlayerchoiceResponseMawPowerResolver } from "./playerchoiceResponseMawPower.resolver";

@Module({
  imports: [
    PlayerchoiceResponseMawPowerModuleBase,
    forwardRef(() => AuthModule),
  ],
  controllers: [
    PlayerchoiceResponseMawPowerController,
    PlayerchoiceResponseMawPowerGrpcController,
  ],
  providers: [
    PlayerchoiceResponseMawPowerService,
    PlayerchoiceResponseMawPowerResolver,
  ],
  exports: [PlayerchoiceResponseMawPowerService],
})
export class PlayerchoiceResponseMawPowerModule {}
