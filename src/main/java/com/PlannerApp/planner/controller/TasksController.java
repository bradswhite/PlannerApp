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

/**
 * Contains all the rest routes to call the methods to access and manipulate tasks in the db
 * @author Brad White
 * @date 8-22
 */
@RestController
@RequestMapping("/tasks")
@CrossOrigin
public class TasksController {
	@Autowired
	private TasksRepo tasksRepo;

	/**
	 * Adds a task to the db
	 * @parem {Task} task - task to add
	 * @return id - id of new task
	 * @example:
	 * User calls '.../tasks/add' with POST method and json in body
	 */
	@PostMapping("/add")
	public int add(
		@RequestBody Tasks task
	) {
		tasksRepo.save(task);
		return task.getId();
	}

	/**
	 * Gets and returns all tasks from db
	 * @return all tasks from db
	 * @example:
	 * User calls '../tasks/getAll' with GET method
	 */
	@GetMapping("/getAll")
	public List<Tasks> getAllItems() {
		return tasksRepo.findAll();
	}

	/**
	 * Gets task by id from db if found
	 * @param {int} id
	 * @return task data
	 * @example:
	 * User calls '../tasks/5' with GET method to retrive task with id 5
	 */
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

	/**
	 * Updates task in db by id
	 * @param {Task} task - data to update existing task
	 * @param {int} id - id of task to update
	 * @return successful or unsuccessful http response
	 * @example:
	 * User calls '../tasks/4' with PUT method and json in body to update task
	 */
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

	/**
	 * Deletes task in db by id
	 * @param {int} id - id of task to delete
	 * @return confirmation string
	 * @example:
	 * User calls '../tasks/7' with DELETE method to delete task number 7
	 */
	@DeleteMapping("/{id}")
	public String delete(
		@PathVariable int id
	) {
		tasksRepo.deleteById(id);
		return "Deleted item with id " + id;
	}
}
