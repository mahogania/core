import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PlayerchoiceModuleBase } from "./base/playerchoice.module.base";
import { PlayerchoiceService } from "./playerchoice.service";
import { PlayerchoiceController } from "./playerchoice.controller";
import { PlayerchoiceGrpcController } from "./playerchoice.grpc.controller";
import { PlayerchoiceResolver } from "./playerchoice.resolver";

@Module({
  imports: [PlayerchoiceModuleBase, forwardRef(() => AuthModule)],
  controllers: [PlayerchoiceController, PlayerchoiceGrpcController],
  providers: [PlayerchoiceService, PlayerchoiceResolver],
  exports: [PlayerchoiceService],
})
export class PlayerchoiceModule {}
