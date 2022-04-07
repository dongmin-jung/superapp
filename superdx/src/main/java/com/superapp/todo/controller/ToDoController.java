package com.superapp.todo.controller;

import java.util.List;

import com.superapp.todo.dto.ToDoDTO;
import com.superapp.todo.service.ToDoService;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class ToDoController {

  private final ToDoService toDoService;

  @PostMapping("/todos")
  public ResponseEntity<Integer> createToDo(@RequestBody ToDoDTO todo) {
    return ResponseEntity.ok().body(this.toDoService.createTodo(todo));
  }

  @GetMapping("/todos")
  public ResponseEntity<List<ToDoDTO>> getAllToDoList() {
    return ResponseEntity.ok().body(this.toDoService.getAllToDoList());
  }

  @GetMapping("/todos/active")
  public ResponseEntity<List<ToDoDTO>> getActiveToDoList() {
    return ResponseEntity.ok().body(this.toDoService.getActiveToDoList());
  }

  @GetMapping("/todos/done")
  public ResponseEntity<List<ToDoDTO>> getDoneToDoList() {
    return ResponseEntity.ok().body(this.toDoService.getDoneToDoList());
  }

  @GetMapping("/todos/{id}/length")
  public ResponseEntity<Integer> getToDoLength(@PathVariable Integer id) {
    return ResponseEntity.ok().body(this.toDoService.getToDoLength(id));
  }

  @PutMapping("/todos")
  public ResponseEntity<Void> updateToDo(@RequestBody ToDoDTO todo) {
    this.toDoService.updateToDo(todo);
    return ResponseEntity.noContent().build();
  }

  @DeleteMapping("/todos/{id}")
  public ResponseEntity<Void> deleteToDo(@PathVariable Integer id) {
    this.toDoService.deleteTodo(id);
    return ResponseEntity.noContent().build();
  }
}
