import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ItemAlternativeServiceBase } from "./base/itemAlternative.service.base";

@Injectable()
export class ItemAlternativeService extends ItemAlternativeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
