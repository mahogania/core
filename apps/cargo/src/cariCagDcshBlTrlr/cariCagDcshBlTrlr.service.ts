import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CariCagDcshBlTrlrServiceBase } from "./base/cariCagDcshBlTrlr.service.base";

@Injectable()
export class CariCagDcshBlTrlrService extends CariCagDcshBlTrlrServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
