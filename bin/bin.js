#!/usr/bin/env node
var shrinkwrap = require('..');
var cwd = process.cwd();
shrinkwrap.read(cwd,function(err,json){
    if(err){return process.exit(1);}
    var mods = shrinkwrap.flatten(json);
    process.stdout.write(mods.map(modStr).join(' '));
    function modStr(mod){
      return [mod.name,mod.version].join('@');
    }
},'cortex');