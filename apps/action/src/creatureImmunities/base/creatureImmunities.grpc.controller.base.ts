/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { GrpcMethod } from "@nestjs/microservices";
import { CreatureImmunitiesService } from "../creatureImmunities.service";
import { CreatureImmunitiesCreateInput } from "./CreatureImmunitiesCreateInput";
import { CreatureImmunitiesWhereInput } from "./CreatureImmunitiesWhereInput";
import { CreatureImmunitiesWhereUniqueInput } from "./CreatureImmunitiesWhereUniqueInput";
import { CreatureImmunitiesFindManyArgs } from "./CreatureImmunitiesFindManyArgs";
import { CreatureImmunitiesUpdateInput } from "./CreatureImmunitiesUpdateInput";
import { CreatureImmunities } from "./CreatureImmunities";

export class CreatureImmunitiesGrpcControllerBase {
  constructor(protected readonly service: CreatureImmunitiesService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CreatureImmunities })
  @GrpcMethod("CreatureImmunitiesService", "createCreatureImmunities")
  async createCreatureImmunities(
    @common.Body() data: CreatureImmunitiesCreateInput
  ): Promise<CreatureImmunities> {
    return await this.service.createCreatureImmunities({
      data: data,
      select: {
        auras: true,
        comment: true,
        createdAt: true,
        dispelTypeMask: true,
        effects: true,
        id: true,
        immuneAoE: true,
        immuneChain: true,
        mechanicsMask: true,
        schoolMask: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [CreatureImmunities] })
  @ApiNestedQuery(CreatureImmunitiesFindManyArgs)
  @GrpcMethod("CreatureImmunitiesService", "creatureImmunitiesItems")
  async creatureImmunitiesItems(
    @common.Req() request: Request
  ): Promise<CreatureImmunities[]> {
    const args = plainToClass(CreatureImmunitiesFindManyArgs, request.query);
    return this.service.creatureImmunitiesItems({
      ...args,
      select: {
        auras: true,
        comment: true,
        createdAt: true,
        dispelTypeMask: true,
        effects: true,
        id: true,
        immuneAoE: true,
        immuneChain: true,
        mechanicsMask: true,
        schoolMask: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CreatureImmunities })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("CreatureImmunitiesService", "creatureImmunities")
  async creatureImmunities(
    @common.Param() params: CreatureImmunitiesWhereUniqueInput
  ): Promise<CreatureImmunities | null> {
    const result = await this.service.creatureImmunities({
      where: params,
      select: {
        auras: true,
        comment: true,
        createdAt: true,
        dispelTypeMask: true,
        effects: true,
        id: true,
        immuneAoE: true,
        immuneChain: true,
        mechanicsMask: true,
        schoolMask: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: CreatureImmunities })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("CreatureImmunitiesService", "updateCreatureImmunities")
  async updateCreatureImmunities(
    @common.Param() params: CreatureImmunitiesWhereUniqueInput,
    @common.Body() data: CreatureImmunitiesUpdateInput
  ): Promise<CreatureImmunities | null> {
    try {
      return await this.service.updateCreatureImmunities({
        where: params,
        data: data,
        select: {
          auras: true,
          comment: true,
          createdAt: true,
          dispelTypeMask: true,
          effects: true,
          id: true,
          immuneAoE: true,
          immuneChain: true,
          mechanicsMask: true,
          schoolMask: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: CreatureImmunities })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("CreatureImmunitiesService", "deleteCreatureImmunities")
  async deleteCreatureImmunities(
    @common.Param() params: CreatureImmunitiesWhereUniqueInput
  ): Promise<CreatureImmunities | null> {
    try {
      return await this.service.deleteCreatureImmunities({
        where: params,
        select: {
          auras: true,
          comment: true,
          createdAt: true,
          dispelTypeMask: true,
          effects: true,
          id: true,
          immuneAoE: true,
          immuneChain: true,
          mechanicsMask: true,
          schoolMask: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
