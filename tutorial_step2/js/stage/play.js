import * as me from 'https://cdn.jsdelivr.net/npm/melonjs@10.1.0/dist/melonjs.module.js';

import EnemyManager from "../managers/enemy-manager.js";

class PlayScreen extends me.Stage {
    /**
     *  action to perform on state change
     */
    onResetEvent() {

        me.game.world.addChild(new me.ColorLayer("background", "#000000"), 0);

        me.game.world.addChild(me.pool.pull("player"), 1);

        this.enemyManager = new EnemyManager();
        this.enemyManager.createEnemies();
        me.game.world.addChild(this.enemyManager, 2);


        me.input.bindKey(me.input.KEY.LEFT, "left");
        me.input.bindKey(me.input.KEY.RIGHT, "right");
        me.input.bindKey(me.input.KEY.A, "left");
        me.input.bindKey(me.input.KEY.D, "right");
    }


    onDestroyEvent() {
        me.input.unbindKey(me.input.KEY.LEFT);
        me.input.unbindKey(me.input.KEY.RIGHT);
        me.input.unbindKey(me.input.KEY.A);
        me.input.unbindKey(me.input.KEY.D);
    }
};

export default PlayScreen;
