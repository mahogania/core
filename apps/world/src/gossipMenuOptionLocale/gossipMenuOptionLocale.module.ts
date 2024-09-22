import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GossipMenuOptionLocaleModuleBase } from "./base/gossipMenuOptionLocale.module.base";
import { GossipMenuOptionLocaleService } from "./gossipMenuOptionLocale.service";
import { GossipMenuOptionLocaleController } from "./gossipMenuOptionLocale.controller";
import { GossipMenuOptionLocaleGrpcController } from "./gossipMenuOptionLocale.grpc.controller";
import { GossipMenuOptionLocaleResolver } from "./gossipMenuOptionLocale.resolver";

@Module({
  imports: [GossipMenuOptionLocaleModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    GossipMenuOptionLocaleController,
    GossipMenuOptionLocaleGrpcController,
  ],
  providers: [GossipMenuOptionLocaleService, GossipMenuOptionLocaleResolver],
  exports: [GossipMenuOptionLocaleService],
})
export class GossipMenuOptionLocaleModule {}
