import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SerialAndBatchEntryServiceBase } from "./base/serialAndBatchEntry.service.base";

@Injectable()
export class SerialAndBatchEntryService extends SerialAndBatchEntryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
