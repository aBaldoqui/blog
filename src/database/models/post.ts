import {
    Sequelize,
    DataTypes,
    Model,
    InferAttributes,
    InferCreationAttributes,
    CreationOptional,
    NonAttribute
} from '@sequelize/core';
import { Attribute, PrimaryKey, AutoIncrement, NotNull, HasOne } from '@sequelize/core/decorators-legacy';
import { PostContent } from './content';

export class Post extends Model<InferAttributes<Post>, InferCreationAttributes<Post>> {
    @Attribute(DataTypes.INTEGER)
    @PrimaryKey
    @AutoIncrement
    declare id: CreationOptional<number>;

    @Attribute(DataTypes.STRING)
    @NotNull
    declare title: string;

    @HasOne(() => PostContent, /* foreign key */ 'postId')
    declare postContent?: NonAttribute<PostContent>;

}