## 課題内容
n個の品物があり、i番目の品物のそれぞれ重さと価値が weight[i],value[i]となっている (i=0,1,...,n−1)。
これらの品物から重さの総和がWを超えないように選んだときの、価値の総和の最大値を求めよ。

## 実装, テストコードについて
TypeScript + Jest で実装しています。

src/index.ts の関数 weightValueFull が実際のコードです。

`npm run build` でjavascriptに変換できます。

テストコードは src/index.test.ts に記述しています。
`npm run test` でテストを実行できます。