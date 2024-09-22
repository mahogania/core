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
import { LfgDungeonRewardsService } from "../lfgDungeonRewards.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { LfgDungeonRewardsCreateInput } from "./LfgDungeonRewardsCreateInput";
import { LfgDungeonRewards } from "./LfgDungeonRewards";
import { LfgDungeonRewardsFindManyArgs } from "./LfgDungeonRewardsFindManyArgs";
import { LfgDungeonRewardsWhereUniqueInput } from "./LfgDungeonRewardsWhereUniqueInput";
import { LfgDungeonRewardsUpdateInput } from "./LfgDungeonRewardsUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class LfgDungeonRewardsControllerBase {
  constructor(
    protected readonly service: LfgDungeonRewardsService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: LfgDungeonRewards })
  @nestAccessControl.UseRoles({
    resource: "LfgDungeonRewards",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: LfgDungeonRewardsCreateInput,
  })
  async createLfgDungeonRewards(
    @common.Body() data: LfgDungeonRewardsCreateInput
  ): Promise<LfgDungeonRewards> {
    return await this.service.createLfgDungeonRewards({
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
  @swagger.ApiOkResponse({ type: [LfgDungeonRewards] })
  @ApiNestedQuery(LfgDungeonRewardsFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "LfgDungeonRewards",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async lfgDungeonRewardsItems(
    @common.Req() request: Request
  ): Promise<LfgDungeonRewards[]> {
    const args = plainToClass(LfgDungeonRewardsFindManyArgs, request.query);
    return this.service.lfgDungeonRewardsItems({
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
  @swagger.ApiOkResponse({ type: LfgDungeonRewards })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "LfgDungeonRewards",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async lfgDungeonRewards(
    @common.Param() params: LfgDungeonRewardsWhereUniqueInput
  ): Promise<LfgDungeonRewards | null> {
    const result = await this.service.lfgDungeonRewards({
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
  @swagger.ApiOkResponse({ type: LfgDungeonRewards })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "LfgDungeonRewards",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: LfgDungeonRewardsUpdateInput,
  })
  async updateLfgDungeonRewards(
    @common.Param() params: LfgDungeonRewardsWhereUniqueInput,
    @common.Body() data: LfgDungeonRewardsUpdateInput
  ): Promise<LfgDungeonRewards | null> {
    try {
      return await this.service.updateLfgDungeonRewards({
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
  @swagger.ApiOkResponse({ type: LfgDungeonRewards })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "LfgDungeonRewards",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteLfgDungeonRewards(
    @common.Param() params: LfgDungeonRewardsWhereUniqueInput
  ): Promise<LfgDungeonRewards | null> {
    try {
      return await this.service.deleteLfgDungeonRewards({
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
