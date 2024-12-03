import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BomUpdateBatchServiceBase } from "./base/bomUpdateBatch.service.base";

@Injectable()
export class BomUpdateBatchService extends BomUpdateBatchServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
