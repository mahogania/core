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
import { CustomizeFormFieldWhereInput } from "./CustomizeFormFieldWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CustomizeFormFieldListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => CustomizeFormFieldWhereInput,
  })
  @ValidateNested()
  @Type(() => CustomizeFormFieldWhereInput)
  @IsOptional()
  @Field(() => CustomizeFormFieldWhereInput, {
    nullable: true,
  })
  every?: CustomizeFormFieldWhereInput;

  @ApiProperty({
    required: false,
    type: () => CustomizeFormFieldWhereInput,
  })
  @ValidateNested()
  @Type(() => CustomizeFormFieldWhereInput)
  @IsOptional()
  @Field(() => CustomizeFormFieldWhereInput, {
    nullable: true,
  })
  some?: CustomizeFormFieldWhereInput;

  @ApiProperty({
    required: false,
    type: () => CustomizeFormFieldWhereInput,
  })
  @ValidateNested()
  @Type(() => CustomizeFormFieldWhereInput)
  @IsOptional()
  @Field(() => CustomizeFormFieldWhereInput, {
    nullable: true,
  })
  none?: CustomizeFormFieldWhereInput;
}
export { CustomizeFormFieldListRelationFilter as CustomizeFormFieldListRelationFilter };
