import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { CraftModuleBase } from "./base/craft.module.base";
import { CraftService } from "./craft.service";
import { CraftController } from "./craft.controller";
import { CraftGrpcController } from "./craft.grpc.controller";
import { CraftResolver } from "./craft.resolver";

@Module({
  imports: [CraftModuleBase, forwardRef(() => AuthModule)],
  controllers: [CraftController, CraftGrpcController],
  providers: [CraftService, CraftResolver],
  exports: [CraftService],
})
export class CraftModule {}
