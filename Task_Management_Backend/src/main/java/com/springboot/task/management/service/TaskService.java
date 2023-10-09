package com.springboot.task.management.service;

import java.util.List;

import com.springboot.task.management.model.Task;

public interface TaskService {
	
	public Task saveTask(Task task);

	public List<Task> getAllTask();

	public Task getTaskById(Integer id);

	public String deleteTask(Integer id);

	public Task editTask(Task task,Integer id);
	
	
}
