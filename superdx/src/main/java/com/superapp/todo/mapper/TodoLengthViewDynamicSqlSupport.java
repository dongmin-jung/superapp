package com.superapp.todo.mapper;

import java.sql.JDBCType;
import javax.annotation.Generated;
import org.mybatis.dynamic.sql.AliasableSqlTable;
import org.mybatis.dynamic.sql.SqlColumn;

public final class TodoLengthViewDynamicSqlSupport {
    @Generated("org.mybatis.generator.api.MyBatisGenerator")
    public static final TodoLengthView todoLengthView = new TodoLengthView();

    @Generated("org.mybatis.generator.api.MyBatisGenerator")
    public static final SqlColumn<Integer> id = todoLengthView.id;

    @Generated("org.mybatis.generator.api.MyBatisGenerator")
    public static final SqlColumn<Integer> itemLength = todoLengthView.itemLength;

    @Generated("org.mybatis.generator.api.MyBatisGenerator")
    public static final class TodoLengthView extends AliasableSqlTable<TodoLengthView> {
        public final SqlColumn<Integer> id = column("ID", JDBCType.NUMERIC);

        public final SqlColumn<Integer> itemLength = column("ITEM_LENGTH", JDBCType.NUMERIC);

        public TodoLengthView() {
            super("TODO_LENGTH_VIEW", TodoLengthView::new);
        }
    }
}