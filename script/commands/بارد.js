const axios = require("axios");

module.exports.config = {
  name: "بارد",
  version: "1.0",
  hasPermission: 0,
  credits: "حسين يعقوبي",
  description: "وصف الصور أو تلقي استفسارات باستخدام API",
  commandCategory: "ai",
  usages: "[استفسار] أو الرد على صورة",
  cooldowns: 5,
};

module.exports.run = async function ({ api, event }) {
  const { threadID, messageID, senderID, type, messageReply, body } = event;

  const userID = senderID; // معرف المستخدم
  let inputPrompt = "";

  if (type === "message_reply" && messageReply.attachments[0]?.type === "photo") {
    const attachment = messageReply.attachments[0];
    const imageURL = attachment.url;

    // إرسال الصورة إلى API للحصول على الوصف
    inputPrompt = await getImageDescription(imageURL, userID);

    if (!inputPrompt) {
      api.sendMessage(
        `❌ لم يتم التعرف على النص أو الوصف من الصورة. الرجاء استخدام صورة أوضح.\n\n📌 معرف المستخدم: ${userID}`,
        threadID,
        messageID
      );
      return;
    }
  } else {
    // معالجة النص المدخل من المستخدم
    inputPrompt = body.slice(9).trim(); // "describe" + فراغ

    if (!inputPrompt) {
      api.sendMessage(
        `❌ يرجى تقديم استفسار أو الرد على صورة.\n\n📌 معرف المستخدم: ${userID}`,
        threadID,
        messageID
      );
      return;
    }
  }

  api.sendMessage(
    `🔎 جاري تحليل المدخلات باستخدام API... يرجى الانتظار.\n\n📌 معرف المستخدم: ${userID}`,
    threadID,
    messageID
  );

  try {
    // استدعاء API للحصول على النتيجة
    const result = await getResponseFromAPI(inputPrompt, userID);

    if (!result) {
      api.sendMessage(
        `❌ لم يتمكن API من تقديم رد. يرجى المحاولة لاحقًا.\n\n📌 معرف المستخدم: ${userID}`,
        threadID,
        messageID
      );
      return;
    }

    const responseMessage = `📝 الرد:\n\n${result}\n\n📌 معرف المستخدم: ${userID}`;
    api.sendMessage(responseMessage, threadID, messageID);
  } catch (error) {
    console.error(error);
    api.sendMessage("❌ حدث خطأ أثناء جلب البيانات أو معالجتها.", threadID, messageID);
  }
};

// دالة للحصول على وصف الصورة
async function getImageDescription(imageURL, userID) {
  try {
    const apiUrl = `https://kaiz-apis.gleeze.com/api/gpt-4o-pro?q=قم%20بوصف%20الصورة&uid=${userID}&imageUrl=${encodeURIComponent(
      imageURL
    )}`;

    const response = await axios.get(apiUrl);
    if (response.data?.response) {
      return response.data.response;
    }
    return null;
  } catch (error) {
    console.error("Error fetching image description:", error);
    return null;
  }
}

// دالة لاستدعاء API للإجابة على السؤال
async function getResponseFromAPI(prompt, userID) {
  try {
    const apiUrl = `https://kaiz-apis.gleeze.com/api/gpt-4o-pro?q=${encodeURIComponent(
      prompt
    )}&uid=${userID}`;

    const response = await axios.get(apiUrl);
    if (response.data?.response) {
      return response.data.response;
    }
    return null;
  } catch (error) {
    console.error("Error fetching API response:", error);
    return null;
  }
}
