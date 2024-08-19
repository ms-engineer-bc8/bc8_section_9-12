from janome.tokenizer import Tokenizer
from wordcloud import WordCloud


def get_wordcloud(text):
    t = Tokenizer()

    s = []
    for token in t.tokenize(text):
        p = token.part_of_speech.split(",")
        if "名詞" in p:
            s.append(token.surface)

    wc = WordCloud(width=640, height=480)

    wc.generate(" ".join(s))
    wc.to_file("result-j.png")

    return "result-j.png"
