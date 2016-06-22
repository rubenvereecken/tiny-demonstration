
import { Router } from 'express';
import path from 'path';
import fs from 'fs';
import tiny from 'tiny-compiler';
import tmp from 'tmp';
import child from 'child_process';

const router = Router();

router.get('/', getSources);
router.post('/compile', compileSource);

export default router;

const TINY_SOURCE_DIR = path.normalize(path.join(__dirname, '..', '..', 'tiny'));

function getSources(req, res) {
  const files = fs.readdirSync(TINY_SOURCE_DIR);
  const sources = [];
  files.forEach(function(filename) {
    const file = path.join(TINY_SOURCE_DIR, filename);
    const stats = fs.statSync(file);
    if (stats.isFile()) {
      const data = fs.readFileSync(file, {encoding: 'utf8'});
      sources.push({
        name: filename,
        source: data
      });
    }
  })
  res.send(sources);
}

function compileSource(req, res) {
  if (!req.body.source) return res.status(400).end();
  const source = req.body.source;
  console.log(req.body.config)
  const result = tiny.process(source, req.body.config);

  if (req.body.alsoExecute && result.errors.length === 0) {
    const tmpFile = tmp.fileSync();
    fs.writeFileSync(tmpFile.name, result.asm);
    let tmpBaseName = path.join(path.dirname(tmpFile.name), path.basename(tmpFile.name, '.tmp'))
    result.asmOutput = child.execSync('nasm -w+all -f elf -g -F stabs ' + tmpFile.name).toString();
    result.gccOutput = child.execSync(`gcc -m32 -Wl,-etiny -nostdlib ${tmpBaseName}.o -o ${tmpBaseName} -lc`).toString();
    try {
      result.tinyOutput = child.execSync(tmpBaseName, {input:req.body.input}).toString();
    } catch (e) {
      result.errors.push(e.message);
    }
    tmpFile.removeCallback();
  }

  res.send(result);
}
