import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PosOpeningEntryDetailServiceBase } from "./base/posOpeningEntryDetail.service.base";

@Injectable()
export class PosOpeningEntryDetailService extends PosOpeningEntryDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
