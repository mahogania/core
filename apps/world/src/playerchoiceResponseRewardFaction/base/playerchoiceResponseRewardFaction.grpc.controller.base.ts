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
import { PlayerchoiceResponseRewardFactionService } from "../playerchoiceResponseRewardFaction.service";
import { PlayerchoiceResponseRewardFactionCreateInput } from "./PlayerchoiceResponseRewardFactionCreateInput";
import { PlayerchoiceResponseRewardFactionWhereInput } from "./PlayerchoiceResponseRewardFactionWhereInput";
import { PlayerchoiceResponseRewardFactionWhereUniqueInput } from "./PlayerchoiceResponseRewardFactionWhereUniqueInput";
import { PlayerchoiceResponseRewardFactionFindManyArgs } from "./PlayerchoiceResponseRewardFactionFindManyArgs";
import { PlayerchoiceResponseRewardFactionUpdateInput } from "./PlayerchoiceResponseRewardFactionUpdateInput";
import { PlayerchoiceResponseRewardFaction } from "./PlayerchoiceResponseRewardFaction";

export class PlayerchoiceResponseRewardFactionGrpcControllerBase {
  constructor(
    protected readonly service: PlayerchoiceResponseRewardFactionService
  ) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PlayerchoiceResponseRewardFaction })
  @GrpcMethod(
    "PlayerchoiceResponseRewardFactionService",
    "createPlayerchoiceResponseRewardFaction"
  )
  async createPlayerchoiceResponseRewardFaction(
    @common.Body() data: PlayerchoiceResponseRewardFactionCreateInput
  ): Promise<PlayerchoiceResponseRewardFaction> {
    return await this.service.createPlayerchoiceResponseRewardFaction({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [PlayerchoiceResponseRewardFaction] })
  @ApiNestedQuery(PlayerchoiceResponseRewardFactionFindManyArgs)
  @GrpcMethod(
    "PlayerchoiceResponseRewardFactionService",
    "playerchoiceResponseRewardFactions"
  )
  async playerchoiceResponseRewardFactions(
    @common.Req() request: Request
  ): Promise<PlayerchoiceResponseRewardFaction[]> {
    const args = plainToClass(
      PlayerchoiceResponseRewardFactionFindManyArgs,
      request.query
    );
    return this.service.playerchoiceResponseRewardFactions({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PlayerchoiceResponseRewardFaction })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod(
    "PlayerchoiceResponseRewardFactionService",
    "playerchoiceResponseRewardFaction"
  )
  async playerchoiceResponseRewardFaction(
    @common.Param() params: PlayerchoiceResponseRewardFactionWhereUniqueInput
  ): Promise<PlayerchoiceResponseRewardFaction | null> {
    const result = await this.service.playerchoiceResponseRewardFaction({
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
  @swagger.ApiOkResponse({ type: PlayerchoiceResponseRewardFaction })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod(
    "PlayerchoiceResponseRewardFactionService",
    "updatePlayerchoiceResponseRewardFaction"
  )
  async updatePlayerchoiceResponseRewardFaction(
    @common.Param() params: PlayerchoiceResponseRewardFactionWhereUniqueInput,
    @common.Body() data: PlayerchoiceResponseRewardFactionUpdateInput
  ): Promise<PlayerchoiceResponseRewardFaction | null> {
    try {
      return await this.service.updatePlayerchoiceResponseRewardFaction({
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
  @swagger.ApiOkResponse({ type: PlayerchoiceResponseRewardFaction })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod(
    "PlayerchoiceResponseRewardFactionService",
    "deletePlayerchoiceResponseRewardFaction"
  )
  async deletePlayerchoiceResponseRewardFaction(
    @common.Param() params: PlayerchoiceResponseRewardFactionWhereUniqueInput
  ): Promise<PlayerchoiceResponseRewardFaction | null> {
    try {
      return await this.service.deletePlayerchoiceResponseRewardFaction({
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
