import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PlayerchoiceResponseLocaleModuleBase } from "./base/playerchoiceResponseLocale.module.base";
import { PlayerchoiceResponseLocaleService } from "./playerchoiceResponseLocale.service";
import { PlayerchoiceResponseLocaleController } from "./playerchoiceResponseLocale.controller";
import { PlayerchoiceResponseLocaleGrpcController } from "./playerchoiceResponseLocale.grpc.controller";
import { PlayerchoiceResponseLocaleResolver } from "./playerchoiceResponseLocale.resolver";

@Module({
  imports: [PlayerchoiceResponseLocaleModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    PlayerchoiceResponseLocaleController,
    PlayerchoiceResponseLocaleGrpcController,
  ],
  providers: [
    PlayerchoiceResponseLocaleService,
    PlayerchoiceResponseLocaleResolver,
  ],
  exports: [PlayerchoiceResponseLocaleService],
})
export class PlayerchoiceResponseLocaleModule {}
