/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { FragmentWhereUniqueInput } from "../../fragment/base/FragmentWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class FragmentCreateNestedManyWithoutTraitsInput {
  @Field(() => [FragmentWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [FragmentWhereUniqueInput],
  })
  connect?: Array<FragmentWhereUniqueInput>;
}

export { FragmentCreateNestedManyWithoutTraitsInput as FragmentCreateNestedManyWithoutTraitsInput };
