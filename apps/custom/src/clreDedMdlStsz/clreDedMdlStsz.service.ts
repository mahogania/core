import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ClreDedMdlStszServiceBase } from "./base/clreDedMdlStsz.service.base";

@Injectable()
export class ClreDedMdlStszService extends ClreDedMdlStszServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
