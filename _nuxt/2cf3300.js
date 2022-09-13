(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{1812:function(e,t,r){"use strict";(function(e){var n,o=this&&this.__extends||(n=function(e,b){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,b){e.__proto__=b}||function(e,b){for(var p in b)Object.prototype.hasOwnProperty.call(b,p)&&(e[p]=b[p])})(e,b)},function(e,b){if("function"!=typeof b&&null!==b)throw new TypeError("Class extends value "+String(b)+" is not a constructor or null");function t(){this.constructor=e}n(e,b),e.prototype=null===b?Object.create(b):(t.prototype=b.prototype,new t)}),c=this&&this.__assign||function(){return(c=Object.assign||function(e){for(var s,i=1,t=arguments.length;i<t;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(e[p]=s[p]);return e}).apply(this,arguments)},h=this&&this.__read||function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),c=[];try{for(;(void 0===t||t-->0)&&!(n=i.next()).done;)c.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return c};Object.defineProperty(t,"__esModule",{value:!0});var d=r(307),f=r(372),l=r(703),v=function(t){function r(e,r){var n;void 0===r&&(r={});var o=t.call(this,c(c({},e),{type:0}))||this;if(o.common=o._validateTxV(o.v,r.common),o.gasPrice=new d.BN((0,d.toBuffer)(""===e.gasPrice?"0x":e.gasPrice)),o.gasPrice.mul(o.gasLimit).gt(d.MAX_INTEGER)){var h=o._errorMsg("gas limit * gasPrice cannot exceed MAX_INTEGER (2^256-1)");throw new Error(h)}if(o._validateCannotExceedMaxInteger({gasPrice:o.gasPrice}),o.common.gteHardfork("spuriousDragon"))if(o.isSigned()){var l=o.v,v=o.common.chainIdBN().muln(2);(l.eq(v.addn(35))||l.eq(v.addn(36)))&&o.activeCapabilities.push(f.Capability.EIP155ReplayProtection)}else o.activeCapabilities.push(f.Capability.EIP155ReplayProtection);return(null===(n=null==r?void 0:r.freeze)||void 0===n||n)&&Object.freeze(o),o}return o(r,t),r.fromTxData=function(e,t){return void 0===t&&(t={}),new r(e,t)},r.fromSerializedTx=function(e,t){void 0===t&&(t={});var r=d.rlp.decode(e);if(!Array.isArray(r))throw new Error("Invalid serialized tx input. Must be array");return this.fromValuesArray(r,t)},r.fromRlpSerializedTx=function(e,t){return void 0===t&&(t={}),r.fromSerializedTx(e,t)},r.fromValuesArray=function(e,t){if(void 0===t&&(t={}),6!==e.length&&9!==e.length)throw new Error("Invalid transaction. Only expecting 6 values (for unsigned tx) or 9 values (for signed tx).");var n=h(e,9),o=n[0],c=n[1],f=n[2],l=n[3],v=n[4],data=n[5],m=n[6],y=n[7],s=n[8];return(0,d.validateNoLeadingZeroes)({nonce:o,gasPrice:c,gasLimit:f,value:v,v:m,r:y,s:s}),new r({nonce:o,gasPrice:c,gasLimit:f,to:l,value:v,data:data,v:m,r:y,s:s},t)},r.prototype.raw=function(){return[(0,d.bnToUnpaddedBuffer)(this.nonce),(0,d.bnToUnpaddedBuffer)(this.gasPrice),(0,d.bnToUnpaddedBuffer)(this.gasLimit),void 0!==this.to?this.to.buf:e.from([]),(0,d.bnToUnpaddedBuffer)(this.value),this.data,void 0!==this.v?(0,d.bnToUnpaddedBuffer)(this.v):e.from([]),void 0!==this.r?(0,d.bnToUnpaddedBuffer)(this.r):e.from([]),void 0!==this.s?(0,d.bnToUnpaddedBuffer)(this.s):e.from([])]},r.prototype.serialize=function(){return d.rlp.encode(this.raw())},r.prototype._getMessageToSign=function(){var t=[(0,d.bnToUnpaddedBuffer)(this.nonce),(0,d.bnToUnpaddedBuffer)(this.gasPrice),(0,d.bnToUnpaddedBuffer)(this.gasLimit),void 0!==this.to?this.to.buf:e.from([]),(0,d.bnToUnpaddedBuffer)(this.value),this.data];return this.supports(f.Capability.EIP155ReplayProtection)&&(t.push((0,d.toBuffer)(this.common.chainIdBN())),t.push((0,d.unpadBuffer)((0,d.toBuffer)(0))),t.push((0,d.unpadBuffer)((0,d.toBuffer)(0)))),t},r.prototype.getMessageToSign=function(e){void 0===e&&(e=!0);var t=this._getMessageToSign();return e?(0,d.rlphash)(t):t},r.prototype.getDataFee=function(){return this.cache.dataFee&&this.cache.dataFee.hardfork===this.common.hardfork()?this.cache.dataFee.value:(Object.isFrozen(this)&&(this.cache.dataFee={value:t.prototype.getDataFee.call(this),hardfork:this.common.hardfork()}),t.prototype.getDataFee.call(this))},r.prototype.getUpfrontCost=function(){return this.gasLimit.mul(this.gasPrice).add(this.value)},r.prototype.hash=function(){return Object.isFrozen(this)?(this.cache.hash||(this.cache.hash=(0,d.rlphash)(this.raw())),this.cache.hash):(0,d.rlphash)(this.raw())},r.prototype.getMessageToVerifySignature=function(){if(!this.isSigned()){var e=this._errorMsg("This transaction is not signed");throw new Error(e)}var t=this._getMessageToSign();return(0,d.rlphash)(t)},r.prototype.getSenderPublicKey=function(){var e,t=this.getMessageToVerifySignature();if(this.common.gteHardfork("homestead")&&(null===(e=this.s)||void 0===e?void 0:e.gt(f.N_DIV_2))){var r=this._errorMsg("Invalid Signature: s-values greater than secp256k1n/2 are considered invalid");throw new Error(r)}var n=this.v,o=this.r,s=this.s;try{return(0,d.ecrecover)(t,n,(0,d.bnToUnpaddedBuffer)(o),(0,d.bnToUnpaddedBuffer)(s),this.supports(f.Capability.EIP155ReplayProtection)?this.common.chainIdBN():void 0)}catch(e){r=this._errorMsg("Invalid Signature");throw new Error(r)}},r.prototype._processSignature=function(e,t,s){var n=new d.BN(e);this.supports(f.Capability.EIP155ReplayProtection)&&n.iadd(this.common.chainIdBN().muln(2).addn(8));var o={common:this.common};return r.fromTxData({nonce:this.nonce,gasPrice:this.gasPrice,gasLimit:this.gasLimit,to:this.to,value:this.value,data:this.data,v:n,r:new d.BN(t),s:new d.BN(s)},o)},r.prototype.toJSON=function(){return{nonce:(0,d.bnToHex)(this.nonce),gasPrice:(0,d.bnToHex)(this.gasPrice),gasLimit:(0,d.bnToHex)(this.gasLimit),to:void 0!==this.to?this.to.toString():void 0,value:(0,d.bnToHex)(this.value),data:"0x"+this.data.toString("hex"),v:void 0!==this.v?(0,d.bnToHex)(this.v):void 0,r:void 0!==this.r?(0,d.bnToHex)(this.r):void 0,s:void 0!==this.s?(0,d.bnToHex)(this.s):void 0}},r.prototype._validateTxV=function(e,t){var r;if(void 0!==e&&!e.eqn(0)&&(!t||t.gteHardfork("spuriousDragon"))&&!e.eqn(27)&&!e.eqn(28))if(t){var n=t.chainIdBN().muln(2);if(!(e.eq(n.addn(35))||e.eq(n.addn(36))))throw new Error("Incompatible EIP155-based V ".concat(e," and chain id ").concat(t.chainIdBN(),". See the Common parameter of the Transaction constructor to set the chain id."))}else{var o=void 0;o=e.subn(35).isEven()?35:36,r=e.subn(o).divn(2)}return this._getCommon(t,r)},r.prototype._unsignedTxImplementsEIP155=function(){return this.common.gteHardfork("spuriousDragon")},r.prototype._signedTxImplementsEIP155=function(){if(!this.isSigned()){var e=this._errorMsg("This transaction is not signed");throw new Error(e)}var t=this.common.gteHardfork("spuriousDragon"),r=this.v,n=this.common.chainIdBN().muln(2);return(r.eq(n.addn(35))||r.eq(n.addn(36)))&&t},r.prototype.errorStr=function(){var e=this._getSharedErrorPostfix();return e+=" gasPrice=".concat(this.gasPrice)},r.prototype._errorMsg=function(e){return"".concat(e," (").concat(this.errorStr(),")")},r}(l.BaseTransaction);t.default=v}).call(this,r(6).Buffer)},1870:function(e,t,r){"use strict";(function(e){var n,o=this&&this.__extends||(n=function(e,b){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,b){e.__proto__=b}||function(e,b){for(var p in b)Object.prototype.hasOwnProperty.call(b,p)&&(e[p]=b[p])})(e,b)},function(e,b){if("function"!=typeof b&&null!==b)throw new TypeError("Class extends value "+String(b)+" is not a constructor or null");function t(){this.constructor=e}n(e,b),e.prototype=null===b?Object.create(b):(t.prototype=b.prototype,new t)}),c=this&&this.__assign||function(){return(c=Object.assign||function(e){for(var s,i=1,t=arguments.length;i<t;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(e[p]=s[p]);return e}).apply(this,arguments)},h=this&&this.__read||function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),c=[];try{for(;(void 0===t||t-->0)&&!(n=i.next()).done;)c.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return c};Object.defineProperty(t,"__esModule",{value:!0});var d=r(307),f=r(703),l=r(372),v=r(993),m=e.from(1..toString(16).padStart(2,"0"),"hex"),y=function(t){function r(e,r){var n,o;void 0===r&&(r={});var h=t.call(this,c(c({},e),{type:1}))||this;h.DEFAULT_HARDFORK="berlin";var f=e.chainId,m=e.accessList,y=e.gasPrice;if(h.common=h._getCommon(r.common,f),h.chainId=h.common.chainIdBN(),!h.common.isActivatedEIP(2930))throw new Error("EIP-2930 not enabled on Common");h.activeCapabilities=h.activeCapabilities.concat([2718,2930]);var P=v.AccessLists.getAccessListData(null!=m?m:[]);if(h.accessList=P.accessList,h.AccessListJSON=P.AccessListJSON,v.AccessLists.verifyAccessList(h.accessList),h.gasPrice=new d.BN((0,d.toBuffer)(""===y?"0x":y)),h._validateCannotExceedMaxInteger({gasPrice:h.gasPrice}),h.gasPrice.mul(h.gasLimit).gt(d.MAX_INTEGER)){var w=h._errorMsg("gasLimit * gasPrice cannot exceed MAX_INTEGER");throw new Error(w)}if(h.v&&!h.v.eqn(0)&&!h.v.eqn(1)){w=h._errorMsg("The y-parity of the transaction should either be 0 or 1");throw new Error(w)}if(h.common.gteHardfork("homestead")&&(null===(n=h.s)||void 0===n?void 0:n.gt(l.N_DIV_2))){w=h._errorMsg("Invalid Signature: s-values greater than secp256k1n/2 are considered invalid");throw new Error(w)}return(null===(o=null==r?void 0:r.freeze)||void 0===o||o)&&Object.freeze(h),h}return o(r,t),Object.defineProperty(r.prototype,"senderR",{get:function(){return this.r},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"senderS",{get:function(){return this.s},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"yParity",{get:function(){return this.v},enumerable:!1,configurable:!0}),r.fromTxData=function(e,t){return void 0===t&&(t={}),new r(e,t)},r.fromSerializedTx=function(e,t){if(void 0===t&&(t={}),!e.slice(0,1).equals(m))throw new Error("Invalid serialized tx input: not an EIP-2930 transaction (wrong tx type, expected: ".concat(1,", received: ").concat(e.slice(0,1).toString("hex")));var n=d.rlp.decode(e.slice(1));if(!Array.isArray(n))throw new Error("Invalid serialized tx input: must be array");return r.fromValuesArray(n,t)},r.fromRlpSerializedTx=function(e,t){return void 0===t&&(t={}),r.fromSerializedTx(e,t)},r.fromValuesArray=function(e,t){if(void 0===t&&(t={}),8!==e.length&&11!==e.length)throw new Error("Invalid EIP-2930 transaction. Only expecting 8 values (for unsigned tx) or 11 values (for signed tx).");var n=h(e,11),o=n[0],c=n[1],f=n[2],l=n[3],v=n[4],m=n[5],data=n[6],y=n[7],P=n[8],w=n[9],s=n[10];(0,d.validateNoLeadingZeroes)({nonce:c,gasPrice:f,gasLimit:l,value:m,v:P,r:w,s:s});return new r({chainId:new d.BN(o),nonce:c,gasPrice:f,gasLimit:l,to:v,value:m,data:data,accessList:null!=y?y:[],v:void 0!==P?new d.BN(P):void 0,r:w,s:s},t)},r.prototype.getDataFee=function(){if(this.cache.dataFee&&this.cache.dataFee.hardfork===this.common.hardfork())return this.cache.dataFee.value;var e=t.prototype.getDataFee.call(this);return e.iaddn(v.AccessLists.getDataFeeEIP2930(this.accessList,this.common)),Object.isFrozen(this)&&(this.cache.dataFee={value:e,hardfork:this.common.hardfork()}),e},r.prototype.getUpfrontCost=function(){return this.gasLimit.mul(this.gasPrice).add(this.value)},r.prototype.raw=function(){return[(0,d.bnToUnpaddedBuffer)(this.chainId),(0,d.bnToUnpaddedBuffer)(this.nonce),(0,d.bnToUnpaddedBuffer)(this.gasPrice),(0,d.bnToUnpaddedBuffer)(this.gasLimit),void 0!==this.to?this.to.buf:e.from([]),(0,d.bnToUnpaddedBuffer)(this.value),this.data,this.accessList,void 0!==this.v?(0,d.bnToUnpaddedBuffer)(this.v):e.from([]),void 0!==this.r?(0,d.bnToUnpaddedBuffer)(this.r):e.from([]),void 0!==this.s?(0,d.bnToUnpaddedBuffer)(this.s):e.from([])]},r.prototype.serialize=function(){var base=this.raw();return e.concat([m,d.rlp.encode(base)])},r.prototype.getMessageToSign=function(t){void 0===t&&(t=!0);var base=this.raw().slice(0,8),r=e.concat([m,d.rlp.encode(base)]);return t?(0,d.keccak256)(r):r},r.prototype.hash=function(){if(!this.isSigned()){var e=this._errorMsg("Cannot call hash method if transaction is not signed");throw new Error(e)}return Object.isFrozen(this)?(this.cache.hash||(this.cache.hash=(0,d.keccak256)(this.serialize())),this.cache.hash):(0,d.keccak256)(this.serialize())},r.prototype.getMessageToVerifySignature=function(){return this.getMessageToSign()},r.prototype.getSenderPublicKey=function(){var e;if(!this.isSigned()){var t=this._errorMsg("Cannot call this method if transaction is not signed");throw new Error(t)}var r=this.getMessageToVerifySignature();if(this.common.gteHardfork("homestead")&&(null===(e=this.s)||void 0===e?void 0:e.gt(l.N_DIV_2))){t=this._errorMsg("Invalid Signature: s-values greater than secp256k1n/2 are considered invalid");throw new Error(t)}var n=this.yParity,o=this.r,s=this.s;try{return(0,d.ecrecover)(r,n.addn(27),(0,d.bnToUnpaddedBuffer)(o),(0,d.bnToUnpaddedBuffer)(s))}catch(e){t=this._errorMsg("Invalid Signature");throw new Error(t)}},r.prototype._processSignature=function(e,t,s){var n={common:this.common};return r.fromTxData({chainId:this.chainId,nonce:this.nonce,gasPrice:this.gasPrice,gasLimit:this.gasLimit,to:this.to,value:this.value,data:this.data,accessList:this.accessList,v:new d.BN(e-27),r:new d.BN(t),s:new d.BN(s)},n)},r.prototype.toJSON=function(){var e=v.AccessLists.getAccessListJSON(this.accessList);return{chainId:(0,d.bnToHex)(this.chainId),nonce:(0,d.bnToHex)(this.nonce),gasPrice:(0,d.bnToHex)(this.gasPrice),gasLimit:(0,d.bnToHex)(this.gasLimit),to:void 0!==this.to?this.to.toString():void 0,value:(0,d.bnToHex)(this.value),data:"0x"+this.data.toString("hex"),accessList:e,v:void 0!==this.v?(0,d.bnToHex)(this.v):void 0,r:void 0!==this.r?(0,d.bnToHex)(this.r):void 0,s:void 0!==this.s?(0,d.bnToHex)(this.s):void 0}},r.prototype.errorStr=function(){var e,t,r=this._getSharedErrorPostfix();return r+=" gasPrice=".concat(this.gasPrice," accessListCount=").concat(null!==(t=null===(e=this.accessList)||void 0===e?void 0:e.length)&&void 0!==t?t:0)},r.prototype._errorMsg=function(e){return"".concat(e," (").concat(this.errorStr(),")")},r}(f.BaseTransaction);t.default=y}).call(this,r(6).Buffer)},1871:function(e,t,r){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n=r(307),o=r(700),c=function(){function t(){}return t.fromTxData=function(e,t){if(void 0===t&&(t={}),"type"in e&&void 0!==e.type){var r=new n.BN((0,n.toBuffer)(e.type)).toNumber();if(0===r)return o.Transaction.fromTxData(e,t);if(1===r)return o.AccessListEIP2930Transaction.fromTxData(e,t);if(2===r)return o.FeeMarketEIP1559Transaction.fromTxData(e,t);throw new Error("Tx instantiation with type ".concat(r," not supported"))}return o.Transaction.fromTxData(e,t)},t.fromSerializedData=function(data,e){if(void 0===e&&(e={}),data[0]<=127){var t=void 0;switch(data[0]){case 1:t=2930;break;case 2:t=1559;break;default:throw new Error("TypedTransaction with ID ".concat(data[0]," unknown"))}return 1559===t?o.FeeMarketEIP1559Transaction.fromSerializedTx(data,e):o.AccessListEIP2930Transaction.fromSerializedTx(data,e)}return o.Transaction.fromSerializedTx(data,e)},t.fromBlockBodyData=function(data,t){if(void 0===t&&(t={}),e.isBuffer(data))return this.fromSerializedData(data,t);if(Array.isArray(data))return o.Transaction.fromValuesArray(data,t);throw new Error("Cannot decode transaction: unknown type input")},t.getTransactionClass=function(e,t){if(void 0===e&&(e=0),0==e||e>=128&&e<=255)return o.Transaction;switch(e){case 1:return o.AccessListEIP2930Transaction;case 2:return o.FeeMarketEIP1559Transaction;default:throw new Error("TypedTransaction with ID ".concat(e," unknown"))}},t}();t.default=c}).call(this,r(6).Buffer)},1872:function(e,t,r){"use strict";(function(e){var n,o=this&&this.__extends||(n=function(e,b){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,b){e.__proto__=b}||function(e,b){for(var p in b)Object.prototype.hasOwnProperty.call(b,p)&&(e[p]=b[p])})(e,b)},function(e,b){if("function"!=typeof b&&null!==b)throw new TypeError("Class extends value "+String(b)+" is not a constructor or null");function t(){this.constructor=e}n(e,b),e.prototype=null===b?Object.create(b):(t.prototype=b.prototype,new t)}),c=this&&this.__assign||function(){return(c=Object.assign||function(e){for(var s,i=1,t=arguments.length;i<t;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(e[p]=s[p]);return e}).apply(this,arguments)},h=this&&this.__read||function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),c=[];try{for(;(void 0===t||t-->0)&&!(n=i.next()).done;)c.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return c};Object.defineProperty(t,"__esModule",{value:!0});var d=r(307),f=r(703),l=r(372),v=r(993),m=e.from(2..toString(16).padStart(2,"0"),"hex"),y=function(t){function r(e,r){var n,o;void 0===r&&(r={});var h=t.call(this,c(c({},e),{type:2}))||this;h.DEFAULT_HARDFORK="london";var f=e.chainId,m=e.accessList,y=e.maxFeePerGas,P=e.maxPriorityFeePerGas;if(h.common=h._getCommon(r.common,f),h.chainId=h.common.chainIdBN(),!h.common.isActivatedEIP(1559))throw new Error("EIP-1559 not enabled on Common");h.activeCapabilities=h.activeCapabilities.concat([1559,2718,2930]);var w=v.AccessLists.getAccessListData(null!=m?m:[]);if(h.accessList=w.accessList,h.AccessListJSON=w.AccessListJSON,v.AccessLists.verifyAccessList(h.accessList),h.maxFeePerGas=new d.BN((0,d.toBuffer)(""===y?"0x":y)),h.maxPriorityFeePerGas=new d.BN((0,d.toBuffer)(""===P?"0x":P)),h._validateCannotExceedMaxInteger({maxFeePerGas:h.maxFeePerGas,maxPriorityFeePerGas:h.maxPriorityFeePerGas}),h.gasLimit.mul(h.maxFeePerGas).gt(d.MAX_INTEGER)){var x=h._errorMsg("gasLimit * maxFeePerGas cannot exceed MAX_INTEGER (2^256-1)");throw new Error(x)}if(h.maxFeePerGas.lt(h.maxPriorityFeePerGas)){x=h._errorMsg("maxFeePerGas cannot be less than maxPriorityFeePerGas (The total must be the larger of the two)");throw new Error(x)}if(h.v&&!h.v.eqn(0)&&!h.v.eqn(1)){x=h._errorMsg("The y-parity of the transaction should either be 0 or 1");throw new Error(x)}if(h.common.gteHardfork("homestead")&&(null===(n=h.s)||void 0===n?void 0:n.gt(l.N_DIV_2))){x=h._errorMsg("Invalid Signature: s-values greater than secp256k1n/2 are considered invalid");throw new Error(x)}return(null===(o=null==r?void 0:r.freeze)||void 0===o||o)&&Object.freeze(h),h}return o(r,t),Object.defineProperty(r.prototype,"senderR",{get:function(){return this.r},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"senderS",{get:function(){return this.s},enumerable:!1,configurable:!0}),Object.defineProperty(r.prototype,"yParity",{get:function(){return this.v},enumerable:!1,configurable:!0}),r.fromTxData=function(e,t){return void 0===t&&(t={}),new r(e,t)},r.fromSerializedTx=function(e,t){if(void 0===t&&(t={}),!e.slice(0,1).equals(m))throw new Error("Invalid serialized tx input: not an EIP-1559 transaction (wrong tx type, expected: ".concat(2,", received: ").concat(e.slice(0,1).toString("hex")));var n=d.rlp.decode(e.slice(1));if(!Array.isArray(n))throw new Error("Invalid serialized tx input: must be array");return r.fromValuesArray(n,t)},r.fromRlpSerializedTx=function(e,t){return void 0===t&&(t={}),r.fromSerializedTx(e,t)},r.fromValuesArray=function(e,t){if(void 0===t&&(t={}),9!==e.length&&12!==e.length)throw new Error("Invalid EIP-1559 transaction. Only expecting 9 values (for unsigned tx) or 12 values (for signed tx).");var n=h(e,12),o=n[0],c=n[1],f=n[2],l=n[3],v=n[4],m=n[5],y=n[6],data=n[7],P=n[8],w=n[9],x=n[10],s=n[11];return(0,d.validateNoLeadingZeroes)({nonce:c,maxPriorityFeePerGas:f,maxFeePerGas:l,gasLimit:v,value:y,v:w,r:x,s:s}),new r({chainId:new d.BN(o),nonce:c,maxPriorityFeePerGas:f,maxFeePerGas:l,gasLimit:v,to:m,value:y,data:data,accessList:null!=P?P:[],v:void 0!==w?new d.BN(w):void 0,r:x,s:s},t)},r.prototype.getDataFee=function(){if(this.cache.dataFee&&this.cache.dataFee.hardfork===this.common.hardfork())return this.cache.dataFee.value;var e=t.prototype.getDataFee.call(this);return e.iaddn(v.AccessLists.getDataFeeEIP2930(this.accessList,this.common)),Object.isFrozen(this)&&(this.cache.dataFee={value:e,hardfork:this.common.hardfork()}),e},r.prototype.getUpfrontCost=function(e){void 0===e&&(e=new d.BN(0));var t=d.BN.min(this.maxPriorityFeePerGas,this.maxFeePerGas.sub(e)).add(e);return this.gasLimit.mul(t).add(this.value)},r.prototype.raw=function(){return[(0,d.bnToUnpaddedBuffer)(this.chainId),(0,d.bnToUnpaddedBuffer)(this.nonce),(0,d.bnToUnpaddedBuffer)(this.maxPriorityFeePerGas),(0,d.bnToUnpaddedBuffer)(this.maxFeePerGas),(0,d.bnToUnpaddedBuffer)(this.gasLimit),void 0!==this.to?this.to.buf:e.from([]),(0,d.bnToUnpaddedBuffer)(this.value),this.data,this.accessList,void 0!==this.v?(0,d.bnToUnpaddedBuffer)(this.v):e.from([]),void 0!==this.r?(0,d.bnToUnpaddedBuffer)(this.r):e.from([]),void 0!==this.s?(0,d.bnToUnpaddedBuffer)(this.s):e.from([])]},r.prototype.serialize=function(){var base=this.raw();return e.concat([m,d.rlp.encode(base)])},r.prototype.getMessageToSign=function(t){void 0===t&&(t=!0);var base=this.raw().slice(0,9),r=e.concat([m,d.rlp.encode(base)]);return t?(0,d.keccak256)(r):r},r.prototype.hash=function(){if(!this.isSigned()){var e=this._errorMsg("Cannot call hash method if transaction is not signed");throw new Error(e)}return Object.isFrozen(this)?(this.cache.hash||(this.cache.hash=(0,d.keccak256)(this.serialize())),this.cache.hash):(0,d.keccak256)(this.serialize())},r.prototype.getMessageToVerifySignature=function(){return this.getMessageToSign()},r.prototype.getSenderPublicKey=function(){var e;if(!this.isSigned()){var t=this._errorMsg("Cannot call this method if transaction is not signed");throw new Error(t)}var r=this.getMessageToVerifySignature();if(this.common.gteHardfork("homestead")&&(null===(e=this.s)||void 0===e?void 0:e.gt(l.N_DIV_2))){t=this._errorMsg("Invalid Signature: s-values greater than secp256k1n/2 are considered invalid");throw new Error(t)}var n=this.v,o=this.r,s=this.s;try{return(0,d.ecrecover)(r,n.addn(27),(0,d.bnToUnpaddedBuffer)(o),(0,d.bnToUnpaddedBuffer)(s))}catch(e){t=this._errorMsg("Invalid Signature");throw new Error(t)}},r.prototype._processSignature=function(e,t,s){var n={common:this.common};return r.fromTxData({chainId:this.chainId,nonce:this.nonce,maxPriorityFeePerGas:this.maxPriorityFeePerGas,maxFeePerGas:this.maxFeePerGas,gasLimit:this.gasLimit,to:this.to,value:this.value,data:this.data,accessList:this.accessList,v:new d.BN(e-27),r:new d.BN(t),s:new d.BN(s)},n)},r.prototype.toJSON=function(){var e=v.AccessLists.getAccessListJSON(this.accessList);return{chainId:(0,d.bnToHex)(this.chainId),nonce:(0,d.bnToHex)(this.nonce),maxPriorityFeePerGas:(0,d.bnToHex)(this.maxPriorityFeePerGas),maxFeePerGas:(0,d.bnToHex)(this.maxFeePerGas),gasLimit:(0,d.bnToHex)(this.gasLimit),to:void 0!==this.to?this.to.toString():void 0,value:(0,d.bnToHex)(this.value),data:"0x"+this.data.toString("hex"),accessList:e,v:void 0!==this.v?(0,d.bnToHex)(this.v):void 0,r:void 0!==this.r?(0,d.bnToHex)(this.r):void 0,s:void 0!==this.s?(0,d.bnToHex)(this.s):void 0}},r.prototype.errorStr=function(){var e=this._getSharedErrorPostfix();return e+=" maxFeePerGas=".concat(this.maxFeePerGas," maxPriorityFeePerGas=").concat(this.maxPriorityFeePerGas)},r.prototype._errorMsg=function(e){return"".concat(e," (").concat(this.errorStr(),")")},r}(f.BaseTransaction);t.default=y}).call(this,r(6).Buffer)},372:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.N_DIV_2=t.isAccessList=t.isAccessListBuffer=t.Capability=void 0;var n=r(307);function o(input){if(0===input.length)return!0;var e=input[0];return!!Array.isArray(e)}!function(e){e[e.EIP155ReplayProtection=155]="EIP155ReplayProtection",e[e.EIP1559FeeMarket=1559]="EIP1559FeeMarket",e[e.EIP2718TypedTransaction=2718]="EIP2718TypedTransaction",e[e.EIP2930AccessLists=2930]="EIP2930AccessLists"}(t.Capability||(t.Capability={})),t.isAccessListBuffer=o,t.isAccessList=function(input){return!o(input)},t.N_DIV_2=new n.BN("7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0",16)},700:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var p in e)"default"===p||Object.prototype.hasOwnProperty.call(t,p)||n(t,e,p)},c=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.FeeMarketEIP1559Transaction=t.TransactionFactory=t.AccessListEIP2930Transaction=t.Transaction=void 0;var h=r(1812);Object.defineProperty(t,"Transaction",{enumerable:!0,get:function(){return c(h).default}});var d=r(1870);Object.defineProperty(t,"AccessListEIP2930Transaction",{enumerable:!0,get:function(){return c(d).default}});var f=r(1871);Object.defineProperty(t,"TransactionFactory",{enumerable:!0,get:function(){return c(f).default}});var l=r(1872);Object.defineProperty(t,"FeeMarketEIP1559Transaction",{enumerable:!0,get:function(){return c(l).default}}),o(r(372),t)},703:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),c=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t},h=this&&this.__values||function(e){var s="function"==typeof Symbol&&Symbol.iterator,t=s&&e[s],i=0;if(t)return t.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&i>=e.length&&(e=void 0),{value:e&&e[i++],done:!e}}};throw new TypeError(s?"Object is not iterable.":"Symbol.iterator is not defined.")},d=this&&this.__read||function(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,i=r.call(e),c=[];try{for(;(void 0===t||t-->0)&&!(n=i.next()).done;)c.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(o)throw o.error}}return c};Object.defineProperty(t,"__esModule",{value:!0}),t.BaseTransaction=void 0;var f=c(r(461)),l=r(307),v=r(372),m=function(){function e(e){this.cache={hash:void 0,dataFee:void 0},this.activeCapabilities=[],this.DEFAULT_CHAIN=f.Chain.Mainnet,this.DEFAULT_HARDFORK=f.Hardfork.Istanbul;var t=e.nonce,r=e.gasLimit,n=e.to,o=e.value,data=e.data,c=e.v,h=e.r,s=e.s,d=e.type;this._type=new l.BN((0,l.toBuffer)(d)).toNumber();var v=(0,l.toBuffer)(""===n?"0x":n),m=(0,l.toBuffer)(""===c?"0x":c),y=(0,l.toBuffer)(""===h?"0x":h),P=(0,l.toBuffer)(""===s?"0x":s);this.nonce=new l.BN((0,l.toBuffer)(""===t?"0x":t)),this.gasLimit=new l.BN((0,l.toBuffer)(""===r?"0x":r)),this.to=v.length>0?new l.Address(v):void 0,this.value=new l.BN((0,l.toBuffer)(""===o?"0x":o)),this.data=(0,l.toBuffer)(""===data?"0x":data),this.v=m.length>0?new l.BN(m):void 0,this.r=y.length>0?new l.BN(y):void 0,this.s=P.length>0?new l.BN(P):void 0,this._validateCannotExceedMaxInteger({value:this.value,r:this.r,s:this.s}),this._validateCannotExceedMaxInteger({gasLimit:this.gasLimit},64),this._validateCannotExceedMaxInteger({nonce:this.nonce},64,!0)}return Object.defineProperty(e.prototype,"transactionType",{get:function(){return this.type},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"type",{get:function(){return this._type},enumerable:!1,configurable:!0}),e.prototype.supports=function(e){return this.activeCapabilities.includes(e)},e.prototype.validate=function(e){void 0===e&&(e=!1);var t=[];return this.getBaseFee().gt(this.gasLimit)&&t.push("gasLimit is too low. given ".concat(this.gasLimit,", need at least ").concat(this.getBaseFee())),this.isSigned()&&!this.verifySignature()&&t.push("Invalid Signature"),e?t:0===t.length},e.prototype.getBaseFee=function(){var e=this.getDataFee().addn(this.common.param("gasPrices","tx"));return this.common.gteHardfork("homestead")&&this.toCreationAddress()&&e.iaddn(this.common.param("gasPrices","txCreation")),e},e.prototype.getDataFee=function(){for(var e=this.common.param("gasPrices","txDataZero"),t=this.common.param("gasPrices","txDataNonZero"),r=0,i=0;i<this.data.length;i++)0===this.data[i]?r+=e:r+=t;return new l.BN(r)},e.prototype.toCreationAddress=function(){return void 0===this.to||0===this.to.buf.length},e.prototype.isSigned=function(){var e=this.v,t=this.r,s=this.s;return 0===this.type?!!(e&&t&&s):!(void 0===e||!t||!s)},e.prototype.verifySignature=function(){try{var e=this.getSenderPublicKey();return 0!==(0,l.unpadBuffer)(e).length}catch(e){return!1}},e.prototype.getSenderAddress=function(){return new l.Address((0,l.publicToAddress)(this.getSenderPublicKey()))},e.prototype.sign=function(e){if(32!==e.length){var t=this._errorMsg("Private key must be 32 bytes in length.");throw new Error(t)}var r=!1;0===this.type&&this.common.gteHardfork("spuriousDragon")&&!this.supports(v.Capability.EIP155ReplayProtection)&&(this.activeCapabilities.push(v.Capability.EIP155ReplayProtection),r=!0);var n=this.getMessageToSign(!0),o=(0,l.ecsign)(n,e),c=o.v,h=o.r,s=o.s,d=this._processSignature(c,h,s);if(r){var f=this.activeCapabilities.indexOf(v.Capability.EIP155ReplayProtection);f>-1&&this.activeCapabilities.splice(f,1)}return d},e.prototype._getCommon=function(e,t){var r;if(t){var n=new l.BN((0,l.toBuffer)(t));if(e){if(!e.chainIdBN().eq(n)){var o=this._errorMsg("The chain ID does not match the chain ID of Common");throw new Error(o)}return e.copy()}return f.default.isSupportedChainId(n)?new f.default({chain:n,hardfork:this.DEFAULT_HARDFORK}):f.default.forCustomChain(this.DEFAULT_CHAIN,{name:"custom-chain",networkId:n,chainId:n},this.DEFAULT_HARDFORK)}return null!==(r=null==e?void 0:e.copy())&&void 0!==r?r:new f.default({chain:this.DEFAULT_CHAIN,hardfork:this.DEFAULT_HARDFORK})},e.prototype._validateCannotExceedMaxInteger=function(e,t,r){var n,o;void 0===t&&(t=256),void 0===r&&(r=!1);try{for(var c=h(Object.entries(e)),f=c.next();!f.done;f=c.next()){var v=d(f.value,2),m=v[0],y=v[1];switch(t){case 64:if(r){if(null==y?void 0:y.gte(l.MAX_UINT64)){var P=this._errorMsg("".concat(m," cannot equal or exceed MAX_UINT64 (2^64-1), given ").concat(y));throw new Error(P)}}else if(null==y?void 0:y.gt(l.MAX_UINT64)){P=this._errorMsg("".concat(m," cannot exceed MAX_UINT64 (2^64-1), given ").concat(y));throw new Error(P)}break;case 256:if(r){if(null==y?void 0:y.gte(l.MAX_INTEGER)){P=this._errorMsg("".concat(m," cannot equal or exceed MAX_INTEGER (2^256-1), given ").concat(y));throw new Error(P)}}else if(null==y?void 0:y.gt(l.MAX_INTEGER)){P=this._errorMsg("".concat(m," cannot exceed MAX_INTEGER (2^256-1), given ").concat(y));throw new Error(P)}break;default:P=this._errorMsg("unimplemented bits value");throw new Error(P)}}}catch(e){n={error:e}}finally{try{f&&!f.done&&(o=c.return)&&o.call(c)}finally{if(n)throw n.error}}},e.prototype._getSharedErrorPostfix=function(){var e="";try{e=this.isSigned()?(0,l.bufferToHex)(this.hash()):"not available (unsigned)"}catch(t){e="error"}var t="";try{t=this.isSigned().toString()}catch(t){e="error"}var r="";try{r=this.common.hardfork()}catch(e){r="error"}var n="tx type=".concat(this.type," hash=").concat(e," nonce=").concat(this.nonce," value=").concat(this.value," ");return n+="signed=".concat(t," hf=").concat(r)},e}();t.BaseTransaction=m},993:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AccessLists=void 0;var n=r(307),o=r(372),c=function(){function e(){}return e.getAccessListData=function(e){var t,r;if(e&&(0,o.isAccessList)(e)){t=e;for(var c=[],i=0;i<e.length;i++){for(var h=e[i],d=(0,n.toBuffer)(h.address),f=[],l=0;l<h.storageKeys.length;l++)f.push((0,n.toBuffer)(h.storageKeys[l]));c.push([d,f])}r=c}else{r=null!=e?e:[];var v=[];for(i=0;i<r.length;i++){var data=r[i],address=(0,n.bufferToHex)(data[0]),m=[];for(h=0;h<data[1].length;h++)m.push((0,n.bufferToHex)(data[1][h]));var y={address:address,storageKeys:m};v.push(y)}t=v}return{AccessListJSON:t,accessList:r}},e.verifyAccessList=function(e){for(var t=0;t<e.length;t++){var r=e[t],address=r[0],n=r[1];if(void 0!==r[2])throw new Error("Access list item cannot have 3 elements. It can only have an address, and an array of storage slots.");if(20!=address.length)throw new Error("Invalid EIP-2930 transaction: address length should be 20 bytes");for(var o=0;o<n.length;o++)if(32!=n[o].length)throw new Error("Invalid EIP-2930 transaction: storage slot length should be 32 bytes")}},e.getAccessListJSON=function(e){for(var t=[],r=0;r<e.length;r++){for(var o=e[r],c={address:"0x"+(0,n.setLengthLeft)(o[0],20).toString("hex"),storageKeys:[]},h=o[1],slot=0;slot<h.length;slot++){var d=h[slot];c.storageKeys.push("0x"+(0,n.setLengthLeft)(d,32).toString("hex"))}t.push(c)}return t},e.getDataFeeEIP2930=function(e,t){for(var r=t.param("gasPrices","accessListStorageKeyCost"),n=t.param("gasPrices","accessListAddressCost"),o=0,c=0;c<e.length;c++){o+=e[c][1].length}return e.length*n+o*r},e}();t.AccessLists=c}}]);