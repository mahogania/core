import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ChequePrintTemplateServiceBase } from "./base/chequePrintTemplate.service.base";

@Injectable()
export class ChequePrintTemplateService extends ChequePrintTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
