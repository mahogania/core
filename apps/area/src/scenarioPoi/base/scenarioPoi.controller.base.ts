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
import { ScenarioPoiService } from "../scenarioPoi.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ScenarioPoiCreateInput } from "./ScenarioPoiCreateInput";
import { ScenarioPoi } from "./ScenarioPoi";
import { ScenarioPoiFindManyArgs } from "./ScenarioPoiFindManyArgs";
import { ScenarioPoiWhereUniqueInput } from "./ScenarioPoiWhereUniqueInput";
import { ScenarioPoiUpdateInput } from "./ScenarioPoiUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ScenarioPoiControllerBase {
  constructor(
    protected readonly service: ScenarioPoiService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ScenarioPoi })
  @nestAccessControl.UseRoles({
    resource: "ScenarioPoi",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: ScenarioPoiCreateInput,
  })
  async createScenarioPoi(
    @common.Body() data: ScenarioPoiCreateInput
  ): Promise<ScenarioPoi> {
    return await this.service.createScenarioPoi({
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
  @swagger.ApiOkResponse({ type: [ScenarioPoi] })
  @ApiNestedQuery(ScenarioPoiFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ScenarioPoi",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async scenarioPois(@common.Req() request: Request): Promise<ScenarioPoi[]> {
    const args = plainToClass(ScenarioPoiFindManyArgs, request.query);
    return this.service.scenarioPois({
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
  @swagger.ApiOkResponse({ type: ScenarioPoi })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ScenarioPoi",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async scenarioPoi(
    @common.Param() params: ScenarioPoiWhereUniqueInput
  ): Promise<ScenarioPoi | null> {
    const result = await this.service.scenarioPoi({
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
  @swagger.ApiOkResponse({ type: ScenarioPoi })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ScenarioPoi",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: ScenarioPoiUpdateInput,
  })
  async updateScenarioPoi(
    @common.Param() params: ScenarioPoiWhereUniqueInput,
    @common.Body() data: ScenarioPoiUpdateInput
  ): Promise<ScenarioPoi | null> {
    try {
      return await this.service.updateScenarioPoi({
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
  @swagger.ApiOkResponse({ type: ScenarioPoi })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ScenarioPoi",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteScenarioPoi(
    @common.Param() params: ScenarioPoiWhereUniqueInput
  ): Promise<ScenarioPoi | null> {
    try {
      return await this.service.deleteScenarioPoi({
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
