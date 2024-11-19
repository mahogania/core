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
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { AchievementService } from "../achievement.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AchievementCreateInput } from "./AchievementCreateInput";
import { Achievement } from "./Achievement";
import { AchievementFindManyArgs } from "./AchievementFindManyArgs";
import { AchievementWhereUniqueInput } from "./AchievementWhereUniqueInput";
import { AchievementUpdateInput } from "./AchievementUpdateInput";
import { AchievementBehaviourFindManyArgs } from "../../achievementBehaviour/base/AchievementBehaviourFindManyArgs";
import { AchievementBehaviour } from "../../achievementBehaviour/base/AchievementBehaviour";
import { AchievementBehaviourWhereUniqueInput } from "../../achievementBehaviour/base/AchievementBehaviourWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class AchievementControllerBase {
  constructor(
    protected readonly service: AchievementService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Achievement })
  @nestAccessControl.UseRoles({
    resource: "Achievement",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: AchievementCreateInput,
  })
  async createAchievement(
    @common.Body() data: AchievementCreateInput
  ): Promise<Achievement> {
    return await this.service.createAchievement({
      data: {
        ...data,

        achievementRewards: {
          connect: data.achievementRewards,
        },

        player: data.player
          ? {
              connect: data.player,
            }
          : undefined,
      },
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Achievement] })
  @ApiNestedQuery(AchievementFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Achievement",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async achievements(@common.Req() request: Request): Promise<Achievement[]> {
    const args = plainToClass(AchievementFindManyArgs, request.query);
    return this.service.achievements({
      ...args,
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
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Achievement })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Achievement",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async achievement(
    @common.Param() params: AchievementWhereUniqueInput
  ): Promise<Achievement | null> {
    const result = await this.service.achievement({
      where: params,
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
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Achievement })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Achievement",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: AchievementUpdateInput,
  })
  async updateAchievement(
    @common.Param() params: AchievementWhereUniqueInput,
    @common.Body() data: AchievementUpdateInput
  ): Promise<Achievement | null> {
    try {
      return await this.service.updateAchievement({
        where: params,
        data: {
          ...data,

          achievementRewards: {
            connect: data.achievementRewards,
          },

          player: data.player
            ? {
                connect: data.player,
              }
            : undefined,
        },
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
  @swagger.ApiOkResponse({ type: Achievement })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Achievement",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteAchievement(
    @common.Param() params: AchievementWhereUniqueInput
  ): Promise<Achievement | null> {
    try {
      return await this.service.deleteAchievement({
        where: params,
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
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/achievementBehaviours")
  @ApiNestedQuery(AchievementBehaviourFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "AchievementBehaviour",
    action: "read",
    possession: "any",
  })
  async findAchievementBehaviours(
    @common.Req() request: Request,
    @common.Param() params: AchievementWhereUniqueInput
  ): Promise<AchievementBehaviour[]> {
    const query = plainToClass(AchievementBehaviourFindManyArgs, request.query);
    const results = await this.service.findAchievementBehaviours(params.id, {
      ...query,
      select: {
        achievement: {
          select: {
            id: true,
          },
        },

        behaviourName: true,
        createdAt: true,
        id: true,
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

  @common.Post("/:id/achievementBehaviours")
  @nestAccessControl.UseRoles({
    resource: "Achievement",
    action: "update",
    possession: "any",
  })
  async connectAchievementBehaviours(
    @common.Param() params: AchievementWhereUniqueInput,
    @common.Body() body: AchievementBehaviourWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      achievementBehaviours: {
        connect: body,
      },
    };
    await this.service.updateAchievement({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/achievementBehaviours")
  @nestAccessControl.UseRoles({
    resource: "Achievement",
    action: "update",
    possession: "any",
  })
  async updateAchievementBehaviours(
    @common.Param() params: AchievementWhereUniqueInput,
    @common.Body() body: AchievementBehaviourWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      achievementBehaviours: {
        set: body,
      },
    };
    await this.service.updateAchievement({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/achievementBehaviours")
  @nestAccessControl.UseRoles({
    resource: "Achievement",
    action: "update",
    possession: "any",
  })
  async disconnectAchievementBehaviours(
    @common.Param() params: AchievementWhereUniqueInput,
    @common.Body() body: AchievementBehaviourWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      achievementBehaviours: {
        disconnect: body,
      },
    };
    await this.service.updateAchievement({
      where: params,
      data,
      select: { id: true },
    });
  }
}