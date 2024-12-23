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
import { AchievementRewardLocaleService } from "../achievementRewardLocale.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AchievementRewardLocaleCreateInput } from "./AchievementRewardLocaleCreateInput";
import { AchievementRewardLocale } from "./AchievementRewardLocale";
import { AchievementRewardLocaleFindManyArgs } from "./AchievementRewardLocaleFindManyArgs";
import { AchievementRewardLocaleWhereUniqueInput } from "./AchievementRewardLocaleWhereUniqueInput";
import { AchievementRewardLocaleUpdateInput } from "./AchievementRewardLocaleUpdateInput";
import { AchievementRewardFindManyArgs } from "../../achievementReward/base/AchievementRewardFindManyArgs";
import { AchievementReward } from "../../achievementReward/base/AchievementReward";
import { AchievementRewardWhereUniqueInput } from "../../achievementReward/base/AchievementRewardWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class AchievementRewardLocaleControllerBase {
  constructor(
    protected readonly service: AchievementRewardLocaleService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: AchievementRewardLocale })
  @nestAccessControl.UseRoles({
    resource: "AchievementRewardLocale",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: AchievementRewardLocaleCreateInput,
  })
  async createAchievementRewardLocale(
    @common.Body() data: AchievementRewardLocaleCreateInput
  ): Promise<AchievementRewardLocale> {
    return await this.service.createAchievementRewardLocale({
      data: data,
      select: {
        body: true,
        createdAt: true,
        id: true,
        locale: true,
        subject: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [AchievementRewardLocale] })
  @ApiNestedQuery(AchievementRewardLocaleFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "AchievementRewardLocale",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async achievementRewardLocales(
    @common.Req() request: Request
  ): Promise<AchievementRewardLocale[]> {
    const args = plainToClass(
      AchievementRewardLocaleFindManyArgs,
      request.query
    );
    return this.service.achievementRewardLocales({
      ...args,
      select: {
        body: true,
        createdAt: true,
        id: true,
        locale: true,
        subject: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: AchievementRewardLocale })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "AchievementRewardLocale",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async achievementRewardLocale(
    @common.Param() params: AchievementRewardLocaleWhereUniqueInput
  ): Promise<AchievementRewardLocale | null> {
    const result = await this.service.achievementRewardLocale({
      where: params,
      select: {
        body: true,
        createdAt: true,
        id: true,
        locale: true,
        subject: true,
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
  @swagger.ApiOkResponse({ type: AchievementRewardLocale })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "AchievementRewardLocale",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: AchievementRewardLocaleUpdateInput,
  })
  async updateAchievementRewardLocale(
    @common.Param() params: AchievementRewardLocaleWhereUniqueInput,
    @common.Body() data: AchievementRewardLocaleUpdateInput
  ): Promise<AchievementRewardLocale | null> {
    try {
      return await this.service.updateAchievementRewardLocale({
        where: params,
        data: data,
        select: {
          body: true,
          createdAt: true,
          id: true,
          locale: true,
          subject: true,
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
  @swagger.ApiOkResponse({ type: AchievementRewardLocale })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "AchievementRewardLocale",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteAchievementRewardLocale(
    @common.Param() params: AchievementRewardLocaleWhereUniqueInput
  ): Promise<AchievementRewardLocale | null> {
    try {
      return await this.service.deleteAchievementRewardLocale({
        where: params,
        select: {
          body: true,
          createdAt: true,
          id: true,
          locale: true,
          subject: true,
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
  @common.Get("/:id/achievementRewards")
  @ApiNestedQuery(AchievementRewardFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "AchievementReward",
    action: "read",
    possession: "any",
  })
  async findAchievementRewards(
    @common.Req() request: Request,
    @common.Param() params: AchievementRewardLocaleWhereUniqueInput
  ): Promise<AchievementReward[]> {
    const query = plainToClass(AchievementRewardFindManyArgs, request.query);
    const results = await this.service.findAchievementRewards(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/achievementRewards")
  @nestAccessControl.UseRoles({
    resource: "AchievementRewardLocale",
    action: "update",
    possession: "any",
  })
  async connectAchievementRewards(
    @common.Param() params: AchievementRewardLocaleWhereUniqueInput,
    @common.Body() body: AchievementRewardWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      achievementRewards: {
        connect: body,
      },
    };
    await this.service.updateAchievementRewardLocale({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/achievementRewards")
  @nestAccessControl.UseRoles({
    resource: "AchievementRewardLocale",
    action: "update",
    possession: "any",
  })
  async updateAchievementRewards(
    @common.Param() params: AchievementRewardLocaleWhereUniqueInput,
    @common.Body() body: AchievementRewardWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      achievementRewards: {
        set: body,
      },
    };
    await this.service.updateAchievementRewardLocale({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/achievementRewards")
  @nestAccessControl.UseRoles({
    resource: "AchievementRewardLocale",
    action: "update",
    possession: "any",
  })
  async disconnectAchievementRewards(
    @common.Param() params: AchievementRewardLocaleWhereUniqueInput,
    @common.Body() body: AchievementRewardWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      achievementRewards: {
        disconnect: body,
      },
    };
    await this.service.updateAchievementRewardLocale({
      where: params,
      data,
      select: { id: true },
    });
  }
}
