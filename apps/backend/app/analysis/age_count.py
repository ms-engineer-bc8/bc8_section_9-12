import matplotlib.pyplot as plt
import japanize_matplotlib  # noqa: F401
import pandas as pd
from io import BytesIO
import base64


def get_age_count():
    data = {
        "x": [
            "不明",
            "18〜20歳",
            "21〜25歳",
            "26〜30歳",
            "31〜35歳",
            "36〜40歳",
            "41〜45歳",
            "46〜50歳",
            "51〜55歳",
            "56〜60歳",
            "61〜65歳",
            "66歳以上",
        ],
        "y": [35, 10, 20, 25, 30, 35, 50, 40, 45, 30, 20, 10],
    }

    df = pd.DataFrame(data)

    fig, ax = plt.subplots()
    ax.barh(df["x"], df["y"], color="violet")
    ax.set(title="年齢別グラフ")

    # plt.savefig("result_age_count.png")
    image_stream = BytesIO()
    plt.savefig(image_stream, format='png')
    image_stream.seek(0)
    base64_image = base64.b64encode(image_stream.read()).decode('utf-8')

    return base64_image