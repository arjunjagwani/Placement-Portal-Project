CREATE TABLE Response(
   response_id INTEGER  NOT NULL PRIMARY KEY 
  ,user_id     integer  NOT NULL
  ,question_id     bigint  NOT NULL
  ,user_answer INTEGER  NOT NULL
  ,is_correct  boolean NOT NULL,
   FOREIGN KEY (user_id) REFERENCES Users(user_id),
    FOREIGN KEY (question_id) REFERENCES Questions(question_id)

);
INSERT INTO Users(response_id,user_id,question_id,user_answer,is_correct) VALUES (1,1,2,4000,'TRUE');
INSERT INTO Users(response_id,user_id,question_id,user_answer,is_correct) VALUES (2,1,3,104,'FALSE');
