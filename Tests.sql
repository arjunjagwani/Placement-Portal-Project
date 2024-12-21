CREATE TABLE MockTests(
   test_id     INTEGER  NOT NULL PRIMARY KEY 
  ,title       DATE  NOT NULL
  ,description VARCHAR(27) NOT NULL
  ,duration    VARCHAR(6) NOT NULL
);
INSERT INTO MockTests(test_id,title,description,duration) VALUES (1,'Mocktest 1','Technical and Aptitude Test','15 Min');
INSERT INTO MockTests(test_id,title,description,duration) VALUES (2,'Mocktest 2','Technical and Aptitude Test','15 Min');
INSERT INTO MockTests(test_id,title,description,duration) VALUES (3,'Mocktest 3','Technical and Aptitude Test','15 Min');
INSERT INTO MockTests(test_id,title,description,duration) VALUES (4,'Mocktest 4','Technical and Aptitude Test','15 Min');
INSERT INTO MockTests(test_id,title,description,duration) VALUES (5,'Mocktest 5','Technical and Aptitude Test','15 Min');
