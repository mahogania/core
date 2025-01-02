/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ContractTemplateFulfilmentTermsWhereInput } from "./ContractTemplateFulfilmentTermsWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ContractTemplateFulfilmentTermsListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ContractTemplateFulfilmentTermsWhereInput,
  })
  @ValidateNested()
  @Type(() => ContractTemplateFulfilmentTermsWhereInput)
  @IsOptional()
  @Field(() => ContractTemplateFulfilmentTermsWhereInput, {
    nullable: true,
  })
  every?: ContractTemplateFulfilmentTermsWhereInput;

  @ApiProperty({
    required: false,
    type: () => ContractTemplateFulfilmentTermsWhereInput,
  })
  @ValidateNested()
  @Type(() => ContractTemplateFulfilmentTermsWhereInput)
  @IsOptional()
  @Field(() => ContractTemplateFulfilmentTermsWhereInput, {
    nullable: true,
  })
  some?: ContractTemplateFulfilmentTermsWhereInput;

  @ApiProperty({
    required: false,
    type: () => ContractTemplateFulfilmentTermsWhereInput,
  })
  @ValidateNested()
  @Type(() => ContractTemplateFulfilmentTermsWhereInput)
  @IsOptional()
  @Field(() => ContractTemplateFulfilmentTermsWhereInput, {
    nullable: true,
  })
  none?: ContractTemplateFulfilmentTermsWhereInput;
}
export { ContractTemplateFulfilmentTermsListRelationFilter as ContractTemplateFulfilmentTermsListRelationFilter };