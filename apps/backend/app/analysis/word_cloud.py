from janome.tokenizer import Tokenizer
from wordcloud import WordCloud

reviews_result = [
    {
        "id": 1,
        "nickname": "ソロ活を極めたい女子",
        "text": "ひとりサンリオピューロランドに行ってきた〜！キティちゃんは平和の象徴。",
        "image": "no image",
        "likes_count": 0,
        "favorites_count": 0,
        "update_date": "2024-08-16T12:19:01.079482Z",
    },
    {
        "id": 2,
        "nickname": "ソロ活を極めたい女子",
        "text": "リムジン最高！",
        "image": "no image",
        "likes_count": 0,
        "favorites_count": 0,
        "update_date": "2024-08-16T12:20:47.234086Z",
    },
    {
        "id": 3,
        "nickname": "ソロ活を極めたい女子",
        "text": "早起きして気球に乗ってきた。",
        "image": "no image",
        "likes_count": 0,
        "favorites_count": 0,
        "update_date": "2024-08-16T12:21:19.200486Z",
    },
    {
        "id": 4,
        "nickname": "ソロ活を極めたい女子",
        "text": "ヘリからの景色が素敵すぎた！",
        "image": "no image",
        "likes_count": 0,
        "favorites_count": 0,
        "update_date": "2024-08-16T12:22:13.459913Z",
    },
]


def get_wordcloud(reviews_result):
    text = " ".join(review["text"] for review in reviews_result)
    print(text)
    t = Tokenizer()

    s = []
    for token in t.tokenize(text):
        p = token.part_of_speech.split(",")
        if "名詞" in p:
            s.append(token.surface)

    wc = WordCloud(width=640, height=480, font_path="C:/Windows/Fonts/HGRSGU.TTC")

    wc.generate(" ".join(s))
    wc.to_file("result-j.png")


get_wordcloud(reviews_result)
