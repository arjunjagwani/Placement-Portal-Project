package com.Placement_preparation.Service;

public class ResponseDto {

    private Long userId;
    private Long questionId;
    private String userAnswer; // Renamed from selectedOption
    private boolean isCorrect;

    public ResponseDto() {
        // Default constructor
    }

    public ResponseDto(Long userId, Long questionId, String userAnswer, boolean isCorrect) {
        this.userId = userId;
        this.questionId = questionId;
        this.userAnswer = userAnswer;
        this.isCorrect = isCorrect;
    }

    // Getters and Setters
    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public Long getQuestionId() {
        return questionId;
    }

    public void setQuestionId(Long questionId) {
        this.questionId = questionId;
    }

    public String getUserAnswer() {
        return userAnswer;
    }

    public void setUserAnswer(String userAnswer) {
        this.userAnswer = userAnswer;
    }

    public boolean isCorrect() {
        return isCorrect;
    }

    public void setCorrect(boolean isCorrect) {
        this.isCorrect = isCorrect;
    }
}

