import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ClreDedPdlsServiceBase } from "./base/clreDedPdls.service.base";

@Injectable()
export class ClreDedPdlsService extends ClreDedPdlsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
