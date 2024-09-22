import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PlayerchoiceLocaleModuleBase } from "./base/playerchoiceLocale.module.base";
import { PlayerchoiceLocaleService } from "./playerchoiceLocale.service";
import { PlayerchoiceLocaleController } from "./playerchoiceLocale.controller";
import { PlayerchoiceLocaleGrpcController } from "./playerchoiceLocale.grpc.controller";
import { PlayerchoiceLocaleResolver } from "./playerchoiceLocale.resolver";

@Module({
  imports: [PlayerchoiceLocaleModuleBase, forwardRef(() => AuthModule)],
  controllers: [PlayerchoiceLocaleController, PlayerchoiceLocaleGrpcController],
  providers: [PlayerchoiceLocaleService, PlayerchoiceLocaleResolver],
  exports: [PlayerchoiceLocaleService],
})
export class PlayerchoiceLocaleModule {}
