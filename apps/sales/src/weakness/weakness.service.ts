import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WeaknessServiceBase } from "./base/weakness.service.base";

@Injectable()
export class WeaknessService extends WeaknessServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
