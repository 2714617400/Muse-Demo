import a from './a'

const b = a;

const msg = '这是 b 文件';

export { msg }

export default function () {
  console.log(b, '导入a');
}