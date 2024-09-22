import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ExplorationBasexpServiceBase } from "./base/explorationBasexp.service.base";

@Injectable()
export class ExplorationBasexpService extends ExplorationBasexpServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
