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
import { AchievementRewardService } from "../achievementReward.service";
import { AchievementRewardCreateInput } from "./AchievementRewardCreateInput";
import { AchievementRewardWhereInput } from "./AchievementRewardWhereInput";
import { AchievementRewardWhereUniqueInput } from "./AchievementRewardWhereUniqueInput";
import { AchievementRewardFindManyArgs } from "./AchievementRewardFindManyArgs";
import { AchievementRewardUpdateInput } from "./AchievementRewardUpdateInput";
import { AchievementReward } from "./AchievementReward";
import { AchievementFindManyArgs } from "../../achievement/base/AchievementFindManyArgs";
import { Achievement } from "../../achievement/base/Achievement";
import { AchievementWhereUniqueInput } from "../../achievement/base/AchievementWhereUniqueInput";

export class AchievementRewardGrpcControllerBase {
  constructor(protected readonly service: AchievementRewardService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: AchievementReward })
  @GrpcMethod("AchievementRewardService", "createAchievementReward")
  async createAchievementReward(
    @common.Body() data: AchievementRewardCreateInput
  ): Promise<AchievementReward> {
    return await this.service.createAchievementReward({
      data: {
        ...data,

        achievementRewardLocales: data.achievementRewardLocales
          ? {
              connect: data.achievementRewardLocales,
            }
          : undefined,
      },
      select: {
        achievementRewardLocales: {
          select: {
            id: true,
          },
        },

        body: true,
        createdAt: true,
        id: true,
        itemId: true,
        mailTemplateId: true,
        sender: true,
        subject: true,
        titleA: true,
        titleH: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [AchievementReward] })
  @ApiNestedQuery(AchievementRewardFindManyArgs)
  @GrpcMethod("AchievementRewardService", "achievementRewards")
  async achievementRewards(
    @common.Req() request: Request
  ): Promise<AchievementReward[]> {
    const args = plainToClass(AchievementRewardFindManyArgs, request.query);
    return this.service.achievementRewards({
      ...args,
      select: {
        achievementRewardLocales: {
          select: {
            id: true,
          },
        },

        body: true,
        createdAt: true,
        id: true,
        itemId: true,
        mailTemplateId: true,
        sender: true,
        subject: true,
        titleA: true,
        titleH: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: AchievementReward })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("AchievementRewardService", "achievementReward")
  async achievementReward(
    @common.Param() params: AchievementRewardWhereUniqueInput
  ): Promise<AchievementReward | null> {
    const result = await this.service.achievementReward({
      where: params,
      select: {
        achievementRewardLocales: {
          select: {
            id: true,
          },
        },

        body: true,
        createdAt: true,
        id: true,
        itemId: true,
        mailTemplateId: true,
        sender: true,
        subject: true,
        titleA: true,
        titleH: true,
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
  @swagger.ApiOkResponse({ type: AchievementReward })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("AchievementRewardService", "updateAchievementReward")
  async updateAchievementReward(
    @common.Param() params: AchievementRewardWhereUniqueInput,
    @common.Body() data: AchievementRewardUpdateInput
  ): Promise<AchievementReward | null> {
    try {
      return await this.service.updateAchievementReward({
        where: params,
        data: {
          ...data,

          achievementRewardLocales: data.achievementRewardLocales
            ? {
                connect: data.achievementRewardLocales,
              }
            : undefined,
        },
        select: {
          achievementRewardLocales: {
            select: {
              id: true,
            },
          },

          body: true,
          createdAt: true,
          id: true,
          itemId: true,
          mailTemplateId: true,
          sender: true,
          subject: true,
          titleA: true,
          titleH: true,
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
  @swagger.ApiOkResponse({ type: AchievementReward })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("AchievementRewardService", "deleteAchievementReward")
  async deleteAchievementReward(
    @common.Param() params: AchievementRewardWhereUniqueInput
  ): Promise<AchievementReward | null> {
    try {
      return await this.service.deleteAchievementReward({
        where: params,
        select: {
          achievementRewardLocales: {
            select: {
              id: true,
            },
          },

          body: true,
          createdAt: true,
          id: true,
          itemId: true,
          mailTemplateId: true,
          sender: true,
          subject: true,
          titleA: true,
          titleH: true,
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

  @common.Get("/:id/achievements")
  @ApiNestedQuery(AchievementFindManyArgs)
  @GrpcMethod("AchievementRewardService", "findManyAchievements")
  async findManyAchievements(
    @common.Req() request: Request,
    @common.Param() params: AchievementRewardWhereUniqueInput
  ): Promise<Achievement[]> {
    const query = plainToClass(AchievementFindManyArgs, request.query);
    const results = await this.service.findAchievements(params.id, {
      ...query,
      select: {
        achievementRewards: {
          select: {
            id: true,
          },
        },

        count: true,
        createdAt: true,
        flags: true,
        id: true,
        map: true,

        player: {
          select: {
            id: true,
          },
        },

        points: true,
        refAchievement: true,
        requiredFaction: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/achievements")
  @GrpcMethod("AchievementRewardService", "connectAchievements")
  async connectAchievements(
    @common.Param() params: AchievementRewardWhereUniqueInput,
    @common.Body() body: AchievementWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      achievements: {
        connect: body,
      },
    };
    await this.service.updateAchievementReward({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/achievements")
  @GrpcMethod("AchievementRewardService", "updateAchievements")
  async updateAchievements(
    @common.Param() params: AchievementRewardWhereUniqueInput,
    @common.Body() body: AchievementWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      achievements: {
        set: body,
      },
    };
    await this.service.updateAchievementReward({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/achievements")
  @GrpcMethod("AchievementRewardService", "disconnectAchievements")
  async disconnectAchievements(
    @common.Param() params: AchievementRewardWhereUniqueInput,
    @common.Body() body: AchievementWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      achievements: {
        disconnect: body,
      },
    };
    await this.service.updateAchievementReward({
      where: params,
      data,
      select: { id: true },
    });
  }
}
