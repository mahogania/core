import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProcessorServiceBase } from "./base/processor.service.base";

@Injectable()
export class ProcessorService extends ProcessorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
