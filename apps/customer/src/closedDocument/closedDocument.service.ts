import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ClosedDocumentServiceBase } from "./base/closedDocument.service.base";

@Injectable()
export class ClosedDocumentService extends ClosedDocumentServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
