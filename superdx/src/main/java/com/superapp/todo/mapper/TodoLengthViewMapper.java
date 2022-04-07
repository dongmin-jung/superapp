package com.superapp.todo.mapper;

import static com.superapp.todo.mapper.TodoLengthViewDynamicSqlSupport.*;

import com.superapp.todo.entity.TodoLengthView;
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
public interface TodoLengthViewMapper extends CommonCountMapper, CommonDeleteMapper, CommonInsertMapper<TodoLengthView>, CommonUpdateMapper {
    @Generated("org.mybatis.generator.api.MyBatisGenerator")
    BasicColumn[] selectList = BasicColumn.columnList(id, itemLength);

    @Generated("org.mybatis.generator.api.MyBatisGenerator")
    @SelectProvider(type=SqlProviderAdapter.class, method="select")
    @Results(id="TodoLengthViewResult", value = {
        @Result(column="ID", property="id", jdbcType=JdbcType.NUMERIC),
        @Result(column="ITEM_LENGTH", property="itemLength", jdbcType=JdbcType.NUMERIC)
    })
    List<TodoLengthView> selectMany(SelectStatementProvider selectStatement);

    @Generated("org.mybatis.generator.api.MyBatisGenerator")
    @SelectProvider(type=SqlProviderAdapter.class, method="select")
    @ResultMap("TodoLengthViewResult")
    Optional<TodoLengthView> selectOne(SelectStatementProvider selectStatement);

    @Generated("org.mybatis.generator.api.MyBatisGenerator")
    default long count(CountDSLCompleter completer) {
        return MyBatis3Utils.countFrom(this::count, todoLengthView, completer);
    }

    @Generated("org.mybatis.generator.api.MyBatisGenerator")
    default int delete(DeleteDSLCompleter completer) {
        return MyBatis3Utils.deleteFrom(this::delete, todoLengthView, completer);
    }

    @Generated("org.mybatis.generator.api.MyBatisGenerator")
    default int insert(TodoLengthView row) {
        return MyBatis3Utils.insert(this::insert, row, todoLengthView, c ->
            c.map(id).toProperty("id")
            .map(itemLength).toProperty("itemLength")
        );
    }

    @Generated("org.mybatis.generator.api.MyBatisGenerator")
    default int insertMultiple(Collection<TodoLengthView> records) {
        return MyBatis3Utils.insertMultiple(this::insertMultiple, records, todoLengthView, c ->
            c.map(id).toProperty("id")
            .map(itemLength).toProperty("itemLength")
        );
    }

    @Generated("org.mybatis.generator.api.MyBatisGenerator")
    default int insertSelective(TodoLengthView row) {
        return MyBatis3Utils.insert(this::insert, row, todoLengthView, c ->
            c.map(id).toPropertyWhenPresent("id", row::getId)
            .map(itemLength).toPropertyWhenPresent("itemLength", row::getItemLength)
        );
    }

    @Generated("org.mybatis.generator.api.MyBatisGenerator")
    default Optional<TodoLengthView> selectOne(SelectDSLCompleter completer) {
        return MyBatis3Utils.selectOne(this::selectOne, selectList, todoLengthView, completer);
    }

    @Generated("org.mybatis.generator.api.MyBatisGenerator")
    default List<TodoLengthView> select(SelectDSLCompleter completer) {
        return MyBatis3Utils.selectList(this::selectMany, selectList, todoLengthView, completer);
    }

    @Generated("org.mybatis.generator.api.MyBatisGenerator")
    default List<TodoLengthView> selectDistinct(SelectDSLCompleter completer) {
        return MyBatis3Utils.selectDistinct(this::selectMany, selectList, todoLengthView, completer);
    }

    @Generated("org.mybatis.generator.api.MyBatisGenerator")
    default int update(UpdateDSLCompleter completer) {
        return MyBatis3Utils.update(this::update, todoLengthView, completer);
    }

    @Generated("org.mybatis.generator.api.MyBatisGenerator")
    static UpdateDSL<UpdateModel> updateAllColumns(TodoLengthView row, UpdateDSL<UpdateModel> dsl) {
        return dsl.set(id).equalTo(row::getId)
                .set(itemLength).equalTo(row::getItemLength);
    }

    @Generated("org.mybatis.generator.api.MyBatisGenerator")
    static UpdateDSL<UpdateModel> updateSelectiveColumns(TodoLengthView row, UpdateDSL<UpdateModel> dsl) {
        return dsl.set(id).equalToWhenPresent(row::getId)
                .set(itemLength).equalToWhenPresent(row::getItemLength);
    }
}