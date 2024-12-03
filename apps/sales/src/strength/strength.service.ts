import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StrengthServiceBase } from "./base/strength.service.base";

@Injectable()
export class StrengthService extends StrengthServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
