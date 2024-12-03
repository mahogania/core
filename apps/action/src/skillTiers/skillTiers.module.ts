import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SkillTiersModuleBase } from "./base/skillTiers.module.base";
import { SkillTiersService } from "./skillTiers.service";
import { SkillTiersController } from "./skillTiers.controller";
import { SkillTiersGrpcController } from "./skillTiers.grpc.controller";
import { SkillTiersResolver } from "./skillTiers.resolver";

@Module({
  imports: [SkillTiersModuleBase, forwardRef(() => AuthModule)],
  controllers: [SkillTiersController, SkillTiersGrpcController],
  providers: [SkillTiersService, SkillTiersResolver],
  exports: [SkillTiersService],
})
export class SkillTiersModule {}
