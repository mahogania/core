import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { BattlefieldTemplateModuleBase } from "./base/battlefieldTemplate.module.base";
import { BattlefieldTemplateService } from "./battlefieldTemplate.service";
import { BattlefieldTemplateController } from "./battlefieldTemplate.controller";
import { BattlefieldTemplateGrpcController } from "./battlefieldTemplate.grpc.controller";
import { BattlefieldTemplateResolver } from "./battlefieldTemplate.resolver";

@Module({
  imports: [BattlefieldTemplateModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    BattlefieldTemplateController,
    BattlefieldTemplateGrpcController,
  ],
  providers: [BattlefieldTemplateService, BattlefieldTemplateResolver],
  exports: [BattlefieldTemplateService],
})
export class BattlefieldTemplateModule {}
