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
import { PoolMemberService } from "../poolMember.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { PoolMemberCreateInput } from "./PoolMemberCreateInput";
import { PoolMember } from "./PoolMember";
import { PoolMemberFindManyArgs } from "./PoolMemberFindManyArgs";
import { PoolMemberWhereUniqueInput } from "./PoolMemberWhereUniqueInput";
import { PoolMemberUpdateInput } from "./PoolMemberUpdateInput";
import { QuestPoolMemberFindManyArgs } from "../../questPoolMember/base/QuestPoolMemberFindManyArgs";
import { QuestPoolMember } from "../../questPoolMember/base/QuestPoolMember";
import { QuestPoolMemberWhereUniqueInput } from "../../questPoolMember/base/QuestPoolMemberWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class PoolMemberControllerBase {
  constructor(
    protected readonly service: PoolMemberService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: PoolMember })
  @nestAccessControl.UseRoles({
    resource: "PoolMember",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: PoolMemberCreateInput,
  })
  async createPoolMember(
    @common.Body() data: PoolMemberCreateInput
  ): Promise<PoolMember> {
    return await this.service.createPoolMember({
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
  @swagger.ApiOkResponse({ type: [PoolMember] })
  @ApiNestedQuery(PoolMemberFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "PoolMember",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async poolMembers(@common.Req() request: Request): Promise<PoolMember[]> {
    const args = plainToClass(PoolMemberFindManyArgs, request.query);
    return this.service.poolMembers({
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
  @swagger.ApiOkResponse({ type: PoolMember })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PoolMember",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async poolMember(
    @common.Param() params: PoolMemberWhereUniqueInput
  ): Promise<PoolMember | null> {
    const result = await this.service.poolMember({
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
  @swagger.ApiOkResponse({ type: PoolMember })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PoolMember",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: PoolMemberUpdateInput,
  })
  async updatePoolMember(
    @common.Param() params: PoolMemberWhereUniqueInput,
    @common.Body() data: PoolMemberUpdateInput
  ): Promise<PoolMember | null> {
    try {
      return await this.service.updatePoolMember({
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
  @swagger.ApiOkResponse({ type: PoolMember })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "PoolMember",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deletePoolMember(
    @common.Param() params: PoolMemberWhereUniqueInput
  ): Promise<PoolMember | null> {
    try {
      return await this.service.deletePoolMember({
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

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/questPoolMembers")
  @ApiNestedQuery(QuestPoolMemberFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "QuestPoolMember",
    action: "read",
    possession: "any",
  })
  async findQuestPoolMembers(
    @common.Req() request: Request,
    @common.Param() params: PoolMemberWhereUniqueInput
  ): Promise<QuestPoolMember[]> {
    const query = plainToClass(QuestPoolMemberFindManyArgs, request.query);
    const results = await this.service.findQuestPoolMembers(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/questPoolMembers")
  @nestAccessControl.UseRoles({
    resource: "PoolMember",
    action: "update",
    possession: "any",
  })
  async connectQuestPoolMembers(
    @common.Param() params: PoolMemberWhereUniqueInput,
    @common.Body() body: QuestPoolMemberWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      questPoolMembers: {
        connect: body,
      },
    };
    await this.service.updatePoolMember({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/questPoolMembers")
  @nestAccessControl.UseRoles({
    resource: "PoolMember",
    action: "update",
    possession: "any",
  })
  async updateQuestPoolMembers(
    @common.Param() params: PoolMemberWhereUniqueInput,
    @common.Body() body: QuestPoolMemberWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      questPoolMembers: {
        set: body,
      },
    };
    await this.service.updatePoolMember({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/questPoolMembers")
  @nestAccessControl.UseRoles({
    resource: "PoolMember",
    action: "update",
    possession: "any",
  })
  async disconnectQuestPoolMembers(
    @common.Param() params: PoolMemberWhereUniqueInput,
    @common.Body() body: QuestPoolMemberWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      questPoolMembers: {
        disconnect: body,
      },
    };
    await this.service.updatePoolMember({
      where: params,
      data,
      select: { id: true },
    });
  }
}