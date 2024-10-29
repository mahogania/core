import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FactionModuleBase } from "./base/faction.module.base";
import { FactionService } from "./faction.service";
import { FactionController } from "./faction.controller";
import { FactionGrpcController } from "./faction.grpc.controller";
import { FactionResolver } from "./faction.resolver";

@Module({
  imports: [FactionModuleBase, forwardRef(() => AuthModule)],
  controllers: [FactionController, FactionGrpcController],
  providers: [FactionService, FactionResolver],
  exports: [FactionService],
})
export class FactionModule {}
