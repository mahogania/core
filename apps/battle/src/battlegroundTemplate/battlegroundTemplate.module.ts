import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BattlegroundTemplateModuleBase } from "./base/battlegroundTemplate.module.base";
import { BattlegroundTemplateService } from "./battlegroundTemplate.service";
import { BattlegroundTemplateController } from "./battlegroundTemplate.controller";
import { BattlegroundTemplateGrpcController } from "./battlegroundTemplate.grpc.controller";
import { BattlegroundTemplateResolver } from "./battlegroundTemplate.resolver";

@Module({
  imports: [BattlegroundTemplateModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    BattlegroundTemplateController,
    BattlegroundTemplateGrpcController,
  ],
  providers: [BattlegroundTemplateService, BattlegroundTemplateResolver],
  exports: [BattlegroundTemplateService],
})
export class BattlegroundTemplateModule {}
