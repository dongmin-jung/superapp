package com.superapp.todo.mapper;

import java.sql.JDBCType;
import javax.annotation.Generated;
import org.mybatis.dynamic.sql.AliasableSqlTable;
import org.mybatis.dynamic.sql.SqlColumn;

public final class TodoDynamicSqlSupport {
    @Generated("org.mybatis.generator.api.MyBatisGenerator")
    public static final Todo todo = new Todo();

    @Generated("org.mybatis.generator.api.MyBatisGenerator")
    public static final SqlColumn<Integer> id = todo.id;

    @Generated("org.mybatis.generator.api.MyBatisGenerator")
    public static final SqlColumn<Integer> statusId = todo.statusId;

    @Generated("org.mybatis.generator.api.MyBatisGenerator")
    public static final SqlColumn<String> item = todo.item;

    @Generated("org.mybatis.generator.api.MyBatisGenerator")
    public static final class Todo extends AliasableSqlTable<Todo> {
        public final SqlColumn<Integer> id = column("ID", JDBCType.NUMERIC);

        public final SqlColumn<Integer> statusId = column("STATUS_ID", JDBCType.NUMERIC);

        public final SqlColumn<String> item = column("ITEM", JDBCType.VARCHAR);

        public Todo() {
            super("TODO", Todo::new);
        }
    }
}