import { Module } from "@nestjs/common";
import { PosFieldModuleBase } from "./base/posField.module.base";
import { PosFieldService } from "./posField.service";
import { PosFieldController } from "./posField.controller";
import { PosFieldResolver } from "./posField.resolver";

@Module({
  imports: [PosFieldModuleBase],
  controllers: [PosFieldController],
  providers: [PosFieldService, PosFieldResolver],
  exports: [PosFieldService],
})
export class PosFieldModule {}
