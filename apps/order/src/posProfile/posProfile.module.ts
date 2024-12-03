import { Module } from "@nestjs/common";
import { PosProfileModuleBase } from "./base/posProfile.module.base";
import { PosProfileService } from "./posProfile.service";
import { PosProfileController } from "./posProfile.controller";
import { PosProfileResolver } from "./posProfile.resolver";

@Module({
  imports: [PosProfileModuleBase],
  controllers: [PosProfileController],
  providers: [PosProfileService, PosProfileResolver],
  exports: [PosProfileService],
})
export class PosProfileModule {}
