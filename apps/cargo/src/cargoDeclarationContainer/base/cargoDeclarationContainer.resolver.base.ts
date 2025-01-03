/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CargoDeclarationContainer } from "./CargoDeclarationContainer";
import { CargoDeclarationContainerCountArgs } from "./CargoDeclarationContainerCountArgs";
import { CargoDeclarationContainerFindManyArgs } from "./CargoDeclarationContainerFindManyArgs";
import { CargoDeclarationContainerFindUniqueArgs } from "./CargoDeclarationContainerFindUniqueArgs";
import { CreateCargoDeclarationContainerArgs } from "./CreateCargoDeclarationContainerArgs";
import { UpdateCargoDeclarationContainerArgs } from "./UpdateCargoDeclarationContainerArgs";
import { DeleteCargoDeclarationContainerArgs } from "./DeleteCargoDeclarationContainerArgs";
import { CargoDeclarationContainerService } from "../cargoDeclarationContainer.service";
@graphql.Resolver(() => CargoDeclarationContainer)
export class CargoDeclarationContainerResolverBase {
  constructor(protected readonly service: CargoDeclarationContainerService) {}

  async _cargoDeclarationContainersMeta(
    @graphql.Args() args: CargoDeclarationContainerCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [CargoDeclarationContainer])
  async cargoDeclarationContainers(
    @graphql.Args() args: CargoDeclarationContainerFindManyArgs
  ): Promise<CargoDeclarationContainer[]> {
    return this.service.cargoDeclarationContainers(args);
  }

  @graphql.Query(() => CargoDeclarationContainer, { nullable: true })
  async cargoDeclarationContainer(
    @graphql.Args() args: CargoDeclarationContainerFindUniqueArgs
  ): Promise<CargoDeclarationContainer | null> {
    const result = await this.service.cargoDeclarationContainer(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => CargoDeclarationContainer)
  async createCargoDeclarationContainer(
    @graphql.Args() args: CreateCargoDeclarationContainerArgs
  ): Promise<CargoDeclarationContainer> {
    return await this.service.createCargoDeclarationContainer({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => CargoDeclarationContainer)
  async updateCargoDeclarationContainer(
    @graphql.Args() args: UpdateCargoDeclarationContainerArgs
  ): Promise<CargoDeclarationContainer | null> {
    try {
      return await this.service.updateCargoDeclarationContainer({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => CargoDeclarationContainer)
  async deleteCargoDeclarationContainer(
    @graphql.Args() args: DeleteCargoDeclarationContainerArgs
  ): Promise<CargoDeclarationContainer | null> {
    try {
      return await this.service.deleteCargoDeclarationContainer(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
