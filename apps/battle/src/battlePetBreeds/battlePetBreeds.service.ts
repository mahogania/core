import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BattlePetBreedsServiceBase } from "./base/battlePetBreeds.service.base";

@Injectable()
export class BattlePetBreedsService extends BattlePetBreedsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
