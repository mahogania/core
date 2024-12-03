/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { StrengthWhereUniqueInput } from "../../strength/base/StrengthWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class StrengthUpdateManyWithoutFeaturesInput {
  @Field(() => [StrengthWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [StrengthWhereUniqueInput],
  })
  connect?: Array<StrengthWhereUniqueInput>;

  @Field(() => [StrengthWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [StrengthWhereUniqueInput],
  })
  disconnect?: Array<StrengthWhereUniqueInput>;

  @Field(() => [StrengthWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [StrengthWhereUniqueInput],
  })
  set?: Array<StrengthWhereUniqueInput>;
}

export { StrengthUpdateManyWithoutFeaturesInput as StrengthUpdateManyWithoutFeaturesInput };
