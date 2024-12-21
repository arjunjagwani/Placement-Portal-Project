package com.Placement_preparation.Service;

import com.Placement_preparation.Model.Questions;
import com.Placement_preparation.Model.Response;
import com.Placement_preparation.Model.Users;
import com.Placement_preparation.Repository.QuestionRepository;
import com.Placement_preparation.Repository.ResponseRepository;
import com.Placement_preparation.Repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ResponseService {

    private static final Logger logger = LoggerFactory.getLogger(ResponseService.class);

    @Autowired
    private ResponseRepository responseRepository;

    @Autowired
    private QuestionRepository questionRepository;

    @Autowired
    private UserRepository userRepository;

    public int calculateScore(Long userId, List<ResponseDto> responses) {
        int score = 0;

        for (ResponseDto responseDto : responses) {
            logger.error(String.valueOf(responseDto));
            Questions question = questionRepository.findById(responseDto.getQuestionId())
                    .orElseThrow(() -> new RuntimeException("Question not found with ID: " + responseDto.getQuestionId()));

            Users user = userRepository.findById(userId)
                    .orElseThrow(() -> new RuntimeException("User not found with ID: " + userId));
            ;
            boolean isCorrect = responseDto.getUserAnswer().equals(question.getCorrectAnswer());
            Response response = new Response();
            response.setUser(user);
            response.setQuestion(question);
            response.setUser_answer(responseDto.getUserAnswer());
            response.setIs_correct(isCorrect);
            responseRepository.save(response);

            if (isCorrect) {
                score += question.getMarks();
            }
        }
        return score;
    }
}
