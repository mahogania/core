import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ClreDedVhclServiceBase } from "./base/clreDedVhcl.service.base";

@Injectable()
export class ClreDedVhclService extends ClreDedVhclServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
