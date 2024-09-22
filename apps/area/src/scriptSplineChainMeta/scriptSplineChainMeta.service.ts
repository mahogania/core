import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ScriptSplineChainMetaServiceBase } from "./base/scriptSplineChainMeta.service.base";

@Injectable()
export class ScriptSplineChainMetaService extends ScriptSplineChainMetaServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
