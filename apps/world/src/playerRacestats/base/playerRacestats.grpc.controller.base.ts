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
import { PlayerRacestatsService } from "../playerRacestats.service";
import { PlayerRacestatsCreateInput } from "./PlayerRacestatsCreateInput";
import { PlayerRacestatsWhereInput } from "./PlayerRacestatsWhereInput";
import { PlayerRacestatsWhereUniqueInput } from "./PlayerRacestatsWhereUniqueInput";
import { PlayerRacestatsFindManyArgs } from "./PlayerRacestatsFindManyArgs";
import { PlayerRacestatsUpdateInput } from "./PlayerRacestatsUpdateInput";
import { PlayerRacestats } from "./PlayerRacestats";

export class PlayerRacestatsGrpcControllerBase {
  constructor(protected readonly service: PlayerRacestatsService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PlayerRacestats })
  @GrpcMethod("PlayerRacestatsService", "createPlayerRacestats")
  async createPlayerRacestats(
    @common.Body() data: PlayerRacestatsCreateInput
  ): Promise<PlayerRacestats> {
    return await this.service.createPlayerRacestats({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [PlayerRacestats] })
  @ApiNestedQuery(PlayerRacestatsFindManyArgs)
  @GrpcMethod("PlayerRacestatsService", "playerRacestatsItems")
  async playerRacestatsItems(
    @common.Req() request: Request
  ): Promise<PlayerRacestats[]> {
    const args = plainToClass(PlayerRacestatsFindManyArgs, request.query);
    return this.service.playerRacestatsItems({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PlayerRacestats })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("PlayerRacestatsService", "playerRacestats")
  async playerRacestats(
    @common.Param() params: PlayerRacestatsWhereUniqueInput
  ): Promise<PlayerRacestats | null> {
    const result = await this.service.playerRacestats({
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
  @swagger.ApiOkResponse({ type: PlayerRacestats })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("PlayerRacestatsService", "updatePlayerRacestats")
  async updatePlayerRacestats(
    @common.Param() params: PlayerRacestatsWhereUniqueInput,
    @common.Body() data: PlayerRacestatsUpdateInput
  ): Promise<PlayerRacestats | null> {
    try {
      return await this.service.updatePlayerRacestats({
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
  @swagger.ApiOkResponse({ type: PlayerRacestats })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("PlayerRacestatsService", "deletePlayerRacestats")
  async deletePlayerRacestats(
    @common.Param() params: PlayerRacestatsWhereUniqueInput
  ): Promise<PlayerRacestats | null> {
    try {
      return await this.service.deletePlayerRacestats({
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
