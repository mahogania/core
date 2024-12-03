import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PosClosingEntryDetailServiceBase } from "./base/posClosingEntryDetail.service.base";

@Injectable()
export class PosClosingEntryDetailService extends PosClosingEntryDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
