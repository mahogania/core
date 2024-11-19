import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AreaTriggerCreatePropertyServiceBase } from "./base/areaTriggerCreateProperty.service.base";

@Injectable()
export class AreaTriggerCreatePropertyService extends AreaTriggerCreatePropertyServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
