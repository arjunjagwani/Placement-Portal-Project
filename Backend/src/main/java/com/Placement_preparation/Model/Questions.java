package com.Placement_preparation.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Transient;

@Entity
public class Questions {

    @Id
    private Long id;
    private String questionText;
    private String option_1;
    private String option_2;
    private String option_3;
    private String option_4;
    private String correctAnswer;
    @Transient private int marks; // Added a marks field to store the question's marks.

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getQuestionText() {
        return questionText;
    }

    public void setQuestionText(String questionText) {
        this.questionText = questionText;
    }

    public String getOption1() {
        return option_1;
    }

    public void setOption1(String option1) {
        this.option_1 = option1;
    }

    public String getOption2() {
        return option_2;
    }

    public void setOption2(String option2) {
        this.option_2 = option2;
    }

    public String getOption3() {
        return option_3;
    }

    public void setOption3(String option3) {
        this.option_3 = option3;
    }

    public String getOption4() {
        return option_4;
    }

    public void setOption4(String option4) {
        this.option_4 = option4;
    }

    public String getCorrectAnswer() {
        return correctAnswer;
    }

    public void setCorrectAnswer(String correctAnswer) {
        this.correctAnswer = correctAnswer;
    }

    
    public int getMarks() {
        return 1;
    }


    public void setMarks(int marks) {
        this.marks = marks;
    }
}
