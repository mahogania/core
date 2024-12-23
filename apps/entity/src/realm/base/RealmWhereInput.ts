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
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { UserListRelationFilter } from "../../user/base/UserListRelationFilter";
import { WorldWhereUniqueInput } from "../../world/base/WorldWhereUniqueInput";

@InputType()
class RealmWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => UserListRelationFilter,
  })
  @ValidateNested()
  @Type(() => UserListRelationFilter)
  @IsOptional()
  @Field(() => UserListRelationFilter, {
    nullable: true,
  })
  users?: UserListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => WorldWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => WorldWhereUniqueInput)
  @IsOptional()
  @Field(() => WorldWhereUniqueInput, {
    nullable: true,
  })
  world?: WorldWhereUniqueInput;
}

export { RealmWhereInput as RealmWhereInput };
