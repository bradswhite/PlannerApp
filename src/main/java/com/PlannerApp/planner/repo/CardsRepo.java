package com.PlannerApp.planner.repo;

import com.PlannerApp.planner.model.Cards;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CardsRepo extends JpaRepository<Cards, Integer> {}
