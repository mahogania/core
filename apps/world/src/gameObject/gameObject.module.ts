import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GameObjectModuleBase } from "./base/gameObject.module.base";
import { GameObjectService } from "./gameObject.service";
import { GameObjectController } from "./gameObject.controller";
import { GameObjectGrpcController } from "./gameObject.grpc.controller";
import { GameObjectResolver } from "./gameObject.resolver";

@Module({
  imports: [GameObjectModuleBase, forwardRef(() => AuthModule)],
  controllers: [GameObjectController, GameObjectGrpcController],
  providers: [GameObjectService, GameObjectResolver],
  exports: [GameObjectService],
})
export class GameObjectModule {}
