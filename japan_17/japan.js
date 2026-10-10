// --- 【第 17 課完整單字庫 (依教材)】 ---
const vocabulary = [
    { kana: "おぼえます", kanji: "覚えます", zh: "記住", cat: "第17課 動詞(II)" },
    { kana: "わすれます", kanji: "忘れます", zh: "忘記", cat: "第17課 動詞(II)" },
    { kana: "なくします", kanji: "", zh: "遺失、丟失", cat: "第17課 動詞(I)" },
    { kana: "はらいます", kanji: "払います", zh: "支付、付款", cat: "第17課 動詞(I)" },
    { kana: "かえします", kanji: "返します", zh: "歸還、返回", cat: "第17課 動詞(I)" },
    { kana: "でかけます", kanji: "出かけます", zh: "出門、外出", cat: "第17課 動詞(II)" },
    { kana: "ぬぎます", kanji: "脱ぎます", zh: "脫 (衣服、鞋等)", cat: "第17課 動詞(I)" },
    { kana: "もっていきます", kanji: "持って 行きます", zh: "帶去、拿去", cat: "第17課 動詞(I)" },
    { kana: "もってきます", kanji: "持って 来ます", zh: "帶來、拿來", cat: "第17課 動詞(III)" },
    { kana: "しんぱいします", kanji: "心配します", zh: "擔心", cat: "第17課 動詞(III)" },
    { kana: "ざんぎょうします", kanji: "残業します", zh: "加班", cat: "第17課 動詞(III)" },
    { kana: "しゅっちょうします", kanji: "出張します", zh: "出差", cat: "第17課 動詞(III)" },
    { kana: "のみます [くすりを～]", kanji: "飲みます", zh: "吃 [藥]", cat: "第17課 動詞(I)" },
    { kana: "はいります [おふろに～]", kanji: "入ります", zh: "泡澡、入浴", cat: "第17課 動詞(I)" },
    { kana: "たいせつ[な]", kanji: "大切[な]", zh: "重要的", cat: "第17課 な形容詞" },
    { kana: "だいじょうぶ[な]", kanji: "大丈夫[な]", zh: "沒問題的", cat: "第17課 な形容詞" },
    { kana: "あぶない", kanji: "危ない", zh: "危險的", cat: "第17課 い形容詞" },
    { kana: "きんえん", kanji: "禁煙", zh: "禁菸", cat: "第17課 名詞" },
    { kana: "ほけんしょう", kanji: "[健康]保険証", zh: "[健康]保險證、健保卡", cat: "第17課 名詞" },
    { kana: "ねつ", kanji: "熱", zh: "發燒、熱", cat: "第17課 名詞" },
    { kana: "びょうき", kanji: "病気", zh: "疾病", cat: "第17課 名詞" },
    { kana: "くすり", kanji: "薬", zh: "藥", cat: "第17課 名詞" },
    { kana: "[お]ふろ", kanji: "", zh: "泡澡、澡盆", cat: "第17課 名詞" },
    { kana: "うわぎ", kanji: "上着", zh: "上衣、外套", cat: "第17課 名詞" },
    { kana: "したぎ", kanji: "下着", zh: "內衣褲", cat: "第17課 名詞" },
    { kana: "2、3にち", kanji: "2、3日", zh: "兩三天", cat: "第17課 數量詞" },
    { kana: "～までに", kanji: "", zh: "到～為止 (時間期限)", cat: "第17課 助詞" },
    { kana: "ですから", kanji: "", zh: "因此", cat: "第17課 接續詞" },
    { kana: "のど", kanji: "", zh: "喉嚨", cat: "第17課 會話名詞" },
    { kana: "いたい", kanji: "痛い", zh: "痛的", cat: "第17課 會話形容詞" },
    { kana: "かぜ", kanji: "", zh: "感冒", cat: "第17課 會話名詞" },
    { kana: "それから", kanji: "", zh: "還有、接著", cat: "第17課 接續詞" },
    { kana: "おだいじに", kanji: "お大事に", zh: "請多保重 (對病人說)", cat: "第17課 會話" }
];

// --- 【第 17 課精選文型與會話例句】 ---
const sentences = [
    { jp: "写真を 撮らないで ください。", zh: "請不要拍照。" },
    { jp: "パスポートを 見せなければ なりません。", zh: "必須出示護照。" },
    { jp: "日曜日は 早く 起きなくても いいです。", zh: "星期天不用早起也可以。" },
    { jp: "そこに 車を 止めないで ください。……すみません。", zh: "請不要把車停在那裡。……對不起。" },
    { jp: "もう 12時ですよ。一人で 大丈夫ですか。……ええ、心配しないで ください。タクシーで 帰りますから。", zh: "已經12點了喔。一個人沒問題嗎？……是的，請別擔心。我會搭計程車回家。" },
    { jp: "明日から 香港へ 出張しなければ なりません。ですから、早く 帰ります。", zh: "明天開始必須去香港出差。因此要早點回去。" },
    { jp: "子どもも お金を 払わなければ なりませんか。……いいえ、払わなくても いいです。", zh: "小孩子也必須付錢嗎？……不，不付也可以。" },
    { jp: "レポートは いつまでに 出さなければ なりませんか。……金曜日までに 出して ください。", zh: "報告必須在什麼時候之前交？……請在星期五之前交。" },
    { jp: "どう しましたか。……きのうから のどが 痛くて、熱も 少し あります。", zh: "你怎麼了？……從昨天開始喉嚨痛，也有點發燒。" },
    { jp: "かぜですね。2、3日 ゆっくり 休んで ください。", zh: "是感冒呢。請好好休息兩三天。" },
    { jp: "今晩は おふろに 入らないで くださいね。……はい、わかりました。……じゃ、お大事に。", zh: "今晚請不要泡澡喔。……好的，我知道了。……那麼，請多保重。" }
];

// --- 【第 17 課動詞變化庫 (ない形 & 3大否定句型)】 ---
const verbs = [
    { masu: "すいます (吸います)", dict: "すう", nai: "すわない", group: "I 類動詞", zh: "吸 (煙)" },
    { masu: "いきます (行きます)", dict: "いく", nai: "いかない", group: "I 類動詞", zh: "去" },
    { masu: "いそぎます (急ぎます)", dict: "いそぐ", nai: "いそがない", group: "I 類動詞", zh: "趕快" },
    { masu: "はなします (話します)", dict: "はなす", nai: "はなさない", group: "I 類動詞", zh: "說話" },
    { masu: "まちます (待ちます)", dict: "まつ", nai: "またない", group: "I 類動詞", zh: "等待" },
    { masu: "よびます (呼びます)", dict: "よぶ", nai: "よばない", group: "I 類動詞", zh: "呼叫" },
    { masu: "のみます (飲みます)", dict: "のむ", nai: "のまない", group: "I 類動詞", zh: "喝、吃 (藥)" },
    { masu: "かえります (帰ります)", dict: "かえる", nai: "かえらない", group: "I 類動詞", zh: "回家" },
    { masu: "たべます (食べます)", dict: "たべる", nai: "たべない", group: "II 類動詞", zh: "吃" },
    { masu: "いれます (入れます)", dict: "いれる", nai: "いれない", group: "II 類動詞", zh: "放入" },
    { masu: "おきます (起きます)", dict: "おきる", nai: "おきない", group: "II 類動詞", zh: "起床" },
    { masu: "みます (見ます)", dict: "みる", nai: "みない", group: "II 類動詞", zh: "看" },
    { masu: "きます (来ます)", dict: "くる", nai: "こない", group: "III 類動詞", zh: "來" },
    { masu: "します", dict: "する", nai: "しない", group: "III 類動詞", zh: "做" },
    { masu: "しんぱいします (心配します)", dict: "しんぱいする", nai: "しんぱいしない", group: "III 類動詞", zh: "擔心" }
];

let vocabMode = 'jp-zh';
let currentVocabIdx = 0;
let currentSentenceIdx = 0;
let currentVerbIdx = 0;

let hwMissedQuestions = [];
let hwCurrentItem = null;

function speakText(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'ja-JP';
        utterance.rate = 0.85;
        window.speechSynthesis.speak(utterance);
    }
}

