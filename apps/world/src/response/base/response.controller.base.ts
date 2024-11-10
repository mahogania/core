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
import { ResponseService } from "../response.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ResponseCreateInput } from "./ResponseCreateInput";
import { Response } from "./Response";
import { ResponseFindManyArgs } from "./ResponseFindManyArgs";
import { ResponseWhereUniqueInput } from "./ResponseWhereUniqueInput";
import { ResponseUpdateInput } from "./ResponseUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ResponseControllerBase {
  constructor(
    protected readonly service: ResponseService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Response })
  @nestAccessControl.UseRoles({
    resource: "Response",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: ResponseCreateInput,
  })
  async createResponse(
    @common.Body() data: ResponseCreateInput
  ): Promise<Response> {
    return await this.service.createResponse({
      data: {
        ...data,

        choice: {
          connect: data.choice,
        },

        player: data.player
          ? {
              connect: data.player,
            }
          : undefined,

        responseLocales: data.responseLocales
          ? {
              connect: data.responseLocales,
            }
          : undefined,
      },
      select: {
        choice: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,

        player: {
          select: {
            id: true,
          },
        },

        responseLocales: {
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
  @swagger.ApiOkResponse({ type: [Response] })
  @ApiNestedQuery(ResponseFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Response",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async responses(@common.Req() request: Request): Promise<Response[]> {
    const args = plainToClass(ResponseFindManyArgs, request.query);
    return this.service.responses({
      ...args,
      select: {
        choice: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,

        player: {
          select: {
            id: true,
          },
        },

        responseLocales: {
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
  @swagger.ApiOkResponse({ type: Response })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Response",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async response(
    @common.Param() params: ResponseWhereUniqueInput
  ): Promise<Response | null> {
    const result = await this.service.response({
      where: params,
      select: {
        choice: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,

        player: {
          select: {
            id: true,
          },
        },

        responseLocales: {
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
  @swagger.ApiOkResponse({ type: Response })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Response",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: ResponseUpdateInput,
  })
  async updateResponse(
    @common.Param() params: ResponseWhereUniqueInput,
    @common.Body() data: ResponseUpdateInput
  ): Promise<Response | null> {
    try {
      return await this.service.updateResponse({
        where: params,
        data: {
          ...data,

          choice: {
            connect: data.choice,
          },

          player: data.player
            ? {
                connect: data.player,
              }
            : undefined,

          responseLocales: data.responseLocales
            ? {
                connect: data.responseLocales,
              }
            : undefined,
        },
        select: {
          choice: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,

          player: {
            select: {
              id: true,
            },
          },

          responseLocales: {
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
  @swagger.ApiOkResponse({ type: Response })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Response",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteResponse(
    @common.Param() params: ResponseWhereUniqueInput
  ): Promise<Response | null> {
    try {
      return await this.service.deleteResponse({
        where: params,
        select: {
          choice: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,

          player: {
            select: {
              id: true,
            },
          },

          responseLocales: {
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
