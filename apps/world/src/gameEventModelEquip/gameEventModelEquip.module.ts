import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GameEventModelEquipModuleBase } from "./base/gameEventModelEquip.module.base";
import { GameEventModelEquipService } from "./gameEventModelEquip.service";
import { GameEventModelEquipController } from "./gameEventModelEquip.controller";
import { GameEventModelEquipGrpcController } from "./gameEventModelEquip.grpc.controller";
import { GameEventModelEquipResolver } from "./gameEventModelEquip.resolver";

@Module({
  imports: [GameEventModelEquipModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    GameEventModelEquipController,
    GameEventModelEquipGrpcController,
  ],
  providers: [GameEventModelEquipService, GameEventModelEquipResolver],
  exports: [GameEventModelEquipService],
})
export class GameEventModelEquipModule {}
