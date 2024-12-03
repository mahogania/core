import { Module } from "@nestjs/common";
import { PosProfileUserModuleBase } from "./base/posProfileUser.module.base";
import { PosProfileUserService } from "./posProfileUser.service";
import { PosProfileUserController } from "./posProfileUser.controller";
import { PosProfileUserResolver } from "./posProfileUser.resolver";

@Module({
  imports: [PosProfileUserModuleBase],
  controllers: [PosProfileUserController],
  providers: [PosProfileUserService, PosProfileUserResolver],
  exports: [PosProfileUserService],
})
export class PosProfileUserModule {}
