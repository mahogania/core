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
import { QuestPoolMembersService } from "../questPoolMembers.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { QuestPoolMembersCreateInput } from "./QuestPoolMembersCreateInput";
import { QuestPoolMembers } from "./QuestPoolMembers";
import { QuestPoolMembersFindManyArgs } from "./QuestPoolMembersFindManyArgs";
import { QuestPoolMembersWhereUniqueInput } from "./QuestPoolMembersWhereUniqueInput";
import { QuestPoolMembersUpdateInput } from "./QuestPoolMembersUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class QuestPoolMembersControllerBase {
  constructor(
    protected readonly service: QuestPoolMembersService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: QuestPoolMembers })
  @nestAccessControl.UseRoles({
    resource: "QuestPoolMembers",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: QuestPoolMembersCreateInput,
  })
  async createQuestPoolMembers(
    @common.Body() data: QuestPoolMembersCreateInput
  ): Promise<QuestPoolMembers> {
    return await this.service.createQuestPoolMembers({
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
  @swagger.ApiOkResponse({ type: [QuestPoolMembers] })
  @ApiNestedQuery(QuestPoolMembersFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "QuestPoolMembers",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async questPoolMembersItems(
    @common.Req() request: Request
  ): Promise<QuestPoolMembers[]> {
    const args = plainToClass(QuestPoolMembersFindManyArgs, request.query);
    return this.service.questPoolMembersItems({
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
  @swagger.ApiOkResponse({ type: QuestPoolMembers })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "QuestPoolMembers",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async questPoolMembers(
    @common.Param() params: QuestPoolMembersWhereUniqueInput
  ): Promise<QuestPoolMembers | null> {
    const result = await this.service.questPoolMembers({
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
  @swagger.ApiOkResponse({ type: QuestPoolMembers })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "QuestPoolMembers",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: QuestPoolMembersUpdateInput,
  })
  async updateQuestPoolMembers(
    @common.Param() params: QuestPoolMembersWhereUniqueInput,
    @common.Body() data: QuestPoolMembersUpdateInput
  ): Promise<QuestPoolMembers | null> {
    try {
      return await this.service.updateQuestPoolMembers({
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
  @swagger.ApiOkResponse({ type: QuestPoolMembers })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "QuestPoolMembers",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteQuestPoolMembers(
    @common.Param() params: QuestPoolMembersWhereUniqueInput
  ): Promise<QuestPoolMembers | null> {
    try {
      return await this.service.deleteQuestPoolMembers({
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
