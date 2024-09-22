import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreatureTemplateModelServiceBase } from "./base/creatureTemplateModel.service.base";

@Injectable()
export class CreatureTemplateModelService extends CreatureTemplateModelServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
