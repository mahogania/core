import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DesignationServiceBase } from "./base/designation.service.base";

@Injectable()
export class DesignationService extends DesignationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
