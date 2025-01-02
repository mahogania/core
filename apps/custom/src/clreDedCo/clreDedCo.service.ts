import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ClreDedCoServiceBase } from "./base/clreDedCo.service.base";

@Injectable()
export class ClreDedCoService extends ClreDedCoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
