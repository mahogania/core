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
import { PointsOfInterestService } from "../pointsOfInterest.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PointsOfInterestCreateInput } from "./PointsOfInterestCreateInput";
import { PointsOfInterest } from "./PointsOfInterest";
import { PointsOfInterestFindManyArgs } from "./PointsOfInterestFindManyArgs";
import { PointsOfInterestWhereUniqueInput } from "./PointsOfInterestWhereUniqueInput";
import { PointsOfInterestUpdateInput } from "./PointsOfInterestUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PointsOfInterestControllerBase {
  constructor(
    protected readonly service: PointsOfInterestService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PointsOfInterest })
  @nestAccessControl.UseRoles({
    resource: "PointsOfInterest",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: PointsOfInterestCreateInput,
  })
  async createPointsOfInterest(
    @common.Body() data: PointsOfInterestCreateInput
  ): Promise<PointsOfInterest> {
    return await this.service.createPointsOfInterest({
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
  @swagger.ApiOkResponse({ type: [PointsOfInterest] })
  @ApiNestedQuery(PointsOfInterestFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "PointsOfInterest",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async pointsOfInterests(
    @common.Req() request: Request
  ): Promise<PointsOfInterest[]> {
    const args = plainToClass(PointsOfInterestFindManyArgs, request.query);
    return this.service.pointsOfInterests({
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
  @swagger.ApiOkResponse({ type: PointsOfInterest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PointsOfInterest",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async pointsOfInterest(
    @common.Param() params: PointsOfInterestWhereUniqueInput
  ): Promise<PointsOfInterest | null> {
    const result = await this.service.pointsOfInterest({
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
  @swagger.ApiOkResponse({ type: PointsOfInterest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PointsOfInterest",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: PointsOfInterestUpdateInput,
  })
  async updatePointsOfInterest(
    @common.Param() params: PointsOfInterestWhereUniqueInput,
    @common.Body() data: PointsOfInterestUpdateInput
  ): Promise<PointsOfInterest | null> {
    try {
      return await this.service.updatePointsOfInterest({
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
  @swagger.ApiOkResponse({ type: PointsOfInterest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PointsOfInterest",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deletePointsOfInterest(
    @common.Param() params: PointsOfInterestWhereUniqueInput
  ): Promise<PointsOfInterest | null> {
    try {
      return await this.service.deletePointsOfInterest({
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
