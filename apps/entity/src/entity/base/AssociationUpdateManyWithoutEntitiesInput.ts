/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { AssociationWhereUniqueInput } from "../../association/base/AssociationWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class AssociationUpdateManyWithoutEntitiesInput {
  @Field(() => [AssociationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AssociationWhereUniqueInput],
  })
  connect?: Array<AssociationWhereUniqueInput>;

  @Field(() => [AssociationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AssociationWhereUniqueInput],
  })
  disconnect?: Array<AssociationWhereUniqueInput>;

  @Field(() => [AssociationWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [AssociationWhereUniqueInput],
  })
  set?: Array<AssociationWhereUniqueInput>;
}

export { AssociationUpdateManyWithoutEntitiesInput as AssociationUpdateManyWithoutEntitiesInput };
