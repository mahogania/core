import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DunningServiceBase } from "./base/dunning.service.base";

@Injectable()
export class DunningService extends DunningServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
