import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CariCagDcshBlCntrServiceBase } from "./base/cariCagDcshBlCntr.service.base";

@Injectable()
export class CariCagDcshBlCntrService extends CariCagDcshBlCntrServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
