import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PipelineServiceBase } from "./base/pipeline.service.base";

@Injectable()
export class PipelineService extends PipelineServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
