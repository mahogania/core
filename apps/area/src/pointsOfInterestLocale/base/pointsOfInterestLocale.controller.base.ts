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
import { PointsOfInterestLocaleService } from "../pointsOfInterestLocale.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PointsOfInterestLocaleCreateInput } from "./PointsOfInterestLocaleCreateInput";
import { PointsOfInterestLocale } from "./PointsOfInterestLocale";
import { PointsOfInterestLocaleFindManyArgs } from "./PointsOfInterestLocaleFindManyArgs";
import { PointsOfInterestLocaleWhereUniqueInput } from "./PointsOfInterestLocaleWhereUniqueInput";
import { PointsOfInterestLocaleUpdateInput } from "./PointsOfInterestLocaleUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PointsOfInterestLocaleControllerBase {
  constructor(
    protected readonly service: PointsOfInterestLocaleService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PointsOfInterestLocale })
  @nestAccessControl.UseRoles({
    resource: "PointsOfInterestLocale",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: PointsOfInterestLocaleCreateInput,
  })
  async createPointsOfInterestLocale(
    @common.Body() data: PointsOfInterestLocaleCreateInput
  ): Promise<PointsOfInterestLocale> {
    return await this.service.createPointsOfInterestLocale({
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
  @swagger.ApiOkResponse({ type: [PointsOfInterestLocale] })
  @ApiNestedQuery(PointsOfInterestLocaleFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "PointsOfInterestLocale",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async pointsOfInterestLocales(
    @common.Req() request: Request
  ): Promise<PointsOfInterestLocale[]> {
    const args = plainToClass(
      PointsOfInterestLocaleFindManyArgs,
      request.query
    );
    return this.service.pointsOfInterestLocales({
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
  @swagger.ApiOkResponse({ type: PointsOfInterestLocale })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PointsOfInterestLocale",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async pointsOfInterestLocale(
    @common.Param() params: PointsOfInterestLocaleWhereUniqueInput
  ): Promise<PointsOfInterestLocale | null> {
    const result = await this.service.pointsOfInterestLocale({
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
  @swagger.ApiOkResponse({ type: PointsOfInterestLocale })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PointsOfInterestLocale",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: PointsOfInterestLocaleUpdateInput,
  })
  async updatePointsOfInterestLocale(
    @common.Param() params: PointsOfInterestLocaleWhereUniqueInput,
    @common.Body() data: PointsOfInterestLocaleUpdateInput
  ): Promise<PointsOfInterestLocale | null> {
    try {
      return await this.service.updatePointsOfInterestLocale({
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
  @swagger.ApiOkResponse({ type: PointsOfInterestLocale })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PointsOfInterestLocale",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deletePointsOfInterestLocale(
    @common.Param() params: PointsOfInterestLocaleWhereUniqueInput
  ): Promise<PointsOfInterestLocale | null> {
    try {
      return await this.service.deletePointsOfInterestLocale({
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