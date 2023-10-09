package com.springboot.task.management.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springboot.task.management.model.Task;
import com.springboot.task.management.repository.TaskRepository;

@Service
public class TaskServiceImpl implements TaskService{

	@Autowired
	private TaskRepository taskRepo;
	@Override
	public Task saveTask(Task task) {
		
		return taskRepo.save(task);
	}

	@Override
	public List<Task> getAllTask() {
		
		return taskRepo.findAll();
	}

	@Override
	public Task getTaskById(Integer id) {
		
		return taskRepo.findById(id).get();
	}

	@Override
	public String deleteTask(Integer id) {
		Task task =taskRepo.findById(id).get();
		if(task != null) {
			taskRepo.delete(task);
			return "Task Delete Sucessfully";
		}
		return "Somthing wrong on server" ;
	}

	@Override
	public Task editTask(Task task, Integer id) {
		Task oldTask = taskRepo.findById(id).get();

		oldTask.setTitle(task.getTitle());
		oldTask.setDescription(task.getDescription());
	
		oldTask.setCompleted(task.getCompleted());

		return taskRepo.save(oldTask);
	
	}

	
		
	}
	


