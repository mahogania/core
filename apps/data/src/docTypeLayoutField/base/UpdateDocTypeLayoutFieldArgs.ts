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
import { DocTypeLayoutFieldWhereUniqueInput } from "./DocTypeLayoutFieldWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { DocTypeLayoutFieldUpdateInput } from "./DocTypeLayoutFieldUpdateInput";

@ArgsType()
class UpdateDocTypeLayoutFieldArgs {
  @ApiProperty({
    required: true,
    type: () => DocTypeLayoutFieldWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DocTypeLayoutFieldWhereUniqueInput)
  @Field(() => DocTypeLayoutFieldWhereUniqueInput, { nullable: false })
  where!: DocTypeLayoutFieldWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => DocTypeLayoutFieldUpdateInput,
  })
  @ValidateNested()
  @Type(() => DocTypeLayoutFieldUpdateInput)
  @Field(() => DocTypeLayoutFieldUpdateInput, { nullable: false })
  data!: DocTypeLayoutFieldUpdateInput;
}

export { UpdateDocTypeLayoutFieldArgs as UpdateDocTypeLayoutFieldArgs };