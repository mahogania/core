import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ItemDefaultServiceBase } from "./base/itemDefault.service.base";

@Injectable()
export class ItemDefaultService extends ItemDefaultServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
