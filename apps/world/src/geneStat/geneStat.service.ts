import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GeneStatServiceBase } from "./base/geneStat.service.base";

@Injectable()
export class GeneStatService extends GeneStatServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
