import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AreaTriggerCreatePropertiesPolygonVertexModuleBase } from "./base/areaTriggerCreatePropertiesPolygonVertex.module.base";
import { AreaTriggerCreatePropertiesPolygonVertexService } from "./areaTriggerCreatePropertiesPolygonVertex.service";
import { AreaTriggerCreatePropertiesPolygonVertexController } from "./areaTriggerCreatePropertiesPolygonVertex.controller";
import { AreaTriggerCreatePropertiesPolygonVertexGrpcController } from "./areaTriggerCreatePropertiesPolygonVertex.grpc.controller";
import { AreaTriggerCreatePropertiesPolygonVertexResolver } from "./areaTriggerCreatePropertiesPolygonVertex.resolver";

@Module({
  imports: [
    AreaTriggerCreatePropertiesPolygonVertexModuleBase,
    forwardRef(() => AuthModule),
  ],
  controllers: [
    AreaTriggerCreatePropertiesPolygonVertexController,
    AreaTriggerCreatePropertiesPolygonVertexGrpcController,
  ],
  providers: [
    AreaTriggerCreatePropertiesPolygonVertexService,
    AreaTriggerCreatePropertiesPolygonVertexResolver,
  ],
  exports: [AreaTriggerCreatePropertiesPolygonVertexService],
})
export class AreaTriggerCreatePropertiesPolygonVertexModule {}
