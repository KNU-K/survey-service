const { conn } = require("../config/db");

module.exports = class SurveyService {
  static saveSurvey(surveyDatas) {
    return new Promise((resolve, reject) => {
      const sql = "INSERT INTO survey (id,survey_data) values ?";
      conn.query(
        sql,
        [surveyDatas.map((obj) => [obj.id, obj.survey_data])],
        (err, result) => {
          if (err) reject(err);
          resolve(true);
        }
      );
    });
  }
};
