package com.Placement_preparation.Controller;

import com.Placement_preparation.Model.Questions;
import com.Placement_preparation.Service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/mocktest")
@CrossOrigin
public class QuestionController {
    @Autowired
    private QuestionService questionService;
    @GetMapping
    public List<Questions> getQuestions() {
        return questionService.getRandomQuestions(5);
        // Get 5 random questions
    }
}