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
import { DiscussionReplyWhereInput } from "./DiscussionReplyWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class DiscussionReplyListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => DiscussionReplyWhereInput,
  })
  @ValidateNested()
  @Type(() => DiscussionReplyWhereInput)
  @IsOptional()
  @Field(() => DiscussionReplyWhereInput, {
    nullable: true,
  })
  every?: DiscussionReplyWhereInput;

  @ApiProperty({
    required: false,
    type: () => DiscussionReplyWhereInput,
  })
  @ValidateNested()
  @Type(() => DiscussionReplyWhereInput)
  @IsOptional()
  @Field(() => DiscussionReplyWhereInput, {
    nullable: true,
  })
  some?: DiscussionReplyWhereInput;

  @ApiProperty({
    required: false,
    type: () => DiscussionReplyWhereInput,
  })
  @ValidateNested()
  @Type(() => DiscussionReplyWhereInput)
  @IsOptional()
  @Field(() => DiscussionReplyWhereInput, {
    nullable: true,
  })
  none?: DiscussionReplyWhereInput;
}
export { DiscussionReplyListRelationFilter as DiscussionReplyListRelationFilter };
