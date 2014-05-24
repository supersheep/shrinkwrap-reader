var fs = require('fs');
var path = require('path');

var read = exports.read = function(dir,callback,prefix){
    var filepath = path.join(dir, prefix ? (prefix + "-" + "shrinkwrap.json") : "shrinkwrap.json");

    try{
        json = require(filepath);
    }catch(e){
        return callback(new Error("fail to load " + filepath));
    }

    return callback(null,json);
};

var flatten = exports.flatten = function(name, deps, result){

    if(arguments.length == 1){
        deps = arguments[0];
        name = null;
    }

    var result = result || [];

    if(name && !result.some(function(item){
        return item.name == name && item.version == deps.version;
    })){
        result.push({
            name: name,
            version: deps.version
        });
    }
    for(var name in deps.dependencies){
        flatten(name,deps.dependencies[name],result);
    }

    return result;
};

exports.dependencies = function(dir,callback,prefix){
    read(dir,function(err,json){
        if(err){return callback(err);}
        callback(null, flatten(json));
    },prefix);
}