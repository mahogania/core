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
import { QuestMailSenderService } from "../questMailSender.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { QuestMailSenderCreateInput } from "./QuestMailSenderCreateInput";
import { QuestMailSender } from "./QuestMailSender";
import { QuestMailSenderFindManyArgs } from "./QuestMailSenderFindManyArgs";
import { QuestMailSenderWhereUniqueInput } from "./QuestMailSenderWhereUniqueInput";
import { QuestMailSenderUpdateInput } from "./QuestMailSenderUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class QuestMailSenderControllerBase {
  constructor(
    protected readonly service: QuestMailSenderService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: QuestMailSender })
  @nestAccessControl.UseRoles({
    resource: "QuestMailSender",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: QuestMailSenderCreateInput,
  })
  async createQuestMailSender(
    @common.Body() data: QuestMailSenderCreateInput
  ): Promise<QuestMailSender> {
    return await this.service.createQuestMailSender({
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
  @swagger.ApiOkResponse({ type: [QuestMailSender] })
  @ApiNestedQuery(QuestMailSenderFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "QuestMailSender",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async questMailSenders(
    @common.Req() request: Request
  ): Promise<QuestMailSender[]> {
    const args = plainToClass(QuestMailSenderFindManyArgs, request.query);
    return this.service.questMailSenders({
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
  @swagger.ApiOkResponse({ type: QuestMailSender })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "QuestMailSender",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async questMailSender(
    @common.Param() params: QuestMailSenderWhereUniqueInput
  ): Promise<QuestMailSender | null> {
    const result = await this.service.questMailSender({
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
  @swagger.ApiOkResponse({ type: QuestMailSender })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "QuestMailSender",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: QuestMailSenderUpdateInput,
  })
  async updateQuestMailSender(
    @common.Param() params: QuestMailSenderWhereUniqueInput,
    @common.Body() data: QuestMailSenderUpdateInput
  ): Promise<QuestMailSender | null> {
    try {
      return await this.service.updateQuestMailSender({
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
  @swagger.ApiOkResponse({ type: QuestMailSender })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "QuestMailSender",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteQuestMailSender(
    @common.Param() params: QuestMailSenderWhereUniqueInput
  ): Promise<QuestMailSender | null> {
    try {
      return await this.service.deleteQuestMailSender({
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