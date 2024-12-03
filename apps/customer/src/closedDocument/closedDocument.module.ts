import { Module } from "@nestjs/common";
import { ClosedDocumentModuleBase } from "./base/closedDocument.module.base";
import { ClosedDocumentService } from "./closedDocument.service";
import { ClosedDocumentController } from "./closedDocument.controller";
import { ClosedDocumentResolver } from "./closedDocument.resolver";

@Module({
  imports: [ClosedDocumentModuleBase],
  controllers: [ClosedDocumentController],
  providers: [ClosedDocumentService, ClosedDocumentResolver],
  exports: [ClosedDocumentService],
})
export class ClosedDocumentModule {}
