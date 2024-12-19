package com.Placement_preparation.Service;

import com.Placement_preparation.Model.Questions;
import com.Placement_preparation.Repository.QuestionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class QuestionService {
    @Autowired
    private QuestionRepository questionRepository;
    public List<Questions> getRandomQuestions(int limit) {
        List<Questions> allQuestions = questionRepository.findAll();
        Collections.shuffle(allQuestions); // Shuffle the list randomly
        return allQuestions.stream().limit(limit).toList();
    }
}