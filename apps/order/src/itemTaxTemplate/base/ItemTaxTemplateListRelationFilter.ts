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
import { ItemTaxTemplateWhereInput } from "./ItemTaxTemplateWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ItemTaxTemplateListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ItemTaxTemplateWhereInput,
  })
  @ValidateNested()
  @Type(() => ItemTaxTemplateWhereInput)
  @IsOptional()
  @Field(() => ItemTaxTemplateWhereInput, {
    nullable: true,
  })
  every?: ItemTaxTemplateWhereInput;

  @ApiProperty({
    required: false,
    type: () => ItemTaxTemplateWhereInput,
  })
  @ValidateNested()
  @Type(() => ItemTaxTemplateWhereInput)
  @IsOptional()
  @Field(() => ItemTaxTemplateWhereInput, {
    nullable: true,
  })
  some?: ItemTaxTemplateWhereInput;

  @ApiProperty({
    required: false,
    type: () => ItemTaxTemplateWhereInput,
  })
  @ValidateNested()
  @Type(() => ItemTaxTemplateWhereInput)
  @IsOptional()
  @Field(() => ItemTaxTemplateWhereInput, {
    nullable: true,
  })
  none?: ItemTaxTemplateWhereInput;
}
export { ItemTaxTemplateListRelationFilter as ItemTaxTemplateListRelationFilter };
