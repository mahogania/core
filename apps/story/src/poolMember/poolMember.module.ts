import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { PoolMemberModuleBase } from "./base/poolMember.module.base";
import { PoolMemberService } from "./poolMember.service";
import { PoolMemberController } from "./poolMember.controller";
import { PoolMemberGrpcController } from "./poolMember.grpc.controller";
import { PoolMemberResolver } from "./poolMember.resolver";

@Module({
  imports: [PoolMemberModuleBase, forwardRef(() => AuthModule)],
  controllers: [PoolMemberController, PoolMemberGrpcController],
  providers: [PoolMemberService, PoolMemberResolver],
  exports: [PoolMemberService],
})
export class PoolMemberModule {}
