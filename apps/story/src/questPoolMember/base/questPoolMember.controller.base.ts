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
import { QuestPoolMemberService } from "../questPoolMember.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { QuestPoolMemberCreateInput } from "./QuestPoolMemberCreateInput";
import { QuestPoolMember } from "./QuestPoolMember";
import { QuestPoolMemberFindManyArgs } from "./QuestPoolMemberFindManyArgs";
import { QuestPoolMemberWhereUniqueInput } from "./QuestPoolMemberWhereUniqueInput";
import { QuestPoolMemberUpdateInput } from "./QuestPoolMemberUpdateInput";
import { QuestPoolFindManyArgs } from "../../questPool/base/QuestPoolFindManyArgs";
import { QuestPool } from "../../questPool/base/QuestPool";
import { QuestPoolWhereUniqueInput } from "../../questPool/base/QuestPoolWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class QuestPoolMemberControllerBase {
  constructor(
    protected readonly service: QuestPoolMemberService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: QuestPoolMember })
  @nestAccessControl.UseRoles({
    resource: "QuestPoolMember",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: QuestPoolMemberCreateInput,
  })
  async createQuestPoolMember(
    @common.Body() data: QuestPoolMemberCreateInput
  ): Promise<QuestPoolMember> {
    return await this.service.createQuestPoolMember({
      data: {
        ...data,

        poolMember: {
          connect: data.poolMember,
        },
      },
      select: {
        createdAt: true,
        id: true,

        poolMember: {
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
  @swagger.ApiOkResponse({ type: [QuestPoolMember] })
  @ApiNestedQuery(QuestPoolMemberFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "QuestPoolMember",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async questPoolMembers(
    @common.Req() request: Request
  ): Promise<QuestPoolMember[]> {
    const args = plainToClass(QuestPoolMemberFindManyArgs, request.query);
    return this.service.questPoolMembers({
      ...args,
      select: {
        createdAt: true,
        id: true,

        poolMember: {
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
  @swagger.ApiOkResponse({ type: QuestPoolMember })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "QuestPoolMember",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async questPoolMember(
    @common.Param() params: QuestPoolMemberWhereUniqueInput
  ): Promise<QuestPoolMember | null> {
    const result = await this.service.questPoolMember({
      where: params,
      select: {
        createdAt: true,
        id: true,

        poolMember: {
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
  @swagger.ApiOkResponse({ type: QuestPoolMember })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "QuestPoolMember",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: QuestPoolMemberUpdateInput,
  })
  async updateQuestPoolMember(
    @common.Param() params: QuestPoolMemberWhereUniqueInput,
    @common.Body() data: QuestPoolMemberUpdateInput
  ): Promise<QuestPoolMember | null> {
    try {
      return await this.service.updateQuestPoolMember({
        where: params,
        data: {
          ...data,

          poolMember: {
            connect: data.poolMember,
          },
        },
        select: {
          createdAt: true,
          id: true,

          poolMember: {
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
  @swagger.ApiOkResponse({ type: QuestPoolMember })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "QuestPoolMember",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteQuestPoolMember(
    @common.Param() params: QuestPoolMemberWhereUniqueInput
  ): Promise<QuestPoolMember | null> {
    try {
      return await this.service.deleteQuestPoolMember({
        where: params,
        select: {
          createdAt: true,
          id: true,

          poolMember: {
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/questPoolTemplates")
  @ApiNestedQuery(QuestPoolFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "QuestPool",
    action: "read",
    possession: "any",
  })
  async findQuestPoolTemplates(
    @common.Req() request: Request,
    @common.Param() params: QuestPoolMemberWhereUniqueInput
  ): Promise<QuestPool[]> {
    const query = plainToClass(QuestPoolFindManyArgs, request.query);
    const results = await this.service.findQuestPoolTemplates(params.id, {
      ...query,
      select: {
        createdAt: true,
        id: true,

        pool: {
          select: {
            id: true,
          },
        },

        questPoolMembers: {
          select: {
            id: true,
          },
        },

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

  @common.Post("/:id/questPoolTemplates")
  @nestAccessControl.UseRoles({
    resource: "QuestPoolMember",
    action: "update",
    possession: "any",
  })
  async connectQuestPoolTemplates(
    @common.Param() params: QuestPoolMemberWhereUniqueInput,
    @common.Body() body: QuestPoolWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      questPoolTemplates: {
        connect: body,
      },
    };
    await this.service.updateQuestPoolMember({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/questPoolTemplates")
  @nestAccessControl.UseRoles({
    resource: "QuestPoolMember",
    action: "update",
    possession: "any",
  })
  async updateQuestPoolTemplates(
    @common.Param() params: QuestPoolMemberWhereUniqueInput,
    @common.Body() body: QuestPoolWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      questPoolTemplates: {
        set: body,
      },
    };
    await this.service.updateQuestPoolMember({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/questPoolTemplates")
  @nestAccessControl.UseRoles({
    resource: "QuestPoolMember",
    action: "update",
    possession: "any",
  })
  async disconnectQuestPoolTemplates(
    @common.Param() params: QuestPoolMemberWhereUniqueInput,
    @common.Body() body: QuestPoolWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      questPoolTemplates: {
        disconnect: body,
      },
    };
    await this.service.updateQuestPoolMember({
      where: params,
      data,
      select: { id: true },
    });
  }
}
