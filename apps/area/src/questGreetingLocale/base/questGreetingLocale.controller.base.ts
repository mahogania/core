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
import { QuestGreetingLocaleService } from "../questGreetingLocale.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { QuestGreetingLocaleCreateInput } from "./QuestGreetingLocaleCreateInput";
import { QuestGreetingLocale } from "./QuestGreetingLocale";
import { QuestGreetingLocaleFindManyArgs } from "./QuestGreetingLocaleFindManyArgs";
import { QuestGreetingLocaleWhereUniqueInput } from "./QuestGreetingLocaleWhereUniqueInput";
import { QuestGreetingLocaleUpdateInput } from "./QuestGreetingLocaleUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class QuestGreetingLocaleControllerBase {
  constructor(
    protected readonly service: QuestGreetingLocaleService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: QuestGreetingLocale })
  @nestAccessControl.UseRoles({
    resource: "QuestGreetingLocale",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: QuestGreetingLocaleCreateInput,
  })
  async createQuestGreetingLocale(
    @common.Body() data: QuestGreetingLocaleCreateInput
  ): Promise<QuestGreetingLocale> {
    return await this.service.createQuestGreetingLocale({
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
  @swagger.ApiOkResponse({ type: [QuestGreetingLocale] })
  @ApiNestedQuery(QuestGreetingLocaleFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "QuestGreetingLocale",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async questGreetingLocales(
    @common.Req() request: Request
  ): Promise<QuestGreetingLocale[]> {
    const args = plainToClass(QuestGreetingLocaleFindManyArgs, request.query);
    return this.service.questGreetingLocales({
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
  @swagger.ApiOkResponse({ type: QuestGreetingLocale })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "QuestGreetingLocale",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async questGreetingLocale(
    @common.Param() params: QuestGreetingLocaleWhereUniqueInput
  ): Promise<QuestGreetingLocale | null> {
    const result = await this.service.questGreetingLocale({
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
  @swagger.ApiOkResponse({ type: QuestGreetingLocale })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "QuestGreetingLocale",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: QuestGreetingLocaleUpdateInput,
  })
  async updateQuestGreetingLocale(
    @common.Param() params: QuestGreetingLocaleWhereUniqueInput,
    @common.Body() data: QuestGreetingLocaleUpdateInput
  ): Promise<QuestGreetingLocale | null> {
    try {
      return await this.service.updateQuestGreetingLocale({
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
  @swagger.ApiOkResponse({ type: QuestGreetingLocale })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "QuestGreetingLocale",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteQuestGreetingLocale(
    @common.Param() params: QuestGreetingLocaleWhereUniqueInput
  ): Promise<QuestGreetingLocale | null> {
    try {
      return await this.service.deleteQuestGreetingLocale({
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