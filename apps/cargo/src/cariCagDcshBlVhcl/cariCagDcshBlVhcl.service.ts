import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CariCagDcshBlVhclServiceBase } from "./base/cariCagDcshBlVhcl.service.base";

@Injectable()
export class CariCagDcshBlVhclService extends CariCagDcshBlVhclServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
