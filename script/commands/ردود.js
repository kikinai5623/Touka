
const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "ردود_سياف",
  version: "1.7.3",
  hasPermssion: 0,
  credits: "𝒚𝒐𝒅𝒂 𝒕𝒂𝒌𝒂𝒉𝒂𝒔𝒉𝒊",
  description: "لا تتدخل في مالايعنيك يافتى",
  commandCategory: "المطور",
  usages: "سانتوريو باكا",
  usePrefix:false,
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Africa/Casablanca").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["معاك😍✨","😑تفضل شو بدك"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "احبك") || (event.body.toLowerCase() == "أحبك")) {
     return api.sendMessage("انا ايضا احبك😍✨", threadID);
   };

    if ((event.body.toLowerCase() == "شكرا") || (event.body.toLowerCase() ==  "هه")) {
     return api.sendMessage("عفو😊🌷", threadID);
   };

    if ((event.body.toLowerCase() == "فخامة") || (event.body.toLowerCase() == "فخامه")) {
     return api.sendMessage("من ذوقك😊✨", threadID);
   };

   if ((event.body.toLowerCase() == "صباح الخير") || (event.body.toLowerCase() == "صباح")) {
     return api.sendMessage("صباح النور😍🌷", threadID);
   };

   if ((event.body.toLowerCase() == "كيفكم") || (event.body.toLowerCase() == "كيفك")) {
     return api.sendMessage("الحمدلله و انت/ي", threadID);
   };

   if ((event.body.toLowerCase() == "اتفق") || (event.body.toLowerCase() == "أتفق")) {
     return api.sendMessage("اي شي ف انا متفقة معاكم😀✨", threadID);
   };

  if ((event.body.toLowerCase() == "نامو") || (event.body.toLowerCase() == "اصنام")) {
     return api.sendMessage("نام انت ايضا", threadID);
   };

   if ((event.body.toLowerCase() == "مرحبا") || (event.body.toLowerCase() == "جيت")) {
     return api.sendMessag("مراحب نورت يا اغلا ناس✨🤍", threadID);
   };

   if ((event.body.toLowerCase() == "هلو") || (event.body.toLowerCase() == "هلا")) {
     return api.sendMessage("اهلا بالغالي✨🤍", threadID);
   };

   if ((event.body.toLowerCase() == "باكا") || (event.body.toLowerCase() == "بوت غبي")) {
     return api.sendMessage("هناك كلاب تنبه قولو لها تسكت 🫢✨", threadID);
   };

   if ((event.body.toLowerCase() == "جميل") || (event.body.toLowerCase() == "حلو")) {
     return api.sendMessage("متلك 🫢🤍", threadID);
   };

   if ((event.body.toLowerCase() == "مح") || (event.body.toLowerCase() == "بحبك")) {
     return api.sendMessage("محاايي", threadID);
   };


   if ((event.body.toLowerCase() == "زوجني") || (event.body.toLowerCase() == "زوجني")) {
     return api.sendMessage("️لست شيخ يلا انقلع " , threadID);
   };

   if ((event.body.toLowerCase() == "كيف الحال") || (event.body.toLowerCase() == "كيف حالك ")) {
     return api.sendMessage("بخير بشوفتك😊🤍", threadID);
   };

   if ((event.body.toLowerCase() == "الحمدلله") || (event.body.toLowerCase() == "تمام وانت")) {
     return api.sendMessage("دايما يارب ✨🌷", threadID);
   };

   if ((event.body.toLowerCase() == "سانجي") || (event.body.toLowerCase() == "فينسموك سانجي")) {
     return api.sendMessage("️طباخ لعين'", threadID);
   };

   if ((event.body.toLowerCase() == "زورو ضايع") || (event.body.toLowerCase() ==  "لقد ضعت")) {
     return api.sendMessage("️هوي انا ضايع اكثر منك هل رايت طريق لعالم ون بيس اظنني امام تنين يشبه كايدو يقول لي تمنى أمنيات", threadID);
   };

   if ((event.body.toLowerCase() == "السلام عليكم") || (event.body.toLowerCase() == "سلام")) {
     return api.sendMessage("️وعليكم السلام 😊✨", threadID);
   };

   if ((event.body.toLowerCase() == "وداعا") || (event.body.toLowerCase() == "أنا ذاهب")) {
     return api.sendMessage("️أخبار رائعة لا تعد مجدداً😀✨", threadID);
   };

   if ((event.body.toLowerCase() == "من أنت") || (event.body.toLowerCase() == "مين انت")) {
     return api.sendMessage("️انا عمتكم سام التي لا تنام🫢✨", threadID);
   };

   if ((event.body.toLowerCase() == "بوت احمق") || (event.body.toLowerCase() == "بوت غبي")) {
     return api.sendMessage("️لم يقل لك ا ان تصف لي نفسك✨👽", threadID);
   };

   if ((event.body.toLowerCase() == "عبدو") || (event.body.toLowerCase() == "عبود")) {
     return api.sendMessage("️انه مطوري اتركه وشأنه دعه يرتاح😑🤍", threadID);
   };

   if ((event.body.toLowerCase() == "المالك") || (event.body.toLowerCase() == "المطور")) {
     return api.sendMessage("️عبدو عمك وعم عيالك✨😀", threadID);
   };

   if ((event.body.toLowerCase() == "مساء الخير") || (event.body.toLowerCase() == "مساء الخير")) {
     return api.sendMessage("مساء النور ", threadID);
   };

   if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙂")) {
     return api.sendMessage("وجهك ابشع من حياتي🤗✨", threadID);
   };

   if ((event.body.toLowerCase() == "جوعان") || (event.body.toLowerCase() == "عطشان")) {
     return api.sendMessage("روح نام😑", threadID);
   };

   if ((event.body.toLowerCase() == "بوت") || (event.body.toLowerCase() == "وينك")) {
     return api.sendMessage("عيونها✨🤗", threadID);
   };

   if ((event.body.toLowerCase() =="مع السلامه") || (event.body.toLowerCase() == "بدي انام")) {
     return api.sendMessage("في حفظ الله ✨🤍", threadID);
   };

   if ((event.body.toLowerCase() == "تصبحون على خير") || (event.body.toLowerCase() == "تصبح على خير")) {
     return api.sendMessage("قدامك كل خير", threadID);
   };

   if ((event.body.toLowerCase() == "الساكي") || (event.body.toLowerCase() == "ساكي")) {
     return api.sendMessage("هوي يافتى هل لديك البعض منه لنشربه ونرتاح قليلاً", threadID);
   };

   if ((event.body.toLowerCase() == "ياحب") || (event.body.toLowerCase() == "حبيبي")) {
     return api.sendMessage("احب سيوفي وكوني الافضل والقوى دائما", threadID);
   };

   if ((event.body.toLowerCase() == "سنجل") || (event.body.toLowerCase() == "وحيد")) {
     return api.sendMessage("روح تزوج✨🙂", threadID);
   };

   if ((event.body.toLowerCase() == "راح البوت") || (event.body.toLowerCase() == "وين راح")) {
     return api.sendMessage("لسا هون جرحت احاصيصي🙂💔", threadID);
   };

   if ((event.body.toLowerCase() == "كم عمرك ") || (event.body.toLowerCase() == "كم عمرك ")) {
     return api.sendMessage("عمري مطوري🤗🤍", threadID);
   };

  if (event.body.indexOf("سام") == 0 || (event.body.indexOf("سيمو") == 0)) {
    var msg = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
