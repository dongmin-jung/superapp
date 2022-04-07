package com.superapp.todo.mapper;

import java.sql.JDBCType;
import javax.annotation.Generated;
import org.mybatis.dynamic.sql.AliasableSqlTable;
import org.mybatis.dynamic.sql.SqlColumn;

public final class TodoViewDynamicSqlSupport {
    @Generated("org.mybatis.generator.api.MyBatisGenerator")
    public static final TodoView todoView = new TodoView();

    @Generated("org.mybatis.generator.api.MyBatisGenerator")
    public static final SqlColumn<Integer> id = todoView.id;

    @Generated("org.mybatis.generator.api.MyBatisGenerator")
    public static final SqlColumn<String> statusName = todoView.statusName;

    @Generated("org.mybatis.generator.api.MyBatisGenerator")
    public static final SqlColumn<String> item = todoView.item;

    @Generated("org.mybatis.generator.api.MyBatisGenerator")
    public static final class TodoView extends AliasableSqlTable<TodoView> {
        public final SqlColumn<Integer> id = column("ID", JDBCType.NUMERIC);

        public final SqlColumn<String> statusName = column("STATUS_NAME", JDBCType.VARCHAR);

        public final SqlColumn<String> item = column("ITEM", JDBCType.VARCHAR);

        public TodoView() {
            super("TODO_VIEW", TodoView::new);
        }
    }
}