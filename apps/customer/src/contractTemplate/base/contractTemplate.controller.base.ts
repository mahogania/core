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
import { ContractTemplateService } from "../contractTemplate.service";
import { ContractTemplateCreateInput } from "./ContractTemplateCreateInput";
import { ContractTemplate } from "./ContractTemplate";
import { ContractTemplateFindManyArgs } from "./ContractTemplateFindManyArgs";
import { ContractTemplateWhereUniqueInput } from "./ContractTemplateWhereUniqueInput";
import { ContractTemplateUpdateInput } from "./ContractTemplateUpdateInput";

export class ContractTemplateControllerBase {
  constructor(protected readonly service: ContractTemplateService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ContractTemplate })
  async createContractTemplate(
    @common.Body() data: ContractTemplateCreateInput
  ): Promise<ContractTemplate> {
    return await this.service.createContractTemplate({
      data: data,
      select: {
        contractTerms: true,
        createdAt: true,
        creation: true,
        docstatus: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        requiresFulfilment: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ContractTemplate] })
  @ApiNestedQuery(ContractTemplateFindManyArgs)
  async contractTemplates(
    @common.Req() request: Request
  ): Promise<ContractTemplate[]> {
    const args = plainToClass(ContractTemplateFindManyArgs, request.query);
    return this.service.contractTemplates({
      ...args,
      select: {
        contractTerms: true,
        createdAt: true,
        creation: true,
        docstatus: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        requiresFulfilment: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ContractTemplate })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async contractTemplate(
    @common.Param() params: ContractTemplateWhereUniqueInput
  ): Promise<ContractTemplate | null> {
    const result = await this.service.contractTemplate({
      where: params,
      select: {
        contractTerms: true,
        createdAt: true,
        creation: true,
        docstatus: true,
        id: true,
        idx: true,
        modified: true,
        modifiedBy: true,
        name: true,
        owner: true,
        requiresFulfilment: true,
        title: true,
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
  @swagger.ApiOkResponse({ type: ContractTemplate })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateContractTemplate(
    @common.Param() params: ContractTemplateWhereUniqueInput,
    @common.Body() data: ContractTemplateUpdateInput
  ): Promise<ContractTemplate | null> {
    try {
      return await this.service.updateContractTemplate({
        where: params,
        data: data,
        select: {
          contractTerms: true,
          createdAt: true,
          creation: true,
          docstatus: true,
          id: true,
          idx: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
          requiresFulfilment: true,
          title: true,
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
  @swagger.ApiOkResponse({ type: ContractTemplate })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteContractTemplate(
    @common.Param() params: ContractTemplateWhereUniqueInput
  ): Promise<ContractTemplate | null> {
    try {
      return await this.service.deleteContractTemplate({
        where: params,
        select: {
          contractTerms: true,
          createdAt: true,
          creation: true,
          docstatus: true,
          id: true,
          idx: true,
          modified: true,
          modifiedBy: true,
          name: true,
          owner: true,
          requiresFulfilment: true,
          title: true,
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
