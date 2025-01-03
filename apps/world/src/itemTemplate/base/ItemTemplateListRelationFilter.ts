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
import { ItemTemplateWhereInput } from "./ItemTemplateWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ItemTemplateListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ItemTemplateWhereInput,
  })
  @ValidateNested()
  @Type(() => ItemTemplateWhereInput)
  @IsOptional()
  @Field(() => ItemTemplateWhereInput, {
    nullable: true,
  })
  every?: ItemTemplateWhereInput;

  @ApiProperty({
    required: false,
    type: () => ItemTemplateWhereInput,
  })
  @ValidateNested()
  @Type(() => ItemTemplateWhereInput)
  @IsOptional()
  @Field(() => ItemTemplateWhereInput, {
    nullable: true,
  })
  some?: ItemTemplateWhereInput;

  @ApiProperty({
    required: false,
    type: () => ItemTemplateWhereInput,
  })
  @ValidateNested()
  @Type(() => ItemTemplateWhereInput)
  @IsOptional()
  @Field(() => ItemTemplateWhereInput, {
    nullable: true,
  })
  none?: ItemTemplateWhereInput;
}
export { ItemTemplateListRelationFilter as ItemTemplateListRelationFilter };
