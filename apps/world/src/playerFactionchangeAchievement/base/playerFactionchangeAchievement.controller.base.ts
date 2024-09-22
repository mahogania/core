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
import { PlayerFactionchangeAchievementService } from "../playerFactionchangeAchievement.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PlayerFactionchangeAchievementCreateInput } from "./PlayerFactionchangeAchievementCreateInput";
import { PlayerFactionchangeAchievement } from "./PlayerFactionchangeAchievement";
import { PlayerFactionchangeAchievementFindManyArgs } from "./PlayerFactionchangeAchievementFindManyArgs";
import { PlayerFactionchangeAchievementWhereUniqueInput } from "./PlayerFactionchangeAchievementWhereUniqueInput";
import { PlayerFactionchangeAchievementUpdateInput } from "./PlayerFactionchangeAchievementUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PlayerFactionchangeAchievementControllerBase {
  constructor(
    protected readonly service: PlayerFactionchangeAchievementService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PlayerFactionchangeAchievement })
  @nestAccessControl.UseRoles({
    resource: "PlayerFactionchangeAchievement",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: PlayerFactionchangeAchievementCreateInput,
  })
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [PlayerFactionchangeAchievement] })
  @ApiNestedQuery(PlayerFactionchangeAchievementFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "PlayerFactionchangeAchievement",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PlayerFactionchangeAchievement })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PlayerFactionchangeAchievement",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
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

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: PlayerFactionchangeAchievement })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PlayerFactionchangeAchievement",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: PlayerFactionchangeAchievementUpdateInput,
  })
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
  @nestAccessControl.UseRoles({
    resource: "PlayerFactionchangeAchievement",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
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
