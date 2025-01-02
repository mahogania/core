import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ClreDedCntrServiceBase } from "./base/clreDedCntr.service.base";

@Injectable()
export class ClreDedCntrService extends ClreDedCntrServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
