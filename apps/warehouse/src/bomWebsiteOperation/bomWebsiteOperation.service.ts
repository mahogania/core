import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BomWebsiteOperationServiceBase } from "./base/bomWebsiteOperation.service.base";

@Injectable()
export class BomWebsiteOperationService extends BomWebsiteOperationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
