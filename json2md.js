
var json2md = require("json2md");

console.log(json2md([
    { p: "等了一个多月终于收到啦" },
    { img: [
        { title: "icon", source: "https://ci.xiaohongshu.com/xy_emo_zan.png?v=2" },
        { title: "icon", source: "https://ci.xiaohongshu.com/xy_emo_zan.png?v=2" },
        { title: "icon", source: "https://ci.xiaohongshu.com/xy_emo_zan.png?v=2" }
      ]
    },
    { p: "乔治公爵 & 玫瑰夫人" }
]));