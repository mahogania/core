/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { BusinessWhereUniqueInput } from "../../business/base/BusinessWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class BusinessUpdateManyWithoutOpportunitiesInput {
  @Field(() => [BusinessWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [BusinessWhereUniqueInput],
  })
  connect?: Array<BusinessWhereUniqueInput>;

  @Field(() => [BusinessWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [BusinessWhereUniqueInput],
  })
  disconnect?: Array<BusinessWhereUniqueInput>;

  @Field(() => [BusinessWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [BusinessWhereUniqueInput],
  })
  set?: Array<BusinessWhereUniqueInput>;
}

export { BusinessUpdateManyWithoutOpportunitiesInput as BusinessUpdateManyWithoutOpportunitiesInput };
