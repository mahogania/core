import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PoolMembersModuleBase } from "./base/poolMembers.module.base";
import { PoolMembersService } from "./poolMembers.service";
import { PoolMembersController } from "./poolMembers.controller";
import { PoolMembersGrpcController } from "./poolMembers.grpc.controller";
import { PoolMembersResolver } from "./poolMembers.resolver";

@Module({
  imports: [PoolMembersModuleBase, forwardRef(() => AuthModule)],
  controllers: [PoolMembersController, PoolMembersGrpcController],
  providers: [PoolMembersService, PoolMembersResolver],
  exports: [PoolMembersService],
})
export class PoolMembersModule {}
