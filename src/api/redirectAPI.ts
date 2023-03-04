import { instance } from "@/api/baseAPI";

// 지원금 지침 안내 페이지
const moneyHuidelinesURL = "redirect/money_guidelines";
export const goToMoneyGuidelines = async () => {
  const response = await instance.get(moneyHuidelinesURL);
  return response;
};

// 출입기록 문의 페이지
const questionURL = "redirect/question";
export const goToQuestion = async () => {
  const response = await instance.get(questionURL);
  return response;
};

// 이용 가이드 지침 안내 페이지
const usageURL = "redirect/usage";
export const goToUsage = async () => {
  const response = await instance.get(usageURL);
  return response;
};

// 피드백 안내 페이지
const feedbackURL = "redirect/feedback";
export const goToFeedback = async () => {
  const response = await instance.get(feedbackURL);
  return response;
};
