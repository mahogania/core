import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PlayerchoiceResponseModuleBase } from "./base/playerchoiceResponse.module.base";
import { PlayerchoiceResponseService } from "./playerchoiceResponse.service";
import { PlayerchoiceResponseController } from "./playerchoiceResponse.controller";
import { PlayerchoiceResponseGrpcController } from "./playerchoiceResponse.grpc.controller";
import { PlayerchoiceResponseResolver } from "./playerchoiceResponse.resolver";

@Module({
  imports: [PlayerchoiceResponseModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    PlayerchoiceResponseController,
    PlayerchoiceResponseGrpcController,
  ],
  providers: [PlayerchoiceResponseService, PlayerchoiceResponseResolver],
  exports: [PlayerchoiceResponseService],
})
export class PlayerchoiceResponseModule {}
