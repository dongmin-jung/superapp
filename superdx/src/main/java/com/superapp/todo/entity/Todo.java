package com.superapp.todo.entity;

import javax.annotation.Generated;

public class Todo {
    @Generated("org.mybatis.generator.api.MyBatisGenerator")
    private Integer id;

    @Generated("org.mybatis.generator.api.MyBatisGenerator")
    private Integer statusId;

    @Generated("org.mybatis.generator.api.MyBatisGenerator")
    private String item;

    @Generated("org.mybatis.generator.api.MyBatisGenerator")
    public Integer getId() {
        return id;
    }

    @Generated("org.mybatis.generator.api.MyBatisGenerator")
    public void setId(Integer id) {
        this.id = id;
    }

    @Generated("org.mybatis.generator.api.MyBatisGenerator")
    public Integer getStatusId() {
        return statusId;
    }

    @Generated("org.mybatis.generator.api.MyBatisGenerator")
    public void setStatusId(Integer statusId) {
        this.statusId = statusId;
    }

    @Generated("org.mybatis.generator.api.MyBatisGenerator")
    public String getItem() {
        return item;
    }

    @Generated("org.mybatis.generator.api.MyBatisGenerator")
    public void setItem(String item) {
        this.item = item;
    }
}