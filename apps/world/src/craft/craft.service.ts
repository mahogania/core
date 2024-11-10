import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CraftServiceBase } from "./base/craft.service.base";

@Injectable()
export class CraftService extends CraftServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
