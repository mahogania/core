/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { RelationWhereUniqueInput } from "../../relation/base/RelationWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class RelationUpdateManyWithoutIndustriesInput {
  @Field(() => [RelationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RelationWhereUniqueInput],
  })
  connect?: Array<RelationWhereUniqueInput>;

  @Field(() => [RelationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RelationWhereUniqueInput],
  })
  disconnect?: Array<RelationWhereUniqueInput>;

  @Field(() => [RelationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [RelationWhereUniqueInput],
  })
  set?: Array<RelationWhereUniqueInput>;
}

export { RelationUpdateManyWithoutIndustriesInput as RelationUpdateManyWithoutIndustriesInput };
