import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ScenariosServiceBase } from "./base/scenarios.service.base";

@Injectable()
export class ScenariosService extends ScenariosServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
