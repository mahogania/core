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
import { QuestPoolUpdateManyWithoutQuestPoolMembersInput } from "./QuestPoolUpdateManyWithoutQuestPoolMembersInput";

@InputType()
class QuestPoolMemberUpdateInput {
  @ApiProperty({
    required: false,
    type: () => PoolMemberWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PoolMemberWhereUniqueInput)
  @IsOptional()
  @Field(() => PoolMemberWhereUniqueInput, {
    nullable: true,
  })
  poolMember?: PoolMemberWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => QuestPoolUpdateManyWithoutQuestPoolMembersInput,
  })
  @ValidateNested()
  @Type(() => QuestPoolUpdateManyWithoutQuestPoolMembersInput)
  @IsOptional()
  @Field(() => QuestPoolUpdateManyWithoutQuestPoolMembersInput, {
    nullable: true,
  })
  questPoolTemplates?: QuestPoolUpdateManyWithoutQuestPoolMembersInput;
}

export { QuestPoolMemberUpdateInput as QuestPoolMemberUpdateInput };
