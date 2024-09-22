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
import { PlayerClasslevelstatsService } from "../playerClasslevelstats.service";
import { PlayerClasslevelstatsCreateInput } from "./PlayerClasslevelstatsCreateInput";
import { PlayerClasslevelstatsWhereInput } from "./PlayerClasslevelstatsWhereInput";
import { PlayerClasslevelstatsWhereUniqueInput } from "./PlayerClasslevelstatsWhereUniqueInput";
import { PlayerClasslevelstatsFindManyArgs } from "./PlayerClasslevelstatsFindManyArgs";
import { PlayerClasslevelstatsUpdateInput } from "./PlayerClasslevelstatsUpdateInput";
import { PlayerClasslevelstats } from "./PlayerClasslevelstats";

export class PlayerClasslevelstatsGrpcControllerBase {
  constructor(protected readonly service: PlayerClasslevelstatsService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PlayerClasslevelstats })
  @GrpcMethod("PlayerClasslevelstatsService", "createPlayerClasslevelstats")
  async createPlayerClasslevelstats(
    @common.Body() data: PlayerClasslevelstatsCreateInput
  ): Promise<PlayerClasslevelstats> {
    return await this.service.createPlayerClasslevelstats({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [PlayerClasslevelstats] })
  @ApiNestedQuery(PlayerClasslevelstatsFindManyArgs)
  @GrpcMethod("PlayerClasslevelstatsService", "playerClasslevelstatsItems")
  async playerClasslevelstatsItems(
    @common.Req() request: Request
  ): Promise<PlayerClasslevelstats[]> {
    const args = plainToClass(PlayerClasslevelstatsFindManyArgs, request.query);
    return this.service.playerClasslevelstatsItems({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PlayerClasslevelstats })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("PlayerClasslevelstatsService", "playerClasslevelstats")
  async playerClasslevelstats(
    @common.Param() params: PlayerClasslevelstatsWhereUniqueInput
  ): Promise<PlayerClasslevelstats | null> {
    const result = await this.service.playerClasslevelstats({
      where: params,
      select: {
        createdAt: true,
        id: true,
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
  @swagger.ApiOkResponse({ type: PlayerClasslevelstats })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("PlayerClasslevelstatsService", "updatePlayerClasslevelstats")
  async updatePlayerClasslevelstats(
    @common.Param() params: PlayerClasslevelstatsWhereUniqueInput,
    @common.Body() data: PlayerClasslevelstatsUpdateInput
  ): Promise<PlayerClasslevelstats | null> {
    try {
      return await this.service.updatePlayerClasslevelstats({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
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
  @swagger.ApiOkResponse({ type: PlayerClasslevelstats })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("PlayerClasslevelstatsService", "deletePlayerClasslevelstats")
  async deletePlayerClasslevelstats(
    @common.Param() params: PlayerClasslevelstatsWhereUniqueInput
  ): Promise<PlayerClasslevelstats | null> {
    try {
      return await this.service.deletePlayerClasslevelstats({
        where: params,
        select: {
          createdAt: true,
          id: true,
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
