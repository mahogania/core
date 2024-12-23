/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { AttributeWhereUniqueInput } from "../../attribute/base/AttributeWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class AttributeUpdateManyWithoutFragmentsInput {
  @Field(() => [AttributeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AttributeWhereUniqueInput],
  })
  connect?: Array<AttributeWhereUniqueInput>;

  @Field(() => [AttributeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AttributeWhereUniqueInput],
  })
  disconnect?: Array<AttributeWhereUniqueInput>;

  @Field(() => [AttributeWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AttributeWhereUniqueInput],
  })
  set?: Array<AttributeWhereUniqueInput>;
}

export { AttributeUpdateManyWithoutFragmentsInput as AttributeUpdateManyWithoutFragmentsInput };
