import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ClreDedPrcDclrPdlServiceBase } from "./base/clreDedPrcDclrPdl.service.base";

@Injectable()
export class ClreDedPrcDclrPdlService extends ClreDedPrcDclrPdlServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
