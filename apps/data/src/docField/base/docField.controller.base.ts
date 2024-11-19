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
import { DocFieldService } from "../docField.service";
import { DocFieldCreateInput } from "./DocFieldCreateInput";
import { DocField } from "./DocField";
import { DocFieldFindManyArgs } from "./DocFieldFindManyArgs";
import { DocFieldWhereUniqueInput } from "./DocFieldWhereUniqueInput";
import { DocFieldUpdateInput } from "./DocFieldUpdateInput";

export class DocFieldControllerBase {
  constructor(protected readonly service: DocFieldService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: DocField })
  async createDocField(
    @common.Body() data: DocFieldCreateInput
  ): Promise<DocField> {
    return await this.service.createDocField({
      data: data,
      select: {
        allowBulkEdit: true,
        allowInQuickEntry: true,
        allowOnSubmit: true,
        bold: true,
        collapsible: true,
        collapsibleDependsOn: true,
        columns: true,
        createdAt: true,
        creation: true,
        defaultField: true,
        dependsOn: true,
        description: true,
        docstatus: true,
        documentationUrl: true,
        fetchFrom: true,
        fetchIfEmpty: true,
        fieldname: true,
        fieldtype: true,
        hidden: true,
        hideBorder: true,
        hideDays: true,
        hideSeconds: true,
        id: true,
        idx: true,
        ignoreUserPermissions: true,
        ignoreXssFilter: true,
        inFilter: true,
        inGlobalSearch: true,
        inListView: true,
        inPreview: true,
        inStandardFilter: true,
        isVirtual: true,
        label: true,
        length: true,
        linkFilters: true,
        mandatoryDependsOn: true,
        maxHeight: true,
        modified: true,
        modifiedBy: true,
        name: true,
        noCopy: true,
        nonNegative: true,
        oldfieldname: true,
        oldfieldtype: true,
        options: true,
        owner: true,
        parent: true,
        parentfield: true,
        parenttype: true,
        permlevel: true,
        precision: true,
        printHide: true,
        printHideIfNoValue: true,
        printWidth: true,
        readOnly: true,
        readOnlyDependsOn: true,
        rememberLastSelectedValue: true,
        reportHide: true,
        reqd: true,
        searchIndex: true,
        setOnlyOnce: true,
        showDashboard: true,
        showOnTimeline: true,
        showPreviewPopup: true,
        sortOptions: true,
        translatable: true,
        trigger: true,
        unique: true,
        updatedAt: true,
        width: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [DocField] })
  @ApiNestedQuery(DocFieldFindManyArgs)
  async docFields(@common.Req() request: Request): Promise<DocField[]> {
    const args = plainToClass(DocFieldFindManyArgs, request.query);
    return this.service.docFields({
      ...args,
      select: {
        allowBulkEdit: true,
        allowInQuickEntry: true,
        allowOnSubmit: true,
        bold: true,
        collapsible: true,
        collapsibleDependsOn: true,
        columns: true,
        createdAt: true,
        creation: true,
        defaultField: true,
        dependsOn: true,
        description: true,
        docstatus: true,
        documentationUrl: true,
        fetchFrom: true,
        fetchIfEmpty: true,
        fieldname: true,
        fieldtype: true,
        hidden: true,
        hideBorder: true,
        hideDays: true,
        hideSeconds: true,
        id: true,
        idx: true,
        ignoreUserPermissions: true,
        ignoreXssFilter: true,
        inFilter: true,
        inGlobalSearch: true,
        inListView: true,
        inPreview: true,
        inStandardFilter: true,
        isVirtual: true,
        label: true,
        length: true,
        linkFilters: true,
        mandatoryDependsOn: true,
        maxHeight: true,
        modified: true,
        modifiedBy: true,
        name: true,
        noCopy: true,
        nonNegative: true,
        oldfieldname: true,
        oldfieldtype: true,
        options: true,
        owner: true,
        parent: true,
        parentfield: true,
        parenttype: true,
        permlevel: true,
        precision: true,
        printHide: true,
        printHideIfNoValue: true,
        printWidth: true,
        readOnly: true,
        readOnlyDependsOn: true,
        rememberLastSelectedValue: true,
        reportHide: true,
        reqd: true,
        searchIndex: true,
        setOnlyOnce: true,
        showDashboard: true,
        showOnTimeline: true,
        showPreviewPopup: true,
        sortOptions: true,
        translatable: true,
        trigger: true,
        unique: true,
        updatedAt: true,
        width: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: DocField })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async docField(
    @common.Param() params: DocFieldWhereUniqueInput
  ): Promise<DocField | null> {
    const result = await this.service.docField({
      where: params,
      select: {
        allowBulkEdit: true,
        allowInQuickEntry: true,
        allowOnSubmit: true,
        bold: true,
        collapsible: true,
        collapsibleDependsOn: true,
        columns: true,
        createdAt: true,
        creation: true,
        defaultField: true,
        dependsOn: true,
        description: true,
        docstatus: true,
        documentationUrl: true,
        fetchFrom: true,
        fetchIfEmpty: true,
        fieldname: true,
        fieldtype: true,
        hidden: true,
        hideBorder: true,
        hideDays: true,
        hideSeconds: true,
        id: true,
        idx: true,
        ignoreUserPermissions: true,
        ignoreXssFilter: true,
        inFilter: true,
        inGlobalSearch: true,
        inListView: true,
        inPreview: true,
        inStandardFilter: true,
        isVirtual: true,
        label: true,
        length: true,
        linkFilters: true,
        mandatoryDependsOn: true,
        maxHeight: true,
        modified: true,
        modifiedBy: true,
        name: true,
        noCopy: true,
        nonNegative: true,
        oldfieldname: true,
        oldfieldtype: true,
        options: true,
        owner: true,
        parent: true,
        parentfield: true,
        parenttype: true,
        permlevel: true,
        precision: true,
        printHide: true,
        printHideIfNoValue: true,
        printWidth: true,
        readOnly: true,
        readOnlyDependsOn: true,
        rememberLastSelectedValue: true,
        reportHide: true,
        reqd: true,
        searchIndex: true,
        setOnlyOnce: true,
        showDashboard: true,
        showOnTimeline: true,
        showPreviewPopup: true,
        sortOptions: true,
        translatable: true,
        trigger: true,
        unique: true,
        updatedAt: true,
        width: true,
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
  @swagger.ApiOkResponse({ type: DocField })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateDocField(
    @common.Param() params: DocFieldWhereUniqueInput,
    @common.Body() data: DocFieldUpdateInput
  ): Promise<DocField | null> {
    try {
      return await this.service.updateDocField({
        where: params,
        data: data,
        select: {
          allowBulkEdit: true,
          allowInQuickEntry: true,
          allowOnSubmit: true,
          bold: true,
          collapsible: true,
          collapsibleDependsOn: true,
          columns: true,
          createdAt: true,
          creation: true,
          defaultField: true,
          dependsOn: true,
          description: true,
          docstatus: true,
          documentationUrl: true,
          fetchFrom: true,
          fetchIfEmpty: true,
          fieldname: true,
          fieldtype: true,
          hidden: true,
          hideBorder: true,
          hideDays: true,
          hideSeconds: true,
          id: true,
          idx: true,
          ignoreUserPermissions: true,
          ignoreXssFilter: true,
          inFilter: true,
          inGlobalSearch: true,
          inListView: true,
          inPreview: true,
          inStandardFilter: true,
          isVirtual: true,
          label: true,
          length: true,
          linkFilters: true,
          mandatoryDependsOn: true,
          maxHeight: true,
          modified: true,
          modifiedBy: true,
          name: true,
          noCopy: true,
          nonNegative: true,
          oldfieldname: true,
          oldfieldtype: true,
          options: true,
          owner: true,
          parent: true,
          parentfield: true,
          parenttype: true,
          permlevel: true,
          precision: true,
          printHide: true,
          printHideIfNoValue: true,
          printWidth: true,
          readOnly: true,
          readOnlyDependsOn: true,
          rememberLastSelectedValue: true,
          reportHide: true,
          reqd: true,
          searchIndex: true,
          setOnlyOnce: true,
          showDashboard: true,
          showOnTimeline: true,
          showPreviewPopup: true,
          sortOptions: true,
          translatable: true,
          trigger: true,
          unique: true,
          updatedAt: true,
          width: true,
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
  @swagger.ApiOkResponse({ type: DocField })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteDocField(
    @common.Param() params: DocFieldWhereUniqueInput
  ): Promise<DocField | null> {
    try {
      return await this.service.deleteDocField({
        where: params,
        select: {
          allowBulkEdit: true,
          allowInQuickEntry: true,
          allowOnSubmit: true,
          bold: true,
          collapsible: true,
          collapsibleDependsOn: true,
          columns: true,
          createdAt: true,
          creation: true,
          defaultField: true,
          dependsOn: true,
          description: true,
          docstatus: true,
          documentationUrl: true,
          fetchFrom: true,
          fetchIfEmpty: true,
          fieldname: true,
          fieldtype: true,
          hidden: true,
          hideBorder: true,
          hideDays: true,
          hideSeconds: true,
          id: true,
          idx: true,
          ignoreUserPermissions: true,
          ignoreXssFilter: true,
          inFilter: true,
          inGlobalSearch: true,
          inListView: true,
          inPreview: true,
          inStandardFilter: true,
          isVirtual: true,
          label: true,
          length: true,
          linkFilters: true,
          mandatoryDependsOn: true,
          maxHeight: true,
          modified: true,
          modifiedBy: true,
          name: true,
          noCopy: true,
          nonNegative: true,
          oldfieldname: true,
          oldfieldtype: true,
          options: true,
          owner: true,
          parent: true,
          parentfield: true,
          parenttype: true,
          permlevel: true,
          precision: true,
          printHide: true,
          printHideIfNoValue: true,
          printWidth: true,
          readOnly: true,
          readOnlyDependsOn: true,
          rememberLastSelectedValue: true,
          reportHide: true,
          reqd: true,
          searchIndex: true,
          setOnlyOnce: true,
          showDashboard: true,
          showOnTimeline: true,
          showPreviewPopup: true,
          sortOptions: true,
          translatable: true,
          trigger: true,
          unique: true,
          updatedAt: true,
          width: true,
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
