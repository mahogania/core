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
import { PlayerXpForLevelService } from "../playerXpForLevel.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PlayerXpForLevelCreateInput } from "./PlayerXpForLevelCreateInput";
import { PlayerXpForLevel } from "./PlayerXpForLevel";
import { PlayerXpForLevelFindManyArgs } from "./PlayerXpForLevelFindManyArgs";
import { PlayerXpForLevelWhereUniqueInput } from "./PlayerXpForLevelWhereUniqueInput";
import { PlayerXpForLevelUpdateInput } from "./PlayerXpForLevelUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PlayerXpForLevelControllerBase {
  constructor(
    protected readonly service: PlayerXpForLevelService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PlayerXpForLevel })
  @nestAccessControl.UseRoles({
    resource: "PlayerXpForLevel",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: PlayerXpForLevelCreateInput,
  })
  async createPlayerXpForLevel(
    @common.Body() data: PlayerXpForLevelCreateInput
  ): Promise<PlayerXpForLevel> {
    return await this.service.createPlayerXpForLevel({
      data: {
        ...data,

        player: data.player
          ? {
              connect: data.player,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,

        player: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [PlayerXpForLevel] })
  @ApiNestedQuery(PlayerXpForLevelFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "PlayerXpForLevel",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async playerXpForLevels(
    @common.Req() request: Request
  ): Promise<PlayerXpForLevel[]> {
    const args = plainToClass(PlayerXpForLevelFindManyArgs, request.query);
    return this.service.playerXpForLevels({
      ...args,
      select: {
        createdAt: true,
        id: true,

        player: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: PlayerXpForLevel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PlayerXpForLevel",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async playerXpForLevel(
    @common.Param() params: PlayerXpForLevelWhereUniqueInput
  ): Promise<PlayerXpForLevel | null> {
    const result = await this.service.playerXpForLevel({
      where: params,
      select: {
        createdAt: true,
        id: true,

        player: {
          select: {
            id: true,
          },
        },

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
  @swagger.ApiOkResponse({ type: PlayerXpForLevel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PlayerXpForLevel",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: PlayerXpForLevelUpdateInput,
  })
  async updatePlayerXpForLevel(
    @common.Param() params: PlayerXpForLevelWhereUniqueInput,
    @common.Body() data: PlayerXpForLevelUpdateInput
  ): Promise<PlayerXpForLevel | null> {
    try {
      return await this.service.updatePlayerXpForLevel({
        where: params,
        data: {
          ...data,

          player: data.player
            ? {
                connect: data.player,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,

          player: {
            select: {
              id: true,
            },
          },

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
  @swagger.ApiOkResponse({ type: PlayerXpForLevel })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PlayerXpForLevel",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deletePlayerXpForLevel(
    @common.Param() params: PlayerXpForLevelWhereUniqueInput
  ): Promise<PlayerXpForLevel | null> {
    try {
      return await this.service.deletePlayerXpForLevel({
        where: params,
        select: {
          createdAt: true,
          id: true,

          player: {
            select: {
              id: true,
            },
          },

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