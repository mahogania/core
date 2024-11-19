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
import { CreatureQuestCurrencyService } from "../creatureQuestCurrency.service";
import { CreatureQuestCurrencyCreateInput } from "./CreatureQuestCurrencyCreateInput";
import { CreatureQuestCurrencyWhereInput } from "./CreatureQuestCurrencyWhereInput";
import { CreatureQuestCurrencyWhereUniqueInput } from "./CreatureQuestCurrencyWhereUniqueInput";
import { CreatureQuestCurrencyFindManyArgs } from "./CreatureQuestCurrencyFindManyArgs";
import { CreatureQuestCurrencyUpdateInput } from "./CreatureQuestCurrencyUpdateInput";
import { CreatureQuestCurrency } from "./CreatureQuestCurrency";

export class CreatureQuestCurrencyGrpcControllerBase {
  constructor(protected readonly service: CreatureQuestCurrencyService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CreatureQuestCurrency })
  @GrpcMethod("CreatureQuestCurrencyService", "createCreatureQuestCurrency")
  async createCreatureQuestCurrency(
    @common.Body() data: CreatureQuestCurrencyCreateInput
  ): Promise<CreatureQuestCurrency> {
    return await this.service.createCreatureQuestCurrency({
      data: data,
      select: {
        createdAt: true,
        creatureId: true,
        currencyId: true,
        id: true,
        updatedAt: true,
        verifiedBuild: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [CreatureQuestCurrency] })
  @ApiNestedQuery(CreatureQuestCurrencyFindManyArgs)
  @GrpcMethod("CreatureQuestCurrencyService", "creatureQuestCurrencies")
  async creatureQuestCurrencies(
    @common.Req() request: Request
  ): Promise<CreatureQuestCurrency[]> {
    const args = plainToClass(CreatureQuestCurrencyFindManyArgs, request.query);
    return this.service.creatureQuestCurrencies({
      ...args,
      select: {
        createdAt: true,
        creatureId: true,
        currencyId: true,
        id: true,
        updatedAt: true,
        verifiedBuild: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CreatureQuestCurrency })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("CreatureQuestCurrencyService", "creatureQuestCurrency")
  async creatureQuestCurrency(
    @common.Param() params: CreatureQuestCurrencyWhereUniqueInput
  ): Promise<CreatureQuestCurrency | null> {
    const result = await this.service.creatureQuestCurrency({
      where: params,
      select: {
        createdAt: true,
        creatureId: true,
        currencyId: true,
        id: true,
        updatedAt: true,
        verifiedBuild: true,
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
  @swagger.ApiOkResponse({ type: CreatureQuestCurrency })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("CreatureQuestCurrencyService", "updateCreatureQuestCurrency")
  async updateCreatureQuestCurrency(
    @common.Param() params: CreatureQuestCurrencyWhereUniqueInput,
    @common.Body() data: CreatureQuestCurrencyUpdateInput
  ): Promise<CreatureQuestCurrency | null> {
    try {
      return await this.service.updateCreatureQuestCurrency({
        where: params,
        data: data,
        select: {
          createdAt: true,
          creatureId: true,
          currencyId: true,
          id: true,
          updatedAt: true,
          verifiedBuild: true,
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
  @swagger.ApiOkResponse({ type: CreatureQuestCurrency })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("CreatureQuestCurrencyService", "deleteCreatureQuestCurrency")
  async deleteCreatureQuestCurrency(
    @common.Param() params: CreatureQuestCurrencyWhereUniqueInput
  ): Promise<CreatureQuestCurrency | null> {
    try {
      return await this.service.deleteCreatureQuestCurrency({
        where: params,
        select: {
          createdAt: true,
          creatureId: true,
          currencyId: true,
          id: true,
          updatedAt: true,
          verifiedBuild: true,
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