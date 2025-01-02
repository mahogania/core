import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ClreDedRimexPrngPdlServiceBase } from "./base/clreDedRimexPrngPdl.service.base";

@Injectable()
export class ClreDedRimexPrngPdlService extends ClreDedRimexPrngPdlServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
