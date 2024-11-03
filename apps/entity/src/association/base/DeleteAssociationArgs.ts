/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AssociationWhereUniqueInput } from "./AssociationWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteAssociationArgs {
  @ApiProperty({
    required: true,
    type: () => AssociationWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => AssociationWhereUniqueInput)
  @Field(() => AssociationWhereUniqueInput, { nullable: false })
  where!: AssociationWhereUniqueInput;
}

export { DeleteAssociationArgs as DeleteAssociationArgs };
