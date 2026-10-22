// ショット日報アプリの設定
// syncUrl   : このショット日報の Apps Script を「ウェブアプリ」としてデプロイしたときの URL (…/exec)
// token     : Code.gs の TOKEN と同じ合言葉
// zokeiUrl  : 造型日報の Apps Script の URL（造型日報の config.js の syncUrl と同じもの）→ 品番マスターを読む
// zokeiToken: 造型日報の合言葉
// workers   : 作業者のプルダウンに最初から出す名前（追加した名前はショット日報の全端末で共通になります）
window.SUNA_CONFIG = {
  syncUrl: "",
  token: "fhlPreuX6yyol2qU",
  zokeiUrl: "",
  zokeiToken: "3eAv6FdoiaIlRAW6",
  workers: ["グデ","リヤン","エサ","ウェダ","アリ","リオ"]
};
