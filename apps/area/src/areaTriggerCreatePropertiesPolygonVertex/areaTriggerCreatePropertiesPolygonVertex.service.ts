import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AreaTriggerCreatePropertiesPolygonVertexServiceBase } from "./base/areaTriggerCreatePropertiesPolygonVertex.service.base";

@Injectable()
export class AreaTriggerCreatePropertiesPolygonVertexService extends AreaTriggerCreatePropertiesPolygonVertexServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
