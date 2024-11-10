import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BomOperationServiceBase } from "./base/bomOperation.service.base";

@Injectable()
export class BomOperationService extends BomOperationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
