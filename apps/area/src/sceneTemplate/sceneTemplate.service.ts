import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SceneTemplateServiceBase } from "./base/sceneTemplate.service.base";

@Injectable()
export class SceneTemplateService extends SceneTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
