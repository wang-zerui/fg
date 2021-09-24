import Table from "tty-table";
import _ from "lodash";
// import * as core from '@serverless-devs/core';
import logger from "../common/logger";
import JSZip from "jszip";
import fs from "fs";
import { unlink } from "fs-extra";
import path from "path";
import StdoutFormatter from "./component/stdout-formatter";
let zip = new JSZip();

export async function readDir(obj, nowPath, targetDir) {
  try {
    const pathDir = nowPath.split("/");
    const _dir = pathDir[pathDir.length - 1];
    if (_dir.includes(".")) {
      obj.file(_dir, fs.readFileSync(`${nowPath}`));
    } else {
      let files = fs.readdirSync(nowPath);
      files.forEach((fileName, index) => {
        let fillPath = nowPath + "/" + fileName;
        let file = fs.statSync(fillPath);
        if (file.isDirectory()) {
          let dirlist = zip.folder(path.relative(targetDir, fillPath));
          readDir(dirlist, fillPath, targetDir);
        } else {
          obj.file(fileName, fs.readFileSync(fillPath));
        }
      });
    }
  } catch (e) {}
}

export async function startZip(codePath: string) {
  const targetDir = path.resolve(codePath);
  try {
    await readDir(zip, targetDir, targetDir);
    const data = await zip.generateAsync({
      type: "nodebuffer",
      compression: "DEFLATE",
    });
    fs.writeFile("hello.zip", data, function (err) {
      /*...*/
    });

    return Buffer.from(data).toString("base64");
  } catch (e) {
    logger.error("File does not exist or file is invalid. please check");
  }
}

export async function deleteZip(zipPath: string) {
  const targetDir = path.resolve(zipPath);
  try {
    await unlink(targetDir);
  } catch (e) {
    logger.error(
      StdoutFormatter.stdoutFormatter.warn(
        "remove sync code",
        `path: ${zipPath}, error: ${e.message}`
      )
    );
  }
}

export const tableShow = (data, showKey) => {
  const options = {
    borderStyle: "solid",
    borderColor: "blue",
    headerAlign: "center",
    align: "left",
    color: "cyan",
    width: "100%",
  };
  const header_option = {
    headerColor: "cyan",
    color: "cyan",
    align: "left",
    width: "auto",
    formatter: (value) => value,
  };
  const header = showKey.map((value) =>
    _.isString(value)
      ? {
          ...header_option,
          value,
        }
      : { ...header_option, ...value }
  );

  console.log(Table(header, data, options).render());
};
