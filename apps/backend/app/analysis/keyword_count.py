import matplotlib.pyplot as plt
import japanize_matplotlib  # noqa: F401
import matplotlib.dates as dates
import pandas as pd
from datetime import datetime, timedelta

# サンプルデータの作成
data = {
    "x": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    "y": [10, 20, 25, 30, 35, 50, 40, 45, 50, 20, 35, 20],
}

data["x"] = [datetime(2024, month, 1) for month in data["x"]]

df = pd.DataFrame(data)

# グラフの作成
fig, ax = plt.subplots()
ax.plot(df["x"], df["y"], marker="o")
ax.set(title="誕生日")

plt.savefig("result_weekly_figure.png")
