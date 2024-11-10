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
import { PoolMemberWhereUniqueInput } from "../../poolMember/base/PoolMemberWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { QuestPoolCreateNestedManyWithoutQuestPoolMembersInput } from "./QuestPoolCreateNestedManyWithoutQuestPoolMembersInput";

@InputType()
class QuestPoolMemberCreateInput {
  @ApiProperty({
    required: true,
    type: () => PoolMemberWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PoolMemberWhereUniqueInput)
  @Field(() => PoolMemberWhereUniqueInput)
  poolMember!: PoolMemberWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => QuestPoolCreateNestedManyWithoutQuestPoolMembersInput,
  })
  @ValidateNested()
  @Type(() => QuestPoolCreateNestedManyWithoutQuestPoolMembersInput)
  @IsOptional()
  @Field(() => QuestPoolCreateNestedManyWithoutQuestPoolMembersInput, {
    nullable: true,
  })
  questPoolTemplates?: QuestPoolCreateNestedManyWithoutQuestPoolMembersInput;
}

export { QuestPoolMemberCreateInput as QuestPoolMemberCreateInput };
