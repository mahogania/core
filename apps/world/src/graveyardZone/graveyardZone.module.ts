import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { GraveyardZoneModuleBase } from "./base/graveyardZone.module.base";
import { GraveyardZoneService } from "./graveyardZone.service";
import { GraveyardZoneController } from "./graveyardZone.controller";
import { GraveyardZoneGrpcController } from "./graveyardZone.grpc.controller";
import { GraveyardZoneResolver } from "./graveyardZone.resolver";

@Module({
  imports: [GraveyardZoneModuleBase, forwardRef(() => AuthModule)],
  controllers: [GraveyardZoneController, GraveyardZoneGrpcController],
  providers: [GraveyardZoneService, GraveyardZoneResolver],
  exports: [GraveyardZoneService],
})
export class GraveyardZoneModule {}
