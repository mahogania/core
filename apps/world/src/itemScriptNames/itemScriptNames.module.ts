import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ItemScriptNamesModuleBase } from "./base/itemScriptNames.module.base";
import { ItemScriptNamesService } from "./itemScriptNames.service";
import { ItemScriptNamesController } from "./itemScriptNames.controller";
import { ItemScriptNamesGrpcController } from "./itemScriptNames.grpc.controller";
import { ItemScriptNamesResolver } from "./itemScriptNames.resolver";

@Module({
  imports: [ItemScriptNamesModuleBase, forwardRef(() => AuthModule)],
  controllers: [ItemScriptNamesController, ItemScriptNamesGrpcController],
  providers: [ItemScriptNamesService, ItemScriptNamesResolver],
  exports: [ItemScriptNamesService],
})
export class ItemScriptNamesModule {}
