package com.PlannerApp.planner.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Tasks {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String text;
	private int complete;
	private String card;

	public Tasks() {}

	public int getId() { return id; }
	public void setId( int id ) { this.id = id; }
	
	public String getText() { return text; }
	public void setText( String text ) { this.text = text; }

	public int getComplete() { return complete; }
	public void setComplete( int complete ) { this.complete = complete; }

	public String getCard() { return card; }
	public void setCard( String card ) { this.card = card; }

}
