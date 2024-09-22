import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GameObjectServiceBase } from "./base/gameObject.service.base";

@Injectable()
export class GameObjectService extends GameObjectServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
