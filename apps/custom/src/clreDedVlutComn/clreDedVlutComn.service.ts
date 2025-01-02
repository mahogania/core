import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ClreDedVlutComnServiceBase } from "./base/clreDedVlutComn.service.base";

@Injectable()
export class ClreDedVlutComnService extends ClreDedVlutComnServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
