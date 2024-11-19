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
import { CustomHtmlBlockWhereInput } from "./CustomHtmlBlockWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CustomHtmlBlockListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => CustomHtmlBlockWhereInput,
  })
  @ValidateNested()
  @Type(() => CustomHtmlBlockWhereInput)
  @IsOptional()
  @Field(() => CustomHtmlBlockWhereInput, {
    nullable: true,
  })
  every?: CustomHtmlBlockWhereInput;

  @ApiProperty({
    required: false,
    type: () => CustomHtmlBlockWhereInput,
  })
  @ValidateNested()
  @Type(() => CustomHtmlBlockWhereInput)
  @IsOptional()
  @Field(() => CustomHtmlBlockWhereInput, {
    nullable: true,
  })
  some?: CustomHtmlBlockWhereInput;

  @ApiProperty({
    required: false,
    type: () => CustomHtmlBlockWhereInput,
  })
  @ValidateNested()
  @Type(() => CustomHtmlBlockWhereInput)
  @IsOptional()
  @Field(() => CustomHtmlBlockWhereInput, {
    nullable: true,
  })
  none?: CustomHtmlBlockWhereInput;
}
export { CustomHtmlBlockListRelationFilter as CustomHtmlBlockListRelationFilter };