import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PetNameGenerationServiceBase } from "./base/petNameGeneration.service.base";

@Injectable()
export class PetNameGenerationService extends PetNameGenerationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
