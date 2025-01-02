import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ClreDedVlutPdlServiceBase } from "./base/clreDedVlutPdl.service.base";

@Injectable()
export class ClreDedVlutPdlService extends ClreDedVlutPdlServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