function switchTab(e, tabId) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    e.target.classList.add('active');
    document.getElementById(`${tabId}-section`).classList.add('active');
}

function normalizeText(text) {
    if (!text) return "";
    return text.toString().trim().toLowerCase()
        .replace(/[\s\(\)\[\]（）「」\.\…\。\、\！\？\!\?ー\-]/g, '')
        .replace(/[Ａ-Ｚａ-ｚ０-９]/g, s => String.fromCharCode(s.charCodeAt(0) - 0xFEE0));
}

/* --- 1. 單字卡區塊 --- */
function setVocabMode(mode) {
    vocabMode = mode;
    renderVocabQuestion();
}

function renderVocabQuestion() {
    const item = vocabulary[currentVocabIdx];
    document.getElementById("vocab-category").innerText = item.cat;
    document.getElementById("vocab-answer-container").style.display = "none";

    if (vocabMode === 'jp-zh') {
        document.getElementById("vocab-prompt-label").innerText = "請猜出中文意思是：";
        document.getElementById("vocab-question-text").innerText = item.kana;
        document.getElementById("vocab-answer-text").innerText = item.zh;
        document.getElementById("vocab-extra-text").innerText = (item.kanji && item.kanji.trim() !== '') ? `漢字：${item.kanji}` : '';
    } else {
        document.getElementById("vocab-prompt-label").innerText = "請猜出日文唸法是：";
        document.getElementById("vocab-question-text").innerText = item.zh;
        document.getElementById("vocab-answer-text").innerText = item.kana;
        document.getElementById("vocab-extra-text").innerText = (item.kanji && item.kanji.trim() !== '') ? `漢字：${item.kanji}` : '';
    }
}

function nextVocabQuestion() {
    currentVocabIdx = (currentVocabIdx + 1) % vocabulary.length;
    renderVocabQuestion();
}

function prevVocabQuestion() {
    currentVocabIdx = (currentVocabIdx - 1 + vocabulary.length) % vocabulary.length;
    renderVocabQuestion();
}

function toggleVocabAnswer() {
    const box = document.getElementById("vocab-answer-container");
    box.style.display = (box.style.display === "none" || box.style.display === "") ? "block" : "none";
}

function speakVocab() {
    speakText(vocabulary[currentVocabIdx].kana);
}

/* --- 2. 課文例句測驗 --- */
function renderSentenceQuestion() {
    const item = sentences[currentSentenceIdx];
    document.getElementById("sentence-question-text").innerText = item.zh;
    document.getElementById("sentence-answer-text").innerText = item.jp;
    document.getElementById("sentence-answer-container").style.display = "none";
}

function nextSentenceQuestion() {
    currentSentenceIdx = (currentSentenceIdx + 1) % sentences.length;
    renderSentenceQuestion();
}

function prevSentenceQuestion() {
    currentSentenceIdx = (currentSentenceIdx - 1 + sentences.length) % sentences.length;
    renderSentenceQuestion();
}

function toggleSentenceAnswer() {
    const box = document.getElementById("sentence-answer-container");
    box.style.display = (box.style.display === "none" || box.style.display === "") ? "block" : "none";
}

function speakSentence() {
    speakText(sentences[currentSentenceIdx].jp);
}

/* --- 3. 手寫測驗 --- */
function updateHwBadge() {
    document.getElementById("hw-review-badge").innerText = `待複習錯題：${hwMissedQuestions.length}`;
}

function nextHandwritingQuestion() {
    document.getElementById("hw-user-input").value = "";
    document.getElementById("hw-feedback-container").className = "feedback-box hidden";

    if (hwMissedQuestions.length > 0 && Math.random() < 0.6) {
        hwCurrentItem = hwMissedQuestions[0];
    } else {
        hwCurrentItem = vocabulary[Math.floor(Math.random() * vocabulary.length)];
    }

    document.getElementById("hw-category").innerText = hwCurrentItem.cat;
    document.getElementById("hw-question").innerText = hwCurrentItem.zh;
    updateHwBadge();
}

