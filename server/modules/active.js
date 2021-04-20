const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Active = new Schema({
    // 使用者名稱
    userName: {
        type: String,
    },
    // 活動類型
    activeType: {
        type: String,
    },
    // 活動開始時間
    startDate: {
        type: String,
    },
    // 活動結束時間
    endDate: {
        type: String,
    },
    // 標題
    title: {
        type: String,
    },
    // 地點
    place: {
        type: String,
    },
    // 人數
    population: {
        type: Number,
    },
    // 花費
    cost: {
        type: Number,
    },
    // 補充說明
    content: {
        type: String,
    },
    // 資料新增時間
    insertTime: {
        type: Date,
        default: Date.now,
    },
    // 羽球球網數量
    badmintonNets: {
        type: Number,
    },
    // 羽球球種品牌
    badmintonBrand: {
        type: String,
    },
    // 羽球實力程度
    badmintonStrength: [String],
    // 桌遊遊系列表
    boardGameList: [
        {
            type: {
                type: String,
            },
            name: { type: String },
        },
    ],
});

exports.Active = mongoose.model('active', Active);
