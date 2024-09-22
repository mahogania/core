import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { NpcVendorModuleBase } from "./base/npcVendor.module.base";
import { NpcVendorService } from "./npcVendor.service";
import { NpcVendorController } from "./npcVendor.controller";
import { NpcVendorGrpcController } from "./npcVendor.grpc.controller";
import { NpcVendorResolver } from "./npcVendor.resolver";

@Module({
  imports: [NpcVendorModuleBase, forwardRef(() => AuthModule)],
  controllers: [NpcVendorController, NpcVendorGrpcController],
  providers: [NpcVendorService, NpcVendorResolver],
  exports: [NpcVendorService],
})
export class NpcVendorModule {}
