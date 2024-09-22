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
import { PlayerFactionchangeAchievementService } from "../playerFactionchangeAchievement.service";
import { PlayerFactionchangeAchievementCreateInput } from "./PlayerFactionchangeAchievementCreateInput";
import { PlayerFactionchangeAchievementWhereInput } from "./PlayerFactionchangeAchievementWhereInput";
import { PlayerFactionchangeAchievementWhereUniqueInput } from "./PlayerFactionchangeAchievementWhereUniqueInput";
import { PlayerFactionchangeAchievementFindManyArgs } from "./PlayerFactionchangeAchievementFindManyArgs";
import { PlayerFactionchangeAchievementUpdateInput } from "./PlayerFactionchangeAchievementUpdateInput";
import { PlayerFactionchangeAchievement } from "./PlayerFactionchangeAchievement";

export class PlayerFactionchangeAchievementGrpcControllerBase {
  constructor(
    protected readonly service: PlayerFactionchangeAchievementService
  ) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PlayerFactionchangeAchievement })
  @GrpcMethod(
    "PlayerFactionchangeAchievementService",
    "createPlayerFactionchangeAchievement"
  )
  async createPlayerFactionchangeAchievement(
    @common.Body() data: PlayerFactionchangeAchievementCreateInput
  ): Promise<PlayerFactionchangeAchievement> {
    return await this.service.createPlayerFactionchangeAchievement({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [PlayerFactionchangeAchievement] })
  @ApiNestedQuery(PlayerFactionchangeAchievementFindManyArgs)
  @GrpcMethod(
    "PlayerFactionchangeAchievementService",
    "playerFactionchangeAchievements"
  )
  async playerFactionchangeAchievements(
    @common.Req() request: Request
  ): Promise<PlayerFactionchangeAchievement[]> {
    const args = plainToClass(
      PlayerFactionchangeAchievementFindManyArgs,
      request.query
    );
    return this.service.playerFactionchangeAchievements({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PlayerFactionchangeAchievement })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod(
    "PlayerFactionchangeAchievementService",
    "playerFactionchangeAchievement"
  )
  async playerFactionchangeAchievement(
    @common.Param() params: PlayerFactionchangeAchievementWhereUniqueInput
  ): Promise<PlayerFactionchangeAchievement | null> {
    const result = await this.service.playerFactionchangeAchievement({
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
  @swagger.ApiOkResponse({ type: PlayerFactionchangeAchievement })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod(
    "PlayerFactionchangeAchievementService",
    "updatePlayerFactionchangeAchievement"
  )
  async updatePlayerFactionchangeAchievement(
    @common.Param() params: PlayerFactionchangeAchievementWhereUniqueInput,
    @common.Body() data: PlayerFactionchangeAchievementUpdateInput
  ): Promise<PlayerFactionchangeAchievement | null> {
    try {
      return await this.service.updatePlayerFactionchangeAchievement({
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
  @swagger.ApiOkResponse({ type: PlayerFactionchangeAchievement })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod(
    "PlayerFactionchangeAchievementService",
    "deletePlayerFactionchangeAchievement"
  )
  async deletePlayerFactionchangeAchievement(
    @common.Param() params: PlayerFactionchangeAchievementWhereUniqueInput
  ): Promise<PlayerFactionchangeAchievement | null> {
    try {
      return await this.service.deletePlayerFactionchangeAchievement({
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
