

cc.Class({
    extends: cc.Component,

    properties: {

    },

    // use this for initialization
    onLoad: function () {


        //开始游戏
        cc.director.loadScene("startScene")

        return;
        cc.log("开始加载资源")
        cc.view.enableRetina(false)
        // cc.view.enableAutoFullScreen(true)
        cc.myAssets = {}

        var resList = [
            //"sounds",
            "pics",
            // "scenes",
            "prefabs",
            "fonts",
            "anims",
        ]

        // 加载目录下所有资源
        var count = 0
        for (var i = 0; i < resList.length; i++) {
            cc.assetManager.loadAny
                //cc.loader.loadResAll
                (resList[i], function (i, err, assets) {
                    cc.myAssets[resList[i]] = assets
                    cc.log("资源加载完成" + count)
                    count++
                    if (count >= resList.length) {
                        //为了前置加载音效，这里直接为这个场景添加所有声音的组件
                        // for (var j = 0; j < soundResList.length; j++) {
                        //     cc.audioEngine.playEffect(cc.url.raw(soundResList[j]), false, 0)
                        // }


                        //开始游戏
                        cc.director.loadScene("startScene")
                    }
                }.bind(this, i))
        }

    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
