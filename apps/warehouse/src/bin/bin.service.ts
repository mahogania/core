import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BinServiceBase } from "./base/bin.service.base";

@Injectable()
export class BinService extends BinServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