function checkHandwritingAnswer() {
    const userInput = document.getElementById("hw-user-input").value;
    if (!userInput) return alert("請先輸入答案！");

    const feedbackBox = document.getElementById("hw-feedback-container");
    feedbackBox.classList.remove("hidden");

    const cleanUser = normalizeText(userInput);
    const cleanKana = normalizeText(hwCurrentItem.kana);
    const cleanKanji = hwCurrentItem.kanji ? normalizeText(hwCurrentItem.kanji) : "";
    const isCorrect = (cleanUser === cleanKana || (cleanKanji && cleanUser === cleanKanji));

    if (isCorrect) {
        feedbackBox.className = "feedback-box correct";
        document.getElementById("hw-feedback-status").innerText = "🎉 比對正確！";
        document.getElementById("hw-feedback-detail").innerHTML = `標準答案：<strong>${hwCurrentItem.kana}</strong> ${hwCurrentItem.kanji ? '(' + hwCurrentItem.kanji + ')' : ''}`;
        
        const existIdx = hwMissedQuestions.findIndex(q => q.kana === hwCurrentItem.kana);
        if (existIdx !== -1) hwMissedQuestions.splice(existIdx, 1);
        speakText(hwCurrentItem.kana);
    } else {
        feedbackBox.className = "feedback-box wrong";
        document.getElementById("hw-feedback-status").innerText = "❌ 答錯了！已加入錯題佇列";
        document.getElementById("hw-feedback-detail").innerHTML = `標準答案：<strong>${hwCurrentItem.kana}</strong> ${hwCurrentItem.kanji ? '(' + hwCurrentItem.kanji + ')' : ''}`;

        const existIdx = hwMissedQuestions.findIndex(q => q.kana === hwCurrentItem.kana);
        if (existIdx === -1) hwMissedQuestions.push(hwCurrentItem);
    }
    updateHwBadge();
}

/* --- 4. ない形與句型變化區塊 --- */
function renderVerbQuestion() {
    const item = verbs[currentVerbIdx];
    document.getElementById("verb-group").innerText = item.group;
    document.getElementById("verb-masu").innerText = item.masu;
    document.getElementById("verb-meaning").innerText = `中文意思：${item.zh}`;
    
    document.getElementById("verb-ans-dict").innerText = item.dict;
    document.getElementById("verb-ans-nai").innerText = item.nai;
    document.getElementById("verb-ans-naide").innerText = `${item.nai}で ください`;
    
    // 把ない結尾換成なければ / なくて
    const stem = item.nai.slice(0, -1);
    document.getElementById("verb-ans-nakereba").innerText = `${stem}なければ なりません`;
    document.getElementById("verb-ans-nakutemo").innerText = `${stem}なくても いいです`;
    
    document.getElementById("verb-answer-container").style.display = "none";
}

function nextVerbQuestion() {
    currentVerbIdx = (currentVerbIdx + 1) % verbs.length;
    renderVerbQuestion();
}

function prevVerbQuestion() {
    currentVerbIdx = (currentVerbIdx - 1 + verbs.length) % verbs.length;
    renderVerbQuestion();
}

function toggleVerbAnswer() {
    const box = document.getElementById("verb-answer-container");
    box.style.display = (box.style.display === "none" || box.style.display === "") ? "block" : "none";
}

function speakCurrentVerb() {
    speakText(verbs[currentVerbIdx].dict);
}

/* --- 5. 單字列表與搜尋 --- */
function renderTable(data) {
    const tbody = document.getElementById("word-table-body");
    tbody.innerHTML = "";
    data.forEach(item => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><button class="btn-sound" onclick="speakText('${item.kana}')">🔊</button></td>
            <td><strong>${item.kana}</strong></td>
            <td>${item.kanji || '-'}</td>
            <td>${item.zh}</td>
        `;
        tbody.appendChild(tr);
    });
}

function filterWords() {
    const query = document.getElementById("search-input").value.toLowerCase();
    const filtered = vocabulary.filter(item => 
        item.kana.toLowerCase().includes(query) || 
        item.kanji.toLowerCase().includes(query) || 
        item.zh.includes(query)
    );
    renderTable(filtered);
}

window.onload = function() {
    renderVocabQuestion();
    renderSentenceQuestion();
    nextHandwritingQuestion();
    renderVerbQuestion();
    renderTable(vocabulary);
};