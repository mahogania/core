import { Module } from "@nestjs/common";
import { ClearanceDeclarationContainerModuleBase } from "./base/clearanceDeclarationContainer.module.base";
import { ClearanceDeclarationContainerService } from "./clearanceDeclarationContainer.service";
import { ClearanceDeclarationContainerController } from "./clearanceDeclarationContainer.controller";
import { ClearanceDeclarationContainerGrpcController } from "./clearanceDeclarationContainer.grpc.controller";
import { ClearanceDeclarationContainerResolver } from "./clearanceDeclarationContainer.resolver";

@Module({
  imports: [ClearanceDeclarationContainerModuleBase],
  controllers: [
    ClearanceDeclarationContainerController,
    ClearanceDeclarationContainerGrpcController,
  ],
  providers: [
    ClearanceDeclarationContainerService,
    ClearanceDeclarationContainerResolver,
  ],
  exports: [ClearanceDeclarationContainerService],
})
export class ClearanceDeclarationContainerModule {}
