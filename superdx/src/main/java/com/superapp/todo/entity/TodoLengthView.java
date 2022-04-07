package com.superapp.todo.entity;

import javax.annotation.Generated;

public class TodoLengthView {
    @Generated("org.mybatis.generator.api.MyBatisGenerator")
    private Integer id;

    @Generated("org.mybatis.generator.api.MyBatisGenerator")
    private Integer itemLength;

    @Generated("org.mybatis.generator.api.MyBatisGenerator")
    public Integer getId() {
        return id;
    }

    @Generated("org.mybatis.generator.api.MyBatisGenerator")
    public void setId(Integer id) {
        this.id = id;
    }

    @Generated("org.mybatis.generator.api.MyBatisGenerator")
    public Integer getItemLength() {
        return itemLength;
    }

    @Generated("org.mybatis.generator.api.MyBatisGenerator")
    public void setItemLength(Integer itemLength) {
        this.itemLength = itemLength;
    }
}