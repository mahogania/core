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
import { GuildRewardsService } from "../guildRewards.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { GuildRewardsCreateInput } from "./GuildRewardsCreateInput";
import { GuildRewards } from "./GuildRewards";
import { GuildRewardsFindManyArgs } from "./GuildRewardsFindManyArgs";
import { GuildRewardsWhereUniqueInput } from "./GuildRewardsWhereUniqueInput";
import { GuildRewardsUpdateInput } from "./GuildRewardsUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class GuildRewardsControllerBase {
  constructor(
    protected readonly service: GuildRewardsService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: GuildRewards })
  @nestAccessControl.UseRoles({
    resource: "GuildRewards",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: GuildRewardsCreateInput,
  })
  async createGuildRewards(
    @common.Body() data: GuildRewardsCreateInput
  ): Promise<GuildRewards> {
    return await this.service.createGuildRewards({
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
  @swagger.ApiOkResponse({ type: [GuildRewards] })
  @ApiNestedQuery(GuildRewardsFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "GuildRewards",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async guildRewardsItems(
    @common.Req() request: Request
  ): Promise<GuildRewards[]> {
    const args = plainToClass(GuildRewardsFindManyArgs, request.query);
    return this.service.guildRewardsItems({
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
  @swagger.ApiOkResponse({ type: GuildRewards })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GuildRewards",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async guildRewards(
    @common.Param() params: GuildRewardsWhereUniqueInput
  ): Promise<GuildRewards | null> {
    const result = await this.service.guildRewards({
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
  @swagger.ApiOkResponse({ type: GuildRewards })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GuildRewards",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: GuildRewardsUpdateInput,
  })
  async updateGuildRewards(
    @common.Param() params: GuildRewardsWhereUniqueInput,
    @common.Body() data: GuildRewardsUpdateInput
  ): Promise<GuildRewards | null> {
    try {
      return await this.service.updateGuildRewards({
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
  @swagger.ApiOkResponse({ type: GuildRewards })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "GuildRewards",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteGuildRewards(
    @common.Param() params: GuildRewardsWhereUniqueInput
  ): Promise<GuildRewards | null> {
    try {
      return await this.service.deleteGuildRewards({
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
