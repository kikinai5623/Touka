5module.exports.config = {
    name: "غادري",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "عبدو_96",
    description: "مو شغلك 😇",
    commandCategory: "المطور",
    usages: "غادري [ايدي الكروب]",
    cooldowns: 10,
};

module.exports.run = async function({ api, event, args }) {
    const permission =
    [`61569409418704`,``]
    if (!permission.includes(event.senderID)) return api.sendMessage("لي مطور عبدو فقط😑", event.threadID, event.messageID);
        if (!args[0]) return api.removeUserFromGroup(api.getCurrentUserID(), event.threadID);
        if (!isNaN(args[0])) return api.removeUserFromGroup(api.getCurrentUserID(), args.join(" "));
                                                                                              }
