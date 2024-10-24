import { Module } from "@nestjs/common";
import { RepresentationModuleBase } from "./base/representation.module.base";
import { RepresentationService } from "./representation.service";
import { RepresentationController } from "./representation.controller";
import { RepresentationGrpcController } from "./representation.grpc.controller";
import { RepresentationResolver } from "./representation.resolver";

@Module({
  imports: [RepresentationModuleBase],
  controllers: [RepresentationController, RepresentationGrpcController],
  providers: [RepresentationService, RepresentationResolver],
  exports: [RepresentationService],
})
export class RepresentationModule {}
