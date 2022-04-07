package com.superapp.todo.mapper;

import static com.superapp.todo.mapper.TodoViewDynamicSqlSupport.*;

import com.superapp.todo.entity.TodoView;
import java.util.Collection;
import java.util.List;
import java.util.Optional;
import javax.annotation.Generated;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.ResultMap;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.SelectProvider;
import org.apache.ibatis.type.JdbcType;
import org.mybatis.dynamic.sql.BasicColumn;
import org.mybatis.dynamic.sql.delete.DeleteDSLCompleter;
import org.mybatis.dynamic.sql.select.CountDSLCompleter;
import org.mybatis.dynamic.sql.select.SelectDSLCompleter;
import org.mybatis.dynamic.sql.select.render.SelectStatementProvider;
import org.mybatis.dynamic.sql.update.UpdateDSL;
import org.mybatis.dynamic.sql.update.UpdateDSLCompleter;
import org.mybatis.dynamic.sql.update.UpdateModel;
import org.mybatis.dynamic.sql.util.SqlProviderAdapter;
import org.mybatis.dynamic.sql.util.mybatis3.CommonCountMapper;
import org.mybatis.dynamic.sql.util.mybatis3.CommonDeleteMapper;
import org.mybatis.dynamic.sql.util.mybatis3.CommonInsertMapper;
import org.mybatis.dynamic.sql.util.mybatis3.CommonUpdateMapper;
import org.mybatis.dynamic.sql.util.mybatis3.MyBatis3Utils;

@Mapper
public interface TodoViewMapper extends CommonCountMapper, CommonDeleteMapper, CommonInsertMapper<TodoView>, CommonUpdateMapper {
    @Generated("org.mybatis.generator.api.MyBatisGenerator")
    BasicColumn[] selectList = BasicColumn.columnList(id, statusName, item);

    @Generated("org.mybatis.generator.api.MyBatisGenerator")
    @SelectProvider(type=SqlProviderAdapter.class, method="select")
    @Results(id="TodoViewResult", value = {
        @Result(column="ID", property="id", jdbcType=JdbcType.NUMERIC),
        @Result(column="STATUS_NAME", property="statusName", jdbcType=JdbcType.VARCHAR),
        @Result(column="ITEM", property="item", jdbcType=JdbcType.VARCHAR)
    })
    List<TodoView> selectMany(SelectStatementProvider selectStatement);

    @Generated("org.mybatis.generator.api.MyBatisGenerator")
    @SelectProvider(type=SqlProviderAdapter.class, method="select")
    @ResultMap("TodoViewResult")
    Optional<TodoView> selectOne(SelectStatementProvider selectStatement);

    @Generated("org.mybatis.generator.api.MyBatisGenerator")
    default long count(CountDSLCompleter completer) {
        return MyBatis3Utils.countFrom(this::count, todoView, completer);
    }

    @Generated("org.mybatis.generator.api.MyBatisGenerator")
    default int delete(DeleteDSLCompleter completer) {
        return MyBatis3Utils.deleteFrom(this::delete, todoView, completer);
    }

    @Generated("org.mybatis.generator.api.MyBatisGenerator")
    default int insert(TodoView row) {
        return MyBatis3Utils.insert(this::insert, row, todoView, c ->
            c.map(id).toProperty("id")
            .map(statusName).toProperty("statusName")
            .map(item).toProperty("item")
        );
    }

    @Generated("org.mybatis.generator.api.MyBatisGenerator")
    default int insertMultiple(Collection<TodoView> records) {
        return MyBatis3Utils.insertMultiple(this::insertMultiple, records, todoView, c ->
            c.map(id).toProperty("id")
            .map(statusName).toProperty("statusName")
            .map(item).toProperty("item")
        );
    }

    @Generated("org.mybatis.generator.api.MyBatisGenerator")
    default int insertSelective(TodoView row) {
        return MyBatis3Utils.insert(this::insert, row, todoView, c ->
            c.map(id).toPropertyWhenPresent("id", row::getId)
            .map(statusName).toPropertyWhenPresent("statusName", row::getStatusName)
            .map(item).toPropertyWhenPresent("item", row::getItem)
        );
    }

    @Generated("org.mybatis.generator.api.MyBatisGenerator")
    default Optional<TodoView> selectOne(SelectDSLCompleter completer) {
        return MyBatis3Utils.selectOne(this::selectOne, selectList, todoView, completer);
    }

    @Generated("org.mybatis.generator.api.MyBatisGenerator")
    default List<TodoView> select(SelectDSLCompleter completer) {
        return MyBatis3Utils.selectList(this::selectMany, selectList, todoView, completer);
    }

    @Generated("org.mybatis.generator.api.MyBatisGenerator")
    default List<TodoView> selectDistinct(SelectDSLCompleter completer) {
        return MyBatis3Utils.selectDistinct(this::selectMany, selectList, todoView, completer);
    }

    @Generated("org.mybatis.generator.api.MyBatisGenerator")
    default int update(UpdateDSLCompleter completer) {
        return MyBatis3Utils.update(this::update, todoView, completer);
    }

    @Generated("org.mybatis.generator.api.MyBatisGenerator")
    static UpdateDSL<UpdateModel> updateAllColumns(TodoView row, UpdateDSL<UpdateModel> dsl) {
        return dsl.set(id).equalTo(row::getId)
                .set(statusName).equalTo(row::getStatusName)
                .set(item).equalTo(row::getItem);
    }

    @Generated("org.mybatis.generator.api.MyBatisGenerator")
    static UpdateDSL<UpdateModel> updateSelectiveColumns(TodoView row, UpdateDSL<UpdateModel> dsl) {
        return dsl.set(id).equalToWhenPresent(row::getId)
                .set(statusName).equalToWhenPresent(row::getStatusName)
                .set(item).equalToWhenPresent(row::getItem);
    }
}