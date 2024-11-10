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
import { ChangelogFeedWhereInput } from "./ChangelogFeedWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ChangelogFeedListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ChangelogFeedWhereInput,
  })
  @ValidateNested()
  @Type(() => ChangelogFeedWhereInput)
  @IsOptional()
  @Field(() => ChangelogFeedWhereInput, {
    nullable: true,
  })
  every?: ChangelogFeedWhereInput;

  @ApiProperty({
    required: false,
    type: () => ChangelogFeedWhereInput,
  })
  @ValidateNested()
  @Type(() => ChangelogFeedWhereInput)
  @IsOptional()
  @Field(() => ChangelogFeedWhereInput, {
    nullable: true,
  })
  some?: ChangelogFeedWhereInput;

  @ApiProperty({
    required: false,
    type: () => ChangelogFeedWhereInput,
  })
  @ValidateNested()
  @Type(() => ChangelogFeedWhereInput)
  @IsOptional()
  @Field(() => ChangelogFeedWhereInput, {
    nullable: true,
  })
  none?: ChangelogFeedWhereInput;
}
export { ChangelogFeedListRelationFilter as ChangelogFeedListRelationFilter };
