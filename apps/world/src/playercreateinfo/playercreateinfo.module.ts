import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PlayercreateinfoModuleBase } from "./base/playercreateinfo.module.base";
import { PlayercreateinfoService } from "./playercreateinfo.service";
import { PlayercreateinfoController } from "./playercreateinfo.controller";
import { PlayercreateinfoGrpcController } from "./playercreateinfo.grpc.controller";
import { PlayercreateinfoResolver } from "./playercreateinfo.resolver";

@Module({
  imports: [PlayercreateinfoModuleBase, forwardRef(() => AuthModule)],
  controllers: [PlayercreateinfoController, PlayercreateinfoGrpcController],
  providers: [PlayercreateinfoService, PlayercreateinfoResolver],
  exports: [PlayercreateinfoService],
})
export class PlayercreateinfoModule {}
