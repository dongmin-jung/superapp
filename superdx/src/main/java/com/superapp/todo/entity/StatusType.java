package com.superapp.todo.entity;

import javax.annotation.Generated;

public class StatusType {
    @Generated("org.mybatis.generator.api.MyBatisGenerator")
    private Integer id;

    @Generated("org.mybatis.generator.api.MyBatisGenerator")
    private String statusName;

    @Generated("org.mybatis.generator.api.MyBatisGenerator")
    public Integer getId() {
        return id;
    }

    @Generated("org.mybatis.generator.api.MyBatisGenerator")
    public void setId(Integer id) {
        this.id = id;
    }

    @Generated("org.mybatis.generator.api.MyBatisGenerator")
    public String getStatusName() {
        return statusName;
    }

    @Generated("org.mybatis.generator.api.MyBatisGenerator")
    public void setStatusName(String statusName) {
        this.statusName = statusName;
    }
}