import { Module } from "@nestjs/common";
import { EntityModuleBase } from "./base/entity.module.base";
import { EntityService } from "./entity.service";
import { EntityController } from "./entity.controller";
import { EntityGrpcController } from "./entity.grpc.controller";
import { EntityResolver } from "./entity.resolver";

@Module({
  imports: [EntityModuleBase],
  controllers: [EntityController, EntityGrpcController],
  providers: [EntityService, EntityResolver],
  exports: [EntityService],
})
export class EntityModule {}
