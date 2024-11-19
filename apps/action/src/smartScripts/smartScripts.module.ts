import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SmartScriptsModuleBase } from "./base/smartScripts.module.base";
import { SmartScriptsService } from "./smartScripts.service";
import { SmartScriptsController } from "./smartScripts.controller";
import { SmartScriptsGrpcController } from "./smartScripts.grpc.controller";
import { SmartScriptsResolver } from "./smartScripts.resolver";

@Module({
  imports: [SmartScriptsModuleBase, forwardRef(() => AuthModule)],
  controllers: [SmartScriptsController, SmartScriptsGrpcController],
  providers: [SmartScriptsService, SmartScriptsResolver],
  exports: [SmartScriptsService],
})
export class SmartScriptsModule {}
