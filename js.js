// //#1. Object literal
// // let user={name :"sandeep",


// //  mobile:"9876543212"}

// //#2 Object.create()
// // let user= Object.create({}
// //     )
// //     user.name="sandeep"
// //     user.mobile=9876543212

// //#3. function are object in java Script

// // function User(){
// //     return "user"
// // }

// // let user = new User()
// // user.name ="sandeep"
// //#4. Using class

// // console.log(user)
// // let a= null
// // console.log(a==null)
// // console.log(a===null)
// // console.log(a==="null")
// // console.log(typeof null)
// // console.log(typeof a)

// // built in data Structures
// // Arrays
// // Objects
// // Sets
// // Maps

// // Custom Data structures
// // stacks
// // Queues
// // Circular queues
// // Linked Lists
// // Hash Tables
// // Trees
// // Graphs

// //=====================
// //++++++ arrays+++++++
// //=====================


// //#Source https://bit.ly/2neWfJ2
// // const matches = (obj,


// //    source) =>
// //   Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
// // // console.log(matches({ age: 25,


// //  hair: 'long',


// //  beard: true },


// //  { hair: 'long',


// //  beard: true })); // true
// // // console.log(matches({ hair: 'long',


// //  beard: true },


// //  { age: 25,


// //  hair: 'long',


// //  beard: true })); // false
// // // console.log(matches({ hair: 'long',


// //  beard: true },


// //  { age: 26,


// //  hair: 'long',


// //  beard: true })); // false



// let obj={ age: 25,


//    hair: 'long',


//  beard: true }
// let source={ hair: 'long',


//  beard: true }

// // console.log(Object.keys(source).every(key=>))
// console.log(obj.hasOwnProperty("hair"))


// // let img= "https://www.w3schools.com/images/picture.jpg"

// // function convertUrlToBase64(url) {
// //   // Fetch the contents of the URL
// //   fetch(url)
// //     .then(response => response.blob())
// //     .then(blob => {
// //       // Read the fetched data as a FileReader
// //       const reader = new FileReader();
// //       reader.onloadend = function() {
// //         // Convert the data to Base64 encoding
// //         const base64Data = btoa(reader.result);
// //         console.log(base64Data);
// //       };
// //       reader.readAsBinaryString(blob);
// //     })
// //     .catch(error => console.error(error));
// // }

// // Example usage
// // const url = 'https://www.w3schools.com/images/picture.jpg';
// // // convertUrlToBase64(url);

// // function convertUrlToBase64(url) {
// //   fetch(url)
// //     .then(response => response.arrayBuffer())
// //     .then(buffer => {
// //       const base64Data = arrayBufferToBase64(buffer);
// //       console.log(base64Data);
// //       console.log("=========================")
// //     })
// //     .catch(error => console.error(error));
// // }

// // function arrayBufferToBase64(buffer) {
// //   let binary = '';
// //   const bytes = new Uint8Array(buffer);
// //   const len = bytes.length;
// //   for (let i = 0; i < len; i++) {
// //     binary += String.fromCharCode(bytes[i]);
// //   }
// //   return btoa(binary);
// // }
// // // koreDebugger.log(context.session.BotUserSession.channels[0].attachments[0].url.fileUrl)
// // // Example usage
// // // const url ='https://www.w3schools.com/images/picture.jpg';
// // convertUrlToBase64(url);





// // function convertUrlToBase64(url) {
// //   return new Promise((resolve,


// //  reject) => {
// //     const img = new Image();
// //     img.crossOrigin = 'Anonymous';

// //     img.onload = function() {
// //       const canvas = document.createElement('canvas');
// //       canvas.width = img.width;
// //       canvas.height = img.height;

// //       const ctx = canvas.getContext('2d');
// //       ctx.drawImage(img,


// //  0,


// //  0);

// // //       const dataURL = canvas.toDataURL('image/png');
// // //       const base64Data = dataURL.split(',


// // ')[1];
// //       resolve(base64Data);
// //     };

// //     img.onerror = function() {
// //       reject(new Error('Failed to load image'));
// //     };

// //     img.src = url;
// //   });
// // }

// // // Example usage
// // // const url = 'https://example.com/image.jpg';
// // convertUrlToBase64(url)
// //   .then(base64Data => {
// //     console.log(base64Data);
// //   })
// //   .catch(error => {
// //     console.error(error);
// //   });



// // function convertUrlToBase64(url) {
// //   const xhr = new XMLHttpRequest();
// //   xhr.open('GET',


// //    url,


// //    true);
// //   xhr.responseType = 'arraybuffer';

// //   xhr.onload = function() {
// //     if (xhr.status === 200) {
// //       const buffer = xhr.response;
// //       const base64Data = arrayBufferToBase64(buffer);
// //       console.log(base64Data);
// //     } else {
// //       console.error('Request failed. Status:',


// //        xhr.status);
// //     }
// //   };

// //   xhr.onerror = function() {
// //     console.error('Request failed');
// //   };

// //   xhr.send();
// // }

// // function arrayBufferToBase64(buffer) {
// //   let binary = '';
// //   const bytes = new Uint8Array(buffer);
// //   const len = bytes.length;
// //   for (let i = 0; i < len; i++) {
// //     binary += String.fromCharCode(bytes[i]);
// //   }
// //   return btoa(binary);
// // }

// // Example usage
// // const url = 'https://example.com/image.jpg';
// // convertUrlToBase64(url);



// // let response = context.debit_card_activation_status_service.response.body;

let res = {"response":{"statusCode":200,
"body":{"mobileNumber":"918861420193",
"topic":"ACCOUNT",
"subtopic":"KYC_STATUS",
"agentTransfer":"false",
"payload":{"response": ""}},
"headers":{"x-backside-transport":"OK OK",
"connection":"close",
"transfer-encoding":"chunked",
"vary":"Origin,Access-Control-Request-Method,Access-Control-Request-Headers",
"content-type":"text/plain;charset=UTF-8",
"date":"Tue,25 Jul 2023 08:02:36 GMT",
"x-global-transaction-id":"624d987464bf819c7ea0cd61",
"x-ratelimit-limit":"name=rate-limit-1,1000;",
"x-ratelimit-remaining":"name=rate-limit-1,996;",
"x-frame-options":"DENY",
"cache-control":"no-cache",
"x-content-type-options":"nosniff",
"content-security-policy":"frame-ancestors 'none'; default-src 'self' gateway.federalbank.co.in",
"access-control-allow-origin":"https://gateway.federalbank.co.in/",
"access-control-allow-headers":"Origin,X-Requested-With,Content-Type,Accept",
"strict-transport-security":"max-age=31536000;includeSubDomains; preload",
"x-xss-protection":"1; mode=block",
"gwytranid":"gwy20230725-2124467553-624d987464bf819c7ea0cd61",
"content-encoding":"gzip"}}}


// let response = context.account_kyc_status_service.response.body;

let response= res
// koreDebugger.log(context.account_kyc_status_service)

// let data = JSON.parse(response);
let data = response.response.body
if (res.response.statusCode != 200||res.response.statusCode!="200") {
  console.log("====")
    context.isForwarded = true
    context.account_kyc_status_service_response = content.no_data_message
} else {

let isForwarded = data.agentTransfer;
console.log(data, "====")

context.account_kyc_status_service_response= data.payload.response;

if(data.agentTransfer == true || data.agentTransfer == 'true'){
    context.account_kyc_status_service_response = content.no_data_message;
}
}