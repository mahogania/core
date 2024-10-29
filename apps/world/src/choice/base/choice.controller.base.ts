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
import { ChoiceService } from "../choice.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ChoiceCreateInput } from "./ChoiceCreateInput";
import { Choice } from "./Choice";
import { ChoiceFindManyArgs } from "./ChoiceFindManyArgs";
import { ChoiceWhereUniqueInput } from "./ChoiceWhereUniqueInput";
import { ChoiceUpdateInput } from "./ChoiceUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ChoiceControllerBase {
  constructor(
    protected readonly service: ChoiceService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Choice })
  @nestAccessControl.UseRoles({
    resource: "Choice",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: ChoiceCreateInput,
  })
  async createChoice(@common.Body() data: ChoiceCreateInput): Promise<Choice> {
    return await this.service.createChoice({
      data: {
        ...data,

        choiceLocales: data.choiceLocales
          ? {
              connect: data.choiceLocales,
            }
          : undefined,

        responses: {
          connect: data.responses,
        },
      },
      select: {
        choiceLocales: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        name: true,

        responses: {
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
  @swagger.ApiOkResponse({ type: [Choice] })
  @ApiNestedQuery(ChoiceFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Choice",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async choices(@common.Req() request: Request): Promise<Choice[]> {
    const args = plainToClass(ChoiceFindManyArgs, request.query);
    return this.service.choices({
      ...args,
      select: {
        choiceLocales: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        name: true,

        responses: {
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
  @swagger.ApiOkResponse({ type: Choice })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Choice",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async choice(
    @common.Param() params: ChoiceWhereUniqueInput
  ): Promise<Choice | null> {
    const result = await this.service.choice({
      where: params,
      select: {
        choiceLocales: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        name: true,

        responses: {
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
  @swagger.ApiOkResponse({ type: Choice })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Choice",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: ChoiceUpdateInput,
  })
  async updateChoice(
    @common.Param() params: ChoiceWhereUniqueInput,
    @common.Body() data: ChoiceUpdateInput
  ): Promise<Choice | null> {
    try {
      return await this.service.updateChoice({
        where: params,
        data: {
          ...data,

          choiceLocales: data.choiceLocales
            ? {
                connect: data.choiceLocales,
              }
            : undefined,

          responses: {
            connect: data.responses,
          },
        },
        select: {
          choiceLocales: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,
          name: true,

          responses: {
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
  @swagger.ApiOkResponse({ type: Choice })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Choice",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteChoice(
    @common.Param() params: ChoiceWhereUniqueInput
  ): Promise<Choice | null> {
    try {
      return await this.service.deleteChoice({
        where: params,
        select: {
          choiceLocales: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,
          name: true,

          responses: {
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
}
