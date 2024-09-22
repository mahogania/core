import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GossipMenuOptionModuleBase } from "./base/gossipMenuOption.module.base";
import { GossipMenuOptionService } from "./gossipMenuOption.service";
import { GossipMenuOptionController } from "./gossipMenuOption.controller";
import { GossipMenuOptionGrpcController } from "./gossipMenuOption.grpc.controller";
import { GossipMenuOptionResolver } from "./gossipMenuOption.resolver";

@Module({
  imports: [GossipMenuOptionModuleBase, forwardRef(() => AuthModule)],
  controllers: [GossipMenuOptionController, GossipMenuOptionGrpcController],
  providers: [GossipMenuOptionService, GossipMenuOptionResolver],
  exports: [GossipMenuOptionService],
})
export class GossipMenuOptionModule {}
