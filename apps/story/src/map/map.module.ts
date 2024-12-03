import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MapModuleBase } from "./base/map.module.base";
import { MapService } from "./map.service";
import { MapController } from "./map.controller";
import { MapGrpcController } from "./map.grpc.controller";
import { MapResolver } from "./map.resolver";

@Module({
  imports: [MapModuleBase, forwardRef(() => AuthModule)],
  controllers: [MapController, MapGrpcController],
  providers: [MapService, MapResolver],
  exports: [MapService],
})
export class MapModule {}
