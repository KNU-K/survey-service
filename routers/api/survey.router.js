const passport = require("passport");
const { auth } = require("../../middlewares/auth");
const SurveyService = require("../../services/survey.service");
const router = require("express").Router();
router.post("/", auth, async (req, res) => {
  try {
    const surveyDatas = req.body;
    const newSurveyDatas = surveyDatas.map((surveyData) => ({
      id: req.user.id,
      survey_data: JSON.stringify(surveyData),
    }));

    await SurveyService.saveSurvey(newSurveyDatas);
    res.send({ code: 200, msg: "good" });
  } catch (err) {
    throw err;
  }
});
module.exports = router;
