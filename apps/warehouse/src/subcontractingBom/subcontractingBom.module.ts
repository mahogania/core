import { Module } from "@nestjs/common";
import { SubcontractingBomModuleBase } from "./base/subcontractingBom.module.base";
import { SubcontractingBomService } from "./subcontractingBom.service";
import { SubcontractingBomController } from "./subcontractingBom.controller";
import { SubcontractingBomResolver } from "./subcontractingBom.resolver";

@Module({
  imports: [SubcontractingBomModuleBase],
  controllers: [SubcontractingBomController],
  providers: [SubcontractingBomService, SubcontractingBomResolver],
  exports: [SubcontractingBomService],
})
export class SubcontractingBomModule {}
