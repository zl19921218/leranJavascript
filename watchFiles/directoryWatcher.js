/*
 * @Author: 小石头
 * @Date: 2022-10-26 19:09:27
 * @LastEditors: 小石头
 * @LastEditTime: 2022-10-27 15:50:44
 * @Description: 
 */

const fs = require("fs");
const EventEmitter = require("events");
const path = require("path");

class DirectoryWatcher extends EventEmitter {
    constructor(optinos) {
        super();

        this.fileList = optinos.fileList || [];

        this.directoryList = optinos.directoryList || [];

        this.watchers = new Map();

        this.pause = false;

        this.poll = optinos.poll || 1000;

        this.scanTimeout = undefined;

        this.scanTime = 0;
    }

    collectFiles(pathList) {
        const files = [];

        const cycleFn = pathList => {
            pathList.forEach(p => {
                const stat = fs.statSync(p);

                if (stat.isFile(stat)) {
                    files.push(p)
                }

                if (stat.isDirectory()) {
                    const childPathList = fs.readdirSync(p).map(cp => path.join(p, cp));
                    cycleFn(childPathList)
                }
            })
        }

        cycleFn(pathList);
    }

    checkNeedWatcherFiles() {
        const newFileList = this.collectFiles(this.directoryList);
        const needWatcherFiles = getArrDifference(this.fileList, newFileList)
    }
}
