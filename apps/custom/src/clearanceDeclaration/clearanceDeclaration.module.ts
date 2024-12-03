import { Module } from "@nestjs/common";
import { ClearanceDeclarationModuleBase } from "./base/clearanceDeclaration.module.base";
import { ClearanceDeclarationService } from "./clearanceDeclaration.service";
import { ClearanceDeclarationController } from "./clearanceDeclaration.controller";
import { ClearanceDeclarationGrpcController } from "./clearanceDeclaration.grpc.controller";
import { ClearanceDeclarationResolver } from "./clearanceDeclaration.resolver";

@Module({
  imports: [ClearanceDeclarationModuleBase],
  controllers: [
    ClearanceDeclarationController,
    ClearanceDeclarationGrpcController,
  ],
  providers: [ClearanceDeclarationService, ClearanceDeclarationResolver],
  exports: [ClearanceDeclarationService],
})
export class ClearanceDeclarationModule {}
