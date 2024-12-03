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
import { ChoiceLocaleService } from "../choiceLocale.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ChoiceLocaleCreateInput } from "./ChoiceLocaleCreateInput";
import { ChoiceLocale } from "./ChoiceLocale";
import { ChoiceLocaleFindManyArgs } from "./ChoiceLocaleFindManyArgs";
import { ChoiceLocaleWhereUniqueInput } from "./ChoiceLocaleWhereUniqueInput";
import { ChoiceLocaleUpdateInput } from "./ChoiceLocaleUpdateInput";
import { ChoiceFindManyArgs } from "../../choice/base/ChoiceFindManyArgs";
import { Choice } from "../../choice/base/Choice";
import { ChoiceWhereUniqueInput } from "../../choice/base/ChoiceWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ChoiceLocaleControllerBase {
  constructor(
    protected readonly service: ChoiceLocaleService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ChoiceLocale })
  @nestAccessControl.UseRoles({
    resource: "ChoiceLocale",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: ChoiceLocaleCreateInput,
  })
  async createChoiceLocale(
    @common.Body() data: ChoiceLocaleCreateInput
  ): Promise<ChoiceLocale> {
    return await this.service.createChoiceLocale({
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
  @swagger.ApiOkResponse({ type: [ChoiceLocale] })
  @ApiNestedQuery(ChoiceLocaleFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "ChoiceLocale",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async choiceLocales(@common.Req() request: Request): Promise<ChoiceLocale[]> {
    const args = plainToClass(ChoiceLocaleFindManyArgs, request.query);
    return this.service.choiceLocales({
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
  @swagger.ApiOkResponse({ type: ChoiceLocale })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ChoiceLocale",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async choiceLocale(
    @common.Param() params: ChoiceLocaleWhereUniqueInput
  ): Promise<ChoiceLocale | null> {
    const result = await this.service.choiceLocale({
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
  @swagger.ApiOkResponse({ type: ChoiceLocale })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ChoiceLocale",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  @swagger.ApiBody({
    type: ChoiceLocaleUpdateInput,
  })
  async updateChoiceLocale(
    @common.Param() params: ChoiceLocaleWhereUniqueInput,
    @common.Body() data: ChoiceLocaleUpdateInput
  ): Promise<ChoiceLocale | null> {
    try {
      return await this.service.updateChoiceLocale({
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
  @swagger.ApiOkResponse({ type: ChoiceLocale })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "ChoiceLocale",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteChoiceLocale(
    @common.Param() params: ChoiceLocaleWhereUniqueInput
  ): Promise<ChoiceLocale | null> {
    try {
      return await this.service.deleteChoiceLocale({
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
  @common.Get("/:id/choices")
  @ApiNestedQuery(ChoiceFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Choice",
    action: "read",
    possession: "any",
  })
  async findChoices(
    @common.Req() request: Request,
    @common.Param() params: ChoiceLocaleWhereUniqueInput
  ): Promise<Choice[]> {
    const query = plainToClass(ChoiceFindManyArgs, request.query);
    const results = await this.service.findChoices(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/choices")
  @nestAccessControl.UseRoles({
    resource: "ChoiceLocale",
    action: "update",
    possession: "any",
  })
  async connectChoices(
    @common.Param() params: ChoiceLocaleWhereUniqueInput,
    @common.Body() body: ChoiceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      choices: {
        connect: body,
      },
    };
    await this.service.updateChoiceLocale({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/choices")
  @nestAccessControl.UseRoles({
    resource: "ChoiceLocale",
    action: "update",
    possession: "any",
  })
  async updateChoices(
    @common.Param() params: ChoiceLocaleWhereUniqueInput,
    @common.Body() body: ChoiceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      choices: {
        set: body,
      },
    };
    await this.service.updateChoiceLocale({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/choices")
  @nestAccessControl.UseRoles({
    resource: "ChoiceLocale",
    action: "update",
    possession: "any",
  })
  async disconnectChoices(
    @common.Param() params: ChoiceLocaleWhereUniqueInput,
    @common.Body() body: ChoiceWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      choices: {
        disconnect: body,
      },
    };
    await this.service.updateChoiceLocale({
      where: params,
      data,
      select: { id: true },
    });
  }
}
