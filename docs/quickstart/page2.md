# 2. Ticket機能の設定

```
/pticket setting
```

1. 匿名Ticketを受信するチャンネル, 匿名Ticketの開始用ボタンを設置するチャンネルを設定します
![pticket_01](./assets/pticket_setting_01.png)

:::caution 注意！
**匿名Ticket開始用のボタンを設置するチャンネルで実行**してください
:::

:::info オプション
- ticket_channel（必須）
  - 匿名Ticketを送信するチャンネルを指定してください
- mention_role（任意）
  - 匿名Ticketが作成されたときに、このロールがメンションされます
:::

2. 匿名Ticket開始用ボタンのパネルメッセージを自由に編集することができます
![pticket_02](./assets/pticket_setting_02.png)
3. 「確定」ボタンを押すと、以下の様なパネルが生成されます
![pticket_03](./assets/pticket_setting_03.png)

- 設定が完了すると、Ticket送信チャンネルにこのようなメッセージが送信されます。
![pticket_04](./assets/pticket_setting_04.png)
