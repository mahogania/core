import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GameEventNpcVendorModuleBase } from "./base/gameEventNpcVendor.module.base";
import { GameEventNpcVendorService } from "./gameEventNpcVendor.service";
import { GameEventNpcVendorController } from "./gameEventNpcVendor.controller";
import { GameEventNpcVendorGrpcController } from "./gameEventNpcVendor.grpc.controller";
import { GameEventNpcVendorResolver } from "./gameEventNpcVendor.resolver";

@Module({
  imports: [GameEventNpcVendorModuleBase, forwardRef(() => AuthModule)],
  controllers: [GameEventNpcVendorController, GameEventNpcVendorGrpcController],
  providers: [GameEventNpcVendorService, GameEventNpcVendorResolver],
  exports: [GameEventNpcVendorService],
})
export class GameEventNpcVendorModule {}
