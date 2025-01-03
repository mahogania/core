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
import { GrpcMethod } from "@nestjs/microservices";
import { ResponseLocaleService } from "../responseLocale.service";
import { ResponseLocaleCreateInput } from "./ResponseLocaleCreateInput";
import { ResponseLocaleWhereInput } from "./ResponseLocaleWhereInput";
import { ResponseLocaleWhereUniqueInput } from "./ResponseLocaleWhereUniqueInput";
import { ResponseLocaleFindManyArgs } from "./ResponseLocaleFindManyArgs";
import { ResponseLocaleUpdateInput } from "./ResponseLocaleUpdateInput";
import { ResponseLocale } from "./ResponseLocale";
import { ResponseFindManyArgs } from "../../response/base/ResponseFindManyArgs";
import { Response } from "../../response/base/Response";
import { ResponseWhereUniqueInput } from "../../response/base/ResponseWhereUniqueInput";

export class ResponseLocaleGrpcControllerBase {
  constructor(protected readonly service: ResponseLocaleService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ResponseLocale })
  @GrpcMethod("ResponseLocaleService", "createResponseLocale")
  async createResponseLocale(
    @common.Body() data: ResponseLocaleCreateInput
  ): Promise<ResponseLocale> {
    return await this.service.createResponseLocale({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ResponseLocale] })
  @ApiNestedQuery(ResponseLocaleFindManyArgs)
  @GrpcMethod("ResponseLocaleService", "responseLocales")
  async responseLocales(
    @common.Req() request: Request
  ): Promise<ResponseLocale[]> {
    const args = plainToClass(ResponseLocaleFindManyArgs, request.query);
    return this.service.responseLocales({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ResponseLocale })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("ResponseLocaleService", "responseLocale")
  async responseLocale(
    @common.Param() params: ResponseLocaleWhereUniqueInput
  ): Promise<ResponseLocale | null> {
    const result = await this.service.responseLocale({
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

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: ResponseLocale })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("ResponseLocaleService", "updateResponseLocale")
  async updateResponseLocale(
    @common.Param() params: ResponseLocaleWhereUniqueInput,
    @common.Body() data: ResponseLocaleUpdateInput
  ): Promise<ResponseLocale | null> {
    try {
      return await this.service.updateResponseLocale({
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
  @swagger.ApiOkResponse({ type: ResponseLocale })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @GrpcMethod("ResponseLocaleService", "deleteResponseLocale")
  async deleteResponseLocale(
    @common.Param() params: ResponseLocaleWhereUniqueInput
  ): Promise<ResponseLocale | null> {
    try {
      return await this.service.deleteResponseLocale({
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

  @common.Get("/:id/responses")
  @ApiNestedQuery(ResponseFindManyArgs)
  @GrpcMethod("ResponseLocaleService", "findManyResponses")
  async findManyResponses(
    @common.Req() request: Request,
    @common.Param() params: ResponseLocaleWhereUniqueInput
  ): Promise<Response[]> {
    const query = plainToClass(ResponseFindManyArgs, request.query);
    const results = await this.service.findResponses(params.id, {
      ...query,
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
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/responses")
  @GrpcMethod("ResponseLocaleService", "connectResponses")
  async connectResponses(
    @common.Param() params: ResponseLocaleWhereUniqueInput,
    @common.Body() body: ResponseWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      responses: {
        connect: body,
      },
    };
    await this.service.updateResponseLocale({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/responses")
  @GrpcMethod("ResponseLocaleService", "updateResponses")
  async updateResponses(
    @common.Param() params: ResponseLocaleWhereUniqueInput,
    @common.Body() body: ResponseWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      responses: {
        set: body,
      },
    };
    await this.service.updateResponseLocale({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/responses")
  @GrpcMethod("ResponseLocaleService", "disconnectResponses")
  async disconnectResponses(
    @common.Param() params: ResponseLocaleWhereUniqueInput,
    @common.Body() body: ResponseWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      responses: {
        disconnect: body,
      },
    };
    await this.service.updateResponseLocale({
      where: params,
      data,
      select: { id: true },
    });
  }
}
