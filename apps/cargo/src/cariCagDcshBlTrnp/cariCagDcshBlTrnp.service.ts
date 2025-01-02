import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CariCagDcshBlTrnpServiceBase } from "./base/cariCagDcshBlTrnp.service.base";

@Injectable()
export class CariCagDcshBlTrnpService extends CariCagDcshBlTrnpServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
