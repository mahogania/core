import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { RepresentationServiceBase } from "./base/representation.service.base";

@Injectable()
export class RepresentationService extends RepresentationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
