/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { EntityWhereUniqueInput } from "../../entity/base/EntityWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class EntityCreateNestedManyWithoutTemplatesInput {
  @Field(() => [EntityWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [EntityWhereUniqueInput],
  })
  connect?: Array<EntityWhereUniqueInput>;
}

export { EntityCreateNestedManyWithoutTemplatesInput as EntityCreateNestedManyWithoutTemplatesInput };
