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
import { CustomDocPermWhereInput } from "./CustomDocPermWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CustomDocPermListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => CustomDocPermWhereInput,
  })
  @ValidateNested()
  @Type(() => CustomDocPermWhereInput)
  @IsOptional()
  @Field(() => CustomDocPermWhereInput, {
    nullable: true,
  })
  every?: CustomDocPermWhereInput;

  @ApiProperty({
    required: false,
    type: () => CustomDocPermWhereInput,
  })
  @ValidateNested()
  @Type(() => CustomDocPermWhereInput)
  @IsOptional()
  @Field(() => CustomDocPermWhereInput, {
    nullable: true,
  })
  some?: CustomDocPermWhereInput;

  @ApiProperty({
    required: false,
    type: () => CustomDocPermWhereInput,
  })
  @ValidateNested()
  @Type(() => CustomDocPermWhereInput)
  @IsOptional()
  @Field(() => CustomDocPermWhereInput, {
    nullable: true,
  })
  none?: CustomDocPermWhereInput;
}
export { CustomDocPermListRelationFilter as CustomDocPermListRelationFilter };