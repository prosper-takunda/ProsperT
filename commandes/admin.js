/*
ZeroTwo-MD V1.0 
 Coded By VihangaYT

Modified File : admin.js
Modified Date : 8/23/2023
Modified Time : 8:59:00 PM
*/

var _0x2555a1=_0x5182;(function(_0x428bbc,_0x3301e0){var _0x36af8a={_0xc36b5c:0x1bf,_0x28d8af:0x1c0},_0x6b933a=_0x5182,_0x214a5c=_0x428bbc();while(!![]){try{var _0x21f13c=-parseInt(_0x6b933a(0x1b1))/(0x3b1+-0x1d91+0x19e1)+parseInt(_0x6b933a(_0x36af8a._0xc36b5c))/(-0x1d57+-0x1661+-0x19dd*-0x2)*(parseInt(_0x6b933a(0x1b4))/(0x24a7*0x1+0x830+-0x2cd4))+-parseInt(_0x6b933a(0x1bd))/(0x1de5+-0x250a+-0x3*-0x263)+-parseInt(_0x6b933a(0x19a))/(-0x570+-0x4*0x13f+0xa71)*(-parseInt(_0x6b933a(0x1ab))/(-0x1*0x23f6+0x5f5*0x5+0x45*0x17))+parseInt(_0x6b933a(0x1a5))/(0x137*-0x9+-0x19f9+-0x3d*-0x9b)+-parseInt(_0x6b933a(_0x36af8a._0x28d8af))/(-0x10e+0xc01*0x3+0x1*-0x22ed)+-parseInt(_0x6b933a(0x199))/(-0x12*-0x5d+0x190e*0x1+0x1*-0x1f8f)*(-parseInt(_0x6b933a(0x1ae))/(-0xe5*-0x1d+0x1*-0x1039+-0x2*0x4d7));if(_0x21f13c===_0x3301e0)break;else _0x214a5c['push'](_0x214a5c['shift']());}catch(_0x5b9d0c){_0x214a5c['push'](_0x214a5c['shift']());}}}(_0x5668,-0x3df*0x3ef+0x1*-0x134cc+0x1a4eb7));const config=require('\x2e\x2e\x2f\x63\x6f\x6e\x66\x69\x67'),{cmd,commands}=require(_0x2555a1(0x1b7)),{getBuffer,getGroupAdmins,getRandom,h2k,isUrl,Json,runtime,sleep,fetchJson}=require('\x2e\x2e\x2f\x6c\x69\x62\x2f\x66\x75\x6e'+_0x2555a1(0x195));var tesadtag='';function _0x5182(_0x24e466,_0x21e02c){var _0x5218d5=_0x5668();return _0x5182=function(_0x92e8cf,_0x232966){_0x92e8cf=_0x92e8cf-(-0xaa7*0x1+0x850+0x3e9);var _0x30444e=_0x5218d5[_0x92e8cf];return _0x30444e;},_0x5182(_0x24e466,_0x21e02c);}if(config[_0x2555a1(0x196)]==='\x53\x49')tesadtag=_0x2555a1(0x19f)+_0x2555a1(0x1a8)+_0x2555a1(0x1b0)+_0x2555a1(0x198);else tesadtag='\x2a\x47\x69\x76\x65\x20\x6d\x65\x20\x74'+_0x2555a1(0x1c1)+_0x2555a1(0x1a7);var descg='';if(config[_0x2555a1(0x196)]==='\x53\x49')descg=_0x2555a1(0x1b8)+_0x2555a1(0x1a6)+_0x2555a1(0x1a0)+'\x20\x74\x61\x67\x20\u0d9a\u0dbb\u0dba\u0dd2\x2e';else descg=_0x2555a1(0x19b)+_0x2555a1(0x1bb)+_0x2555a1(0x193);function _0x5668(){var _0x4a4076=['\u0dbb\u0dd3\u0db8\u0da7\x20\x74\x65\x78\x74\x20','\x2a\x54\x68\x69\x73\x20\x69\x73\x20\x6e','\x74\x20\x61\x6e\x20\x61\x64\x6d\x69\x6e','\x32\x30\x35\x38\x6e\x46\x6c\x67\x4c\x42','\x73\x70\x6c\x69\x74','\x70\x61\x74\x74\x65\x72\x6e','\x33\x30\x31\x30\x75\x56\x62\x76\x6e\x4b','\x74\x61\x67\x61\x6c\x6c','\u0d91\u0d9a\u0d9a\u0dca\x20\u0daf\u0dd9\u0db1\u0dca\u0db1','\x36\x31\x30\x39\x35\x35\x6e\x51\x53\x4b\x4c\x6a','\x6b\x77\x77\x7a\x62','\x61\x64\x6d\x69\x6e','\x37\x30\x37\x32\x37\x34\x43\x4c\x75\x70\x43\x70','\x63\x61\x74\x65\x67\x6f\x72\x79','\x64\x65\x73\x63','\x2e\x2e\x2f\x63\x6f\x6d\x6d\x61\x6e\x64','\u0d91\u0dba\x20\u0d9a\u0dab\u0dca\u0da9\u0dcf\u0dba\u0db8','\x59\x6f\x75\x20\x61\x72\x65\x20\x6e\x6f','\u0d94\u0db6\x20\x61\x64\x6d\x69\x6e\x20\u0db1','\x20\x6d\x65\x6d\x62\x65\x72\x73\x20\x69','\x30\x7c\x33\x7c\x32\x7c\x34\x7c\x31','\x31\x37\x34\x33\x32\x30\x34\x45\x6d\x54\x78\x65\x4f','\u0ddc\u0dc0\u0dda\x20\x21','\x34\x67\x69\x4b\x6a\x66\x70','\x37\x35\x30\x38\x36\x32\x34\x50\x74\x6a\x61\x56\x76','\x65\x78\x74\x20\x74\x6f\x20\x74\x61\x67','\x6b\x65\x79','\x2e\x68\x69\x64\x65\x74\x61\x67\x20\x3c','\x6e\x20\x67\x72\x6f\x75\x70\x2e','\x6d\x61\x70','\x63\x74\x69\x6f\x6e\x73','\x4c\x41\x4e\x47','\x66\x69\x6c\x65\x6e\x61\x6d\x65','\x2e\x20\x21\x2a','\x33\x30\x30\x38\x37\x71\x59\x72\x6d\x5a\x41','\x34\x35\x30\x68\x56\x5a\x71\x6a\x5a','\x49\x74\x20\x74\x61\x67\x20\x61\x6c\x6c','\x2a\x45\x72\x72\x6f\x72\x20\x21\x21\x2a','\x20\u0db1\u0ddc\u0dc0\u0dda\x20\x21\x2a','\x74\x65\x78\x74','\x2a\u0db8\u0da7\x20\x74\x61\x67\x20\u0d9a\u0dd2','\u0dcf\u0db8\u0dcf\u0da2\u0dd2\u0d9a\u0dba\u0dd2\u0db1\u0dca','\x68\x69\x3e','\x72\x65\x61\x63\x74','\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67','\x61\x6c\x69\x61\x73','\x37\x38\x36\x36\x36\x32\x31\x44\x72\x4f\x54\x71\x76','\u0dda\x20\u0dc3\u0dd2\u0dba\u0dbd\u0dd4\u0db8\x20\u0dc3','\x20\x21\x2a'];_0x5668=function(){return _0x4a4076;};return _0x5668();}var ONLGROUP='';if(config['\x4c\x41\x4e\x47']==='\x53\x49')ONLGROUP='\x2a\u0db8\u0dd9\u0dba\x20\x67\x72\x6f\x75\x70'+_0x2555a1(0x19d);else ONLGROUP=_0x2555a1(0x1a9)+'\x6f\x74\x20\x61\x20\x67\x72\x6f\x75\x70'+'\x20\x21\x2a';var ADMIN='';if(config[_0x2555a1(0x196)]==='\x53\x49')ADMIN=_0x2555a1(0x1ba)+_0x2555a1(0x1be);else ADMIN=_0x2555a1(0x1b9)+_0x2555a1(0x1aa)+'\x20\x21';var _0x388753={};_0x388753[_0x2555a1(0x1ad)]='\x68\x69\x64\x65\x74\x61\x67',_0x388753[_0x2555a1(0x1a2)]='\ud83d\udd16',_0x388753[_0x2555a1(0x1a4)]=[_0x2555a1(0x1af),'\x74\x61\x67'],_0x388753[_0x2555a1(0x1b6)]=descg,_0x388753[_0x2555a1(0x1b5)]=_0x2555a1(0x1b3),_0x388753['\x75\x73\x65']=_0x2555a1(0x192)+_0x2555a1(0x1a1),_0x388753[_0x2555a1(0x197)]=__filename,cmd(_0x388753,async(_0x28a3cc,_0x262506,_0x4a1aba,{from:_0x6c981a,l:_0xe0c1c4,quoted:_0x13c980,body:_0x309141,isCmd:_0x15b5a5,command:_0x29e65a,args:_0x348bf4,q:_0x1e76b5,isGroup:_0x190fc9,sender:_0x363f4f,senderNumber:_0x557e44,botNumber2:_0x1869b5,botNumber:_0x5bee3d,pushname:_0x4b9f3f,isMe:_0x497310,isOwner:_0x1afb3c,groupMetadata:_0x46a0ad,groupName:_0xbb8e60,participants:_0x3f4cb3,groupAdmins:_0x55e44d,isBotAdmins:_0xaa4162,isAdmins:_0x46bfaa,reply:_0x14fe1f})=>{var _0xb61f7e={_0x431e5e:0x19c,_0x1c56c6:0x1bc,_0x426cb3:0x1ac,_0x2d4955:0x19e,_0x2a3b17:0x1a2,_0x58664b:0x1a3,_0x3cdf52:0x1a3,_0x504e7c:0x194,_0x49b3f9:0x1b2},_0x28b10a=_0x2555a1,_0x293926={'\x43\x76\x6e\x48\x68':function(_0xd537e9,_0x957af7){return _0xd537e9(_0x957af7);},'\x6b\x77\x77\x7a\x62':_0x28b10a(_0xb61f7e._0x431e5e)};try{var _0x12dfb3=_0x28b10a(_0xb61f7e._0x1c56c6)[_0x28b10a(_0xb61f7e._0x426cb3)]('\x7c'),_0x124777=0x14a*0x7+0x57+-0x31f*0x3;while(!![]){switch(_0x12dfb3[_0x124777++]){case'\x30':if(!_0x190fc9)return _0x293926['\x43\x76\x6e\x48\x68'](_0x14fe1f,ONLGROUP);continue;case'\x31':var _0x172197={};_0x172197[_0x28b10a(_0xb61f7e._0x2d4955)]='\u2705',_0x172197[_0x28b10a(0x1c2)]=_0x262506[_0x28b10a(0x1c2)];var _0x6002ce={};_0x6002ce[_0x28b10a(_0xb61f7e._0x2a3b17)]=_0x172197,await _0x28a3cc[_0x28b10a(_0xb61f7e._0x58664b)+'\x65'](_0x6c981a,_0x6002ce);continue;case'\x32':if(!_0x1e76b5)return await _0x293926['\x43\x76\x6e\x48\x68'](_0x14fe1f,tesadtag);continue;case'\x33':if(!_0x46bfaa)return _0x293926['\x43\x76\x6e\x48\x68'](_0x14fe1f,ADMIN);continue;case'\x34':_0x28a3cc[_0x28b10a(_0xb61f7e._0x3cdf52)+'\x65'](_0x6c981a,{'\x74\x65\x78\x74':_0x1e76b5?_0x1e76b5:'','\x6d\x65\x6e\x74\x69\x6f\x6e\x73':_0x3f4cb3[_0x28b10a(_0xb61f7e._0x504e7c)](_0x1e5edf=>_0x1e5edf['\x69\x64'])});continue;}break;}}catch(_0x4ae7ec){_0x14fe1f(_0x293926[_0x28b10a(_0xb61f7e._0x49b3f9)]),_0x293926['\x43\x76\x6e\x48\x68'](_0xe0c1c4,_0x4ae7ec);}});

// Our Website: https://vihangayt.me