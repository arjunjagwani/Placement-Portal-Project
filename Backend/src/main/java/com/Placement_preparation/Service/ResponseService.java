package com.Placement_preparation.Service;

import com.Placement_preparation.Model.Questions;
import com.Placement_preparation.Model.Response;
import com.Placement_preparation.Model.Users;
import com.Placement_preparation.Repository.QuestionRepository;
import com.Placement_preparation.Repository.ResponseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ResponseService {

    @Autowired
    private ResponseRepository responseRepository;

    @Autowired
    private QuestionRepository questionRepository;

    public int calculateScore(Long userId, List<ResponseDto> responses) {
        int score = 0;

        for (ResponseDto responseDto : responses) {
            Questions question = questionRepository.findById(responseDto.getQuestionId())
                    .orElseThrow(() -> new RuntimeException("Question not found with ID: " + responseDto.getQuestionId()));

            boolean isCorrect = responseDto.getUserAnswer().equals(question.getCorrectAnswer());
            Response response = new Response();
            response.setUser(new Users(userId));
            response.setQuestion(question);
            response.setUserAnswer(responseDto.getUserAnswer());
            response.setCorrect(isCorrect);
            responseRepository.save(response);

            if (isCorrect) {
                score += question.getMarks();
            }
        }
        return score;
    }
}
