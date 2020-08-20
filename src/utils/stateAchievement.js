module.exports = {
    'achievements': [{
        id: 1,
        title: '勇敢小蒜瓣',        // 勋章名称
        desc: '第一次闯关',        // 描述
        profit: '500',            // 奖励
        complete: false,          // 是否完成
        completeID: 0,            // 未完成0，已完成1
        completeTypeId: 1,        // 成就类别，1=闯关次数；2=获得金币数；3=解锁粮食数
        completeCurrCount: 0,     // 当前已完成数量 - 进度
        completeNeedCount: 1,     // 满足条件的数量
        oncomplete(state, achievement) {
            popUp('解锁成就', achievement.title);
        }
    }, {
        id: 2,
        title: '闯关小能手',     // 勋章名称
        desc: '闯过第一关',      // 描述
        profit: '1000',         // 奖励
        complete: false,          // 是否完成
        completeID: 0,
        completeTypeId: 1,        // 成就类别，1=闯关次数；2=获得金币数；3=解锁粮食数
        completeCurrCount: 0,     // 当前已完成数量 - 进度
        completeNeedCount: 5,     // 满足条件的数量
        oncomplete(state, achievement) {
            popUp('解锁成就', achievement.title);
        }
    }, {
        id: 3,
        title: '青铜小蒜瓣',
        desc: '闯过20关',
        profit: '2000',
        complete: false,
        completeID: 0,
        completeTypeId: 1,
        completeCurrCount: 0,
        completeNeedCount: 20,
        oncomplete(state, achievement) {
            popUp('解锁成就', achievement.title);
        }
    }, {
        id: 4,
        title: '白银小蒜瓣',
        desc: '闯过40关',
        profit: '5000',
        complete: false,
        completeID: 0,
        completeTypeId: 1,
        completeCurrCount: 0,
        completeNeedCount: 40,
        oncomplete(state, achievement) {
            popUp('解锁成就', achievement.title);
        }
    }, {
        id: 5,
        title: '黄金小蒜瓣',
        desc: '闯过60关',
        profit: '8000',
        complete: false,
        completeID: 0,
        completeTypeId: 1,
        completeCurrCount: 0,
        completeNeedCount: 60,
        oncomplete(state, achievement) {
            popUp('解锁成就', achievement.title);
        }
    }, {
        id: 6,
        title: '铂金小蒜瓣',
        desc: '闯过80关',
        profit: '11000',
        complete: false,
        completeID: 0,
        completeTypeId: 1,
        completeCurrCount: 0,
        completeNeedCount: 80,
        oncomplete(state, achievement) {
            popUp('解锁成就', achievement.title);
        }
    }, {
        id: 7,
        title: '钻石小蒜瓣',
        desc: '闯过100关',
        profit: '15000',
        complete: false,
        completeID: 0,
        completeTypeId: 1,
        completeCurrCount: 0,
        completeNeedCount: 100,
        oncomplete(state, achievement) {
            popUp('解锁成就', achievement.title);
        }
    }, {
        id: 8,
        title: '星耀小蒜瓣',
        desc: '闯过150关',
        profit: '20000',
        complete: false,
        completeID: 0,
        completeTypeId: 1,
        completeCurrCount: 0,
        completeNeedCount: 150,
        oncomplete(state, achievement) {
            popUp('解锁成就', achievement.title);
        }
    }, {
        id: 9,
        title: '王者小蒜瓣',
        desc: '闯过200关',
        profit: '25000',
        complete: false,
        completeID: 0,
        completeTypeId: 1,
        completeCurrCount: 0,
        completeNeedCount: 200,
        oncomplete(state, achievement) {
            popUp('解锁成就', achievement.title);
        }
    }],
}

