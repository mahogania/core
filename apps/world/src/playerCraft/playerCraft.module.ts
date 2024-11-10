import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PlayerCraftModuleBase } from "./base/playerCraft.module.base";
import { PlayerCraftService } from "./playerCraft.service";
import { PlayerCraftController } from "./playerCraft.controller";
import { PlayerCraftGrpcController } from "./playerCraft.grpc.controller";
import { PlayerCraftResolver } from "./playerCraft.resolver";

@Module({
  imports: [PlayerCraftModuleBase, forwardRef(() => AuthModule)],
  controllers: [PlayerCraftController, PlayerCraftGrpcController],
  providers: [PlayerCraftService, PlayerCraftResolver],
  exports: [PlayerCraftService],
})
export class PlayerCraftModule {}
