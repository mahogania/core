import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ItemBehaviourModuleBase } from "./base/itemBehaviour.module.base";
import { ItemBehaviourService } from "./itemBehaviour.service";
import { ItemBehaviourController } from "./itemBehaviour.controller";
import { ItemBehaviourGrpcController } from "./itemBehaviour.grpc.controller";
import { ItemBehaviourResolver } from "./itemBehaviour.resolver";

@Module({
  imports: [ItemBehaviourModuleBase, forwardRef(() => AuthModule)],
  controllers: [ItemBehaviourController, ItemBehaviourGrpcController],
  providers: [ItemBehaviourService, ItemBehaviourResolver],
  exports: [ItemBehaviourService],
})
export class ItemBehaviourModule {}
