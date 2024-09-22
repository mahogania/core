import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ItemScriptNamesServiceBase } from "./base/itemScriptNames.service.base";

@Injectable()
export class ItemScriptNamesService extends ItemScriptNamesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
