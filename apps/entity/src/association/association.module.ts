import { Module } from "@nestjs/common";
import { AssociationModuleBase } from "./base/association.module.base";
import { AssociationService } from "./association.service";
import { AssociationController } from "./association.controller";
import { AssociationGrpcController } from "./association.grpc.controller";
import { AssociationResolver } from "./association.resolver";

@Module({
  imports: [AssociationModuleBase],
  controllers: [AssociationController, AssociationGrpcController],
  providers: [AssociationService, AssociationResolver],
  exports: [AssociationService],
})
export class AssociationModule {}
