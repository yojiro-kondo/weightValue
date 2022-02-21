// 再帰使って全組み合わせから価値の最大値を取る
// 計算量が多い[O(n^2)]
export const weightValueFull: (items: Array<{ weight: number, value: number }>, maxWeight: number) => number = (items, maxWeight) => {
    // 空ならゼロを返す
    if (items.length == 0) {
        return 0;
    }
    // 先頭の重量 > 制限重量なら先頭以外から最大値を取る
    if (items[0].weight > maxWeight) {
        return weightValueFull(items.slice(1), maxWeight);
    }
    // 先頭を使用する場合(trueValue)と使用しない場合(falseValue)を取り, 大きい方を採用
    const trueValue = items[0].value + weightValueFull(items.slice(1), maxWeight - items[0].weight);
    const falseValue = weightValueFull(items.slice(1), maxWeight);
    return trueValue > falseValue ? trueValue : falseValue;
};

// 簡易版
// 価値重量比が高い順に追加
// 計算量は少ない[O(n)]が完全ではない
export const weightValueFast = (items: Array<{ weight: number, value: number }>, maxWeight: number) => {
    // 重量当たりの価値が高い順にソート
    const sortedItems = items.sort((item1, item2) => {
        const ratio1 = item1.value / item1.weight;
        const ratio2 = item2.value / item2.weight;
        return ratio1 > ratio2 ? -1 : 1;
    });
    // 重さの総和を超えないように価値の総和を集計
    var currentWeight = 0;
    return sortedItems.reduce((previousValue, currentItem) => {
        if (currentWeight + currentItem.weight <= maxWeight) {
            currentWeight += currentItem.weight;
            return previousValue + currentItem.value;
        } else {
            return previousValue;
        }
    }, 0);
};