cc.Class({
    extends: cc.Component,

    properties: {
        ["X轴移动距离"]: 1,
        ["y轴移动距离"]: 1,
        ["移动速度(单位：像素/秒)"]: 20,
        ["随机量"]: 10,
    },

    //随机移动
    randomMove: function () {


        var dt = cc.v2(this["X轴移动距离"], this["y轴移动距离"]).mag() / this["移动速度(单位：像素/秒)"]

        var randomDir = cc.v2(Math.random() * 2 - 1, Math.random() * 2 - 1).normalize().mul(this["随机量"]);
        //var randomDir = cc.pMult(cc.pNormalize(cc.v2(Math.random() * 2 - 1, Math.random() * 2 - 1)), this["随机量"])

        var moveDir = cc.v2(this["X轴移动距离"], this["y轴移动距离"]).add(randomDir);

        var action = cc.repeatForever(cc.sequence(
            cc.moveBy(dt, moveDir),
            cc.moveBy(dt, moveDir.mul(-1))
        ))

        this.node.runAction(action)
    },

    // use this for initialization
    onLoad: function () {
        this.randomMove()
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});