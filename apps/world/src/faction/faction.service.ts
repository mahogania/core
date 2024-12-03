import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FactionServiceBase } from "./base/faction.service.base";

@Injectable()
export class FactionService extends FactionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
