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
import { DocTypeLayoutWhereUniqueInput } from "./DocTypeLayoutWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { DocTypeLayoutUpdateInput } from "./DocTypeLayoutUpdateInput";

@ArgsType()
class UpdateDocTypeLayoutArgs {
  @ApiProperty({
    required: true,
    type: () => DocTypeLayoutWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DocTypeLayoutWhereUniqueInput)
  @Field(() => DocTypeLayoutWhereUniqueInput, { nullable: false })
  where!: DocTypeLayoutWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => DocTypeLayoutUpdateInput,
  })
  @ValidateNested()
  @Type(() => DocTypeLayoutUpdateInput)
  @Field(() => DocTypeLayoutUpdateInput, { nullable: false })
  data!: DocTypeLayoutUpdateInput;
}

export { UpdateDocTypeLayoutArgs as UpdateDocTypeLayoutArgs };
