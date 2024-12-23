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
import { FormService } from "../form.service";
import { FormCreateInput } from "./FormCreateInput";
import { Form } from "./Form";
import { FormFindManyArgs } from "./FormFindManyArgs";
import { FormWhereUniqueInput } from "./FormWhereUniqueInput";
import { FormUpdateInput } from "./FormUpdateInput";
import { TemplateFindManyArgs } from "../../template/base/TemplateFindManyArgs";
import { Template } from "../../template/base/Template";
import { TemplateWhereUniqueInput } from "../../template/base/TemplateWhereUniqueInput";

export class FormControllerBase {
  constructor(protected readonly service: FormService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Form })
  @swagger.ApiBody({
    type: FormCreateInput,
  })
  async createForm(@common.Body() data: FormCreateInput): Promise<Form> {
    return await this.service.createForm({
      data: {
        ...data,

        process: data.process
          ? {
              connect: data.process,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        id: true,

        process: {
          select: {
            id: true,
          },
        },

        schema: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Form] })
  @ApiNestedQuery(FormFindManyArgs)
  async forms(@common.Req() request: Request): Promise<Form[]> {
    const args = plainToClass(FormFindManyArgs, request.query);
    return this.service.forms({
      ...args,
      select: {
        createdAt: true,
        id: true,

        process: {
          select: {
            id: true,
          },
        },

        schema: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Form })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async form(
    @common.Param() params: FormWhereUniqueInput
  ): Promise<Form | null> {
    const result = await this.service.form({
      where: params,
      select: {
        createdAt: true,
        id: true,

        process: {
          select: {
            id: true,
          },
        },

        schema: true,
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
  @swagger.ApiOkResponse({ type: Form })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiBody({
    type: FormUpdateInput,
  })
  async updateForm(
    @common.Param() params: FormWhereUniqueInput,
    @common.Body() data: FormUpdateInput
  ): Promise<Form | null> {
    try {
      return await this.service.updateForm({
        where: params,
        data: {
          ...data,

          process: data.process
            ? {
                connect: data.process,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          id: true,

          process: {
            select: {
              id: true,
            },
          },

          schema: true,
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
  @swagger.ApiOkResponse({ type: Form })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteForm(
    @common.Param() params: FormWhereUniqueInput
  ): Promise<Form | null> {
    try {
      return await this.service.deleteForm({
        where: params,
        select: {
          createdAt: true,
          id: true,

          process: {
            select: {
              id: true,
            },
          },

          schema: true,
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

  @common.Get("/:id/templates")
  @ApiNestedQuery(TemplateFindManyArgs)
  async findTemplates(
    @common.Req() request: Request,
    @common.Param() params: FormWhereUniqueInput
  ): Promise<Template[]> {
    const query = plainToClass(TemplateFindManyArgs, request.query);
    const results = await this.service.findTemplates(params.id, {
      ...query,
      select: {
        createdAt: true,
        fields: true,

        form: {
          select: {
            id: true,
          },
        },

        id: true,
        updatedAt: true,
        url: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/templates")
  async connectTemplates(
    @common.Param() params: FormWhereUniqueInput,
    @common.Body() body: TemplateWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      templates: {
        connect: body,
      },
    };
    await this.service.updateForm({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/templates")
  async updateTemplates(
    @common.Param() params: FormWhereUniqueInput,
    @common.Body() body: TemplateWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      templates: {
        set: body,
      },
    };
    await this.service.updateForm({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/templates")
  async disconnectTemplates(
    @common.Param() params: FormWhereUniqueInput,
    @common.Body() body: TemplateWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      templates: {
        disconnect: body,
      },
    };
    await this.service.updateForm({
      where: params,
      data,
      select: { id: true },
    });
  }
}
