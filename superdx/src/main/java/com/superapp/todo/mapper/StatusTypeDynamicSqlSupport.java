package com.superapp.todo.mapper;

import java.sql.JDBCType;
import javax.annotation.Generated;
import org.mybatis.dynamic.sql.AliasableSqlTable;
import org.mybatis.dynamic.sql.SqlColumn;

public final class StatusTypeDynamicSqlSupport {
    @Generated("org.mybatis.generator.api.MyBatisGenerator")
    public static final StatusType statusType = new StatusType();

    @Generated("org.mybatis.generator.api.MyBatisGenerator")
    public static final SqlColumn<Integer> id = statusType.id;

    @Generated("org.mybatis.generator.api.MyBatisGenerator")
    public static final SqlColumn<String> statusName = statusType.statusName;

    @Generated("org.mybatis.generator.api.MyBatisGenerator")
    public static final class StatusType extends AliasableSqlTable<StatusType> {
        public final SqlColumn<Integer> id = column("ID", JDBCType.NUMERIC);

        public final SqlColumn<String> statusName = column("STATUS_NAME", JDBCType.VARCHAR);

        public StatusType() {
            super("STATUS_TYPE", StatusType::new);
        }
    }
}