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
import { EntityCreateNestedManyWithoutTemplatesInput } from "./EntityCreateNestedManyWithoutTemplatesInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { TraitCreateNestedManyWithoutTemplatesInput } from "./TraitCreateNestedManyWithoutTemplatesInput";

@InputType()
class TemplateCreateInput {
  @ApiProperty({
    required: false,
    type: () => EntityCreateNestedManyWithoutTemplatesInput,
  })
  @ValidateNested()
  @Type(() => EntityCreateNestedManyWithoutTemplatesInput)
  @IsOptional()
  @Field(() => EntityCreateNestedManyWithoutTemplatesInput, {
    nullable: true,
  })
  entities?: EntityCreateNestedManyWithoutTemplatesInput;

  @ApiProperty({
    required: false,
    type: () => TraitCreateNestedManyWithoutTemplatesInput,
  })
  @ValidateNested()
  @Type(() => TraitCreateNestedManyWithoutTemplatesInput)
  @IsOptional()
  @Field(() => TraitCreateNestedManyWithoutTemplatesInput, {
    nullable: true,
  })
  traits?: TraitCreateNestedManyWithoutTemplatesInput;
}

export { TemplateCreateInput as TemplateCreateInput };
