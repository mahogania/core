import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ClreDedMgServiceBase } from "./base/clreDedMg.service.base";

@Injectable()
export class ClreDedMgService extends ClreDedMgServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
