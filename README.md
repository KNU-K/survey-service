# survey-service

- using stack

  - **express**
  - **passport**
  - **ejs**
  - **mysql**

#

## WEB SERVICE ���� ����

- naver login�� ���ؼ� .env�� clientid�� clientsecretid �߱����� �Է�

- ȯ�漳���ϱ� [[./config/survey.yml ����](./config/survey.yml)]

  ```
  question:
  q1:
      type: "content"
      question: "����1"
  q2:
      type: "option"
      question: "����2"
      o1: "����1"
      o2: "����2"
  q3:
      type: "selection" //�ߺ� ����
      question: "����3"
      s1: "����1"
      s2: "����2"
  ```

  ���� ���¸� ��Ű�� �����Ӱ� �Խ����� ���¸� ������ش�.

- DB ����

  - user DB��, survey DB�� �����Ѵ�.
  - user DB���� naver_login�� ���ؼ� ���� ������ �����ȴ�.
  - survey DB���� id�� survey_data�� json ���·� �Ľ̵Ǿ� ����Ǿ� �ִ�.

- ������ ����

  - login page

      <img src="./docs/login-page.png">

  - survey page
    <img src="./docs/survey-page.png">

* db ���� ����
  ![Alt text](image.png)
