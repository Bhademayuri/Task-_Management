package com.springboot.task.management.repository;



import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.task.management.model.Task;

public interface TaskRepository extends JpaRepository<Task, Integer> {


}