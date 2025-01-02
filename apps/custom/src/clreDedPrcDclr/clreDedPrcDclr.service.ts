import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ClreDedPrcDclrServiceBase } from "./base/clreDedPrcDclr.service.base";

@Injectable()
export class ClreDedPrcDclrService extends ClreDedPrcDclrServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
