const path = require('path');
const FileUtil = require('./file_util.js');
const _ = require('lodash');
const cpntFilesPath = './src/components';
const files = FileUtil.readdirs(cpntFilesPath, '.jsx');

let arr = [];
files.forEach((f, idx) => {
  const path_obj = path.parse(f);

  let regExp = new RegExp('./src', 'gi');
  path_obj.path = path_obj.dir.replace(regExp, '@') + '/' + path_obj.name;

  // const {name} = path_obj;
  // const arr_dir = path_obj.dir.split('/');
  const folder_name = path_obj.dir.split('/')[3];
  path_obj.folder_name = folder_name;
  // path_obj.partial = `${folder_name}/${name}`;
  if (folder_name) arr.push(path_obj);
});
arr = _.groupBy(arr, 'folder_name');

let str = '';
for (const key in arr) {
  str += `ComponentList.${key} = [];`;
  arr[key].forEach((jsx_obj, idx) => {
    
    str += `
    ComponentList.${key}.push({
      경로 : '${jsx_obj.path}',
      컴포넌트 : dynamic(() => import('${jsx_obj.path}'), { ssr : false }),
    });
    `;
  });
}

const file_txt = `
import dynamic from 'next/dynamic';
const ComponentList = {};
${str}
export default ComponentList;
`;
FileUtil.writeFile('./src/pub/ComponentList.js', file_txt);
