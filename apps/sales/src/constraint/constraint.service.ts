import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ConstraintServiceBase } from "./base/constraint.service.base";

@Injectable()
export class ConstraintService extends ConstraintServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
