import { Module } from "@nestjs/common";
import { TraitModuleBase } from "./base/trait.module.base";
import { TraitService } from "./trait.service";
import { TraitController } from "./trait.controller";
import { TraitGrpcController } from "./trait.grpc.controller";
import { TraitResolver } from "./trait.resolver";

@Module({
  imports: [TraitModuleBase],
  controllers: [TraitController, TraitGrpcController],
  providers: [TraitService, TraitResolver],
  exports: [TraitService],
})
export class TraitModule {}
