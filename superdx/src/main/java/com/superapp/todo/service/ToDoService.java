package com.superapp.todo.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.superapp.todo.dto.ToDoDTO;
import com.superapp.todo.mapper.StatusTypeMapper;
import com.superapp.todo.mapper.TodoMapper;
import com.superapp.todo.mapper.TodoViewMapper;
import com.superapp.todo.mapper.TodoLengthViewMapper;
import com.superapp.todo.entity.Todo;
import com.superapp.todo.entity.TodoView;
import com.superapp.todo.entity.TodoLengthView;
import com.superapp.todo.entity.StatusType;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

import static org.mybatis.dynamic.sql.SqlBuilder.*;

@Service
@RequiredArgsConstructor
public class ToDoService {

  private final TodoMapper toDoMapper;
  private final TodoViewMapper toDoViewMapper;
  private final TodoLengthViewMapper toDoLengthViewMapper;
  private final StatusTypeMapper statusTypeMapper;

  public Integer createTodo(ToDoDTO todo) {
    Optional<StatusType> status = statusTypeMapper
        .selectOne(
            c -> c.where(com.superapp.todo.mapper.StatusTypeDynamicSqlSupport.statusName, isEqualTo(todo.getStatus())));
    Todo todoEntity = new Todo();
    todoEntity.setStatusId(status.get().getId());
    todoEntity.setItem(todo.getItem());
    toDoMapper.insert(todoEntity);
    return todoEntity.getId();
  }

  public List<ToDoDTO> getAllToDoList() {
    List<ToDoDTO> dtoList = new ArrayList<>();
    List<TodoView> toDoList = toDoViewMapper.select(c -> c);
    for (TodoView toDo : toDoList) {
      ToDoDTO dto = ToDoDTO.builder()
          .id(toDo.getId())
          .status(toDo.getStatusName())
          .item(toDo.getItem())
          .build();
      dtoList.add(dto);
    }
    return dtoList;
  }

  public List<ToDoDTO> getActiveToDoList() {
    List<ToDoDTO> dtoList = new ArrayList<>();
    List<TodoView> toDoList = toDoViewMapper
        .select(c -> c.where(com.superapp.todo.mapper.TodoViewDynamicSqlSupport.statusName, isEqualTo("Active")));
    for (TodoView toDo : toDoList) {
      ToDoDTO dto = ToDoDTO.builder()
          .id(toDo.getId())
          .status(toDo.getStatusName())
          .item(toDo.getItem())
          .build();
      dtoList.add(dto);
    }
    return dtoList;
  }

  public List<ToDoDTO> getDoneToDoList() {
    List<ToDoDTO> dtoList = new ArrayList<>();
    List<TodoView> toDoList = toDoViewMapper
        .select(c -> c.where(com.superapp.todo.mapper.TodoViewDynamicSqlSupport.statusName, isEqualTo("Done")));
    for (TodoView toDo : toDoList) {
      ToDoDTO dto = ToDoDTO.builder()
          .id(toDo.getId())
          .status(toDo.getStatusName())
          .item(toDo.getItem())
          .build();
      dtoList.add(dto);
    }
    return dtoList;
  }

  public Integer getToDoLength(Integer id) {
    Optional<TodoLengthView> toDoLength = toDoLengthViewMapper
        .selectOne(
            c -> c.where(com.superapp.todo.mapper.TodoLengthViewDynamicSqlSupport.id,
                isEqualTo(id)));
    return toDoLength.get().getItemLength();
  }

  public void updateToDo(ToDoDTO todo) {
    Optional<StatusType> status = statusTypeMapper
        .selectOne(
            c -> c.where(com.superapp.todo.mapper.StatusTypeDynamicSqlSupport.statusName, isEqualTo(todo.getStatus())));
    Todo todoEntity = new Todo();
    todoEntity.setId(todo.getId());
    todoEntity.setStatusId(status.get().getId());
    todoEntity.setItem(todo.getItem());
    toDoMapper.updateByPrimaryKeySelective(todoEntity);
  }

  public void deleteTodo(Integer id) {
    toDoMapper.deleteByPrimaryKey(id);
    return;
  }

}
