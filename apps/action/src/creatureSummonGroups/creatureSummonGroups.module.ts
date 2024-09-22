import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CreatureSummonGroupsModuleBase } from "./base/creatureSummonGroups.module.base";
import { CreatureSummonGroupsService } from "./creatureSummonGroups.service";
import { CreatureSummonGroupsController } from "./creatureSummonGroups.controller";
import { CreatureSummonGroupsGrpcController } from "./creatureSummonGroups.grpc.controller";
import { CreatureSummonGroupsResolver } from "./creatureSummonGroups.resolver";

@Module({
  imports: [CreatureSummonGroupsModuleBase, forwardRef(() => AuthModule)],
  controllers: [
    CreatureSummonGroupsController,
    CreatureSummonGroupsGrpcController,
  ],
  providers: [CreatureSummonGroupsService, CreatureSummonGroupsResolver],
  exports: [CreatureSummonGroupsService],
})
export class CreatureSummonGroupsModule {}
