import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ClreDedComnServiceBase } from "./base/clreDedComn.service.base";

@Injectable()
export class ClreDedComnService extends ClreDedComnServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
