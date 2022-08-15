package com.PlannerApp.planner.controller;

import java.util.List;
import java.util.NoSuchElementException;

import com.PlannerApp.planner.model.Tasks;
import com.PlannerApp.planner.repo.TasksRepo;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;

@RestController
@RequestMapping("/tasks")
@CrossOrigin
public class TasksController {
	@Autowired
	private TasksRepo tasksRepo;

	@PostMapping("/add")
	public int add(
		@RequestBody Tasks task
	) {
		tasksRepo.save(task);
		return task.getId();
	}

	@GetMapping("/getAll")
	public List<Tasks> getAllItems() {
		return tasksRepo.findAll();
	}

	@GetMapping("/{id}")
	public ResponseEntity<Tasks> get(
		@PathVariable int id
	) {
		try {
			Tasks task = tasksRepo.findById(id).get();
			return new ResponseEntity<Tasks>(task, HttpStatus.OK);
		} catch (NoSuchElementException e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@PutMapping("/{id}")
	public ResponseEntity<Tasks> update(
		@RequestBody Tasks newTask,
		@PathVariable int id
	) {
		try {
			tasksRepo.findById(id)
				.map(task -> {
					task.setText(newTask.getText());
					task.setComplete(newTask.getComplete());
					task.setCard(newTask.getCard());
					return tasksRepo.save(task);
				})
				.orElseGet(() -> {
					return tasksRepo.save(newTask);
				});

			return new ResponseEntity<>(HttpStatus.OK);
		} catch (NoSuchElementException e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@DeleteMapping("/{id}")
	public String delete(
		@PathVariable int id
	) {
		tasksRepo.deleteById(id);
		return "Deleted item with id " + id;
	}
}
