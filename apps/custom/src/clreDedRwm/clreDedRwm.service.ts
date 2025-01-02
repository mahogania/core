import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ClreDedRwmServiceBase } from "./base/clreDedRwm.service.base";

@Injectable()
export class ClreDedRwmService extends ClreDedRwmServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
