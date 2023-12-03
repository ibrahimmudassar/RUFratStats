import pandas as pd
from datetime import datetime
import plotly.express as px


df = pd.read_csv("all_years_cleaned.csv")
df['simulated_dates'] = pd.to_datetime(df['simulated_dates'])
df = df.sort_values(by='simulated_dates')
df = df.loc[(df['simulated_dates'] >= datetime(2023,1,1))]
df['Charitable Donations Per Member'] = df['Charitable Donations'] / df["Total Chapter Size"]
df.dropna(inplace=True)


targeted_columns = ['Total Chapter GPA','Average Hours Per Member','Annual Report Score', 'Charitable Donations Per Member']

new_df = pd.DataFrame()
for i in targeted_columns:
    new_df[i] = (df[i].rank(pct=True) * 98 + 1).astype(int)
new_df['Chapter'] = df['Chapter']
new_df['Chapter Type'] = df['Chapter Type']


new_df['Total'] = new_df[targeted_columns].mean(axis=1)
new_df = new_df.sort_values(by='Total')

fig = px.bar(new_df, x='Chapter', y='Total', color='Chapter Type', title="RUFratStats Spring '23 Ranked")
fig.update_layout(xaxis={'categoryorder':'array', 'categoryarray': new_df.sort_values('Total')['Chapter']})

# fig.show()
fig.write_image("total_ranked_desktop.png", width=1920, height=1080)

print(new_df.to_string())