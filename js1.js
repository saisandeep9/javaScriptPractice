

// const transformedData = abc.tabledata.map((item,index) => {
//     // console.log(index)
//     // console.log(item['data-number'][index], "===")

//           return { 
//     username: item.username,
//     'data-number': item['data-number'][index], // Assuming you want the second element
//     'data-percentage': item['data-percentage'][index] // Assuming you want the second element
//   }
// });

//   console.log(transformedData);


let formattedDates = abc.dates.flatMap(date => [`${date}`, `${date}%`]);
console.log(formattedDates)
// return
const transformedData = [];

abc.tabledata.forEach(item => {
  const detiles = {};
  let dataIndex = 0;
  let percentageIndex = 0;
  detiles.username=item.username
  for (let i = 0; i < formattedDates.length; i++) {
    const formattedDate = formattedDates[i];
    const isPercentage = formattedDate.includes('%');
    
    if (isPercentage) {
      detiles[formattedDate] = item['data-percentage'][percentageIndex];
      percentageIndex++;
    } else {
      detiles[formattedDate] = item['data-number'][dataIndex];
      dataIndex++;
    }
  }

  transformedData.push(detiles);
});

 console.log(transformedData);

// let  formattedDates = []
// formattedDates =abc.dates.flatMap(date => [`${date},${date}%`]).join(',').split(",");
// console.log(formattedDates, "===")
// const transformedData = [];
// // console.log(abc.tabledata.length)
// abc.tabledata.forEach((item) => {
// //   const dataNumber = item['data-number'][index];
// //   const dataPercentage = item['data-percentage'][index];
// let detiles ={}
//    for(let i=0; i<formattedDates.length/2;i++){

//     const dataNumberKey = formattedDates[i].split(",")[0]; 
//     const dataPercentageKey = formattedDates[i].split(",")[1]; 
//     // console.log(detiles[dataNumberKey]=item['data-percentage'][i])
//     detiles[dataNumberKey] = item['data-number'][i];
//     detiles[dataPercentageKey] = item['data-percentage'][i]; 
// // console.log(item['data-number'][i],"===")
// //         // console.log("tesst")
// //         // console.log(formattedDates[i])
// //         detiles.formattedDates[i]=item['data-number'][i]
//     }
//     console.log(detiles)
// });
//   console.log(index, "index")
// console.log(dataNumber, "===")

// for(let i=0; i<7;i++){
//     console.log("tesst")
//     detiles={...detiles, }
// }
// console.log(item, "iteam")
//   transformedData.push({
//     username: item.username,
//     'data-number': dataNumber,
//     'data-percentage': dataPercentage
//   });


// console.log(transformedData);

// for(let i=0; i<7;i++){
//     console.log("tesst")
// }


// const originalArray = ["Hello sdsd", "WORLD% sfsdaf", "123", "AbCd", 'abc'];

// const lowerCaseArray = originalArray.map((element) =>{ 

//     return  element.includes("%") ? element.replace("%", "per").toLowerCase() : element.toLowerCase().toLowerCase()

// });

// console.log(lowerCaseArray);

// Your original data
const data = {
    "hasdata": true,
    "tabledata": [
        {
            "splitcount": 1,
            "split": "Single Part",
            "dnsuccess": 41575264,
            "mtsuccess": 47918195,
            "dnsuccesspercentage": 86.76
        },
        {
            "splitcount": 2,
            "split": "Two Part",
            "dnsuccess": 8365754,
            "mtsuccess": 9506190,
            "dnsuccesspercentage": 88.0
        },
        {
            "splitcount": 3,
            "split": "Three Part",
            "dnsuccess": 1263,
            "mtsuccess": 1545,
            "dnsuccesspercentage": 81.75
        }, {
            "splitcount": 4,
            "split": "Single Part",
            "dnsuccess": 41575264,
            "mtsuccess": 47918195,
            "dnsuccesspercentage": 86.76
        },
        {
            "splitcount": 5,
            "split": "Two Part",
            "dnsuccess": 8365754,
            "mtsuccess": 9506190,
            "dnsuccesspercentage": 88.0
        },
        {
            "splitcount": 6,
            "split": "Three Part",
            "dnsuccess": 1263,
            "mtsuccess": 1545,
            "dnsuccesspercentage": 81.75
        },
        {
            "splitcount": 7,
            "split": "Single Part",
            "dnsuccess": 41575264,
            "mtsuccess": 47918195,
            "dnsuccesspercentage": 86.76
        },
        {
            "splitcount": 8,
            "split": "Two Part",
            "dnsuccess": 8365754,
            "mtsuccess": 9506190,
            "dnsuccesspercentage": 88.0
        },
        {
            "splitcount": 9,
            "split": "Three Part",
            "dnsuccess": 1263,
            "mtsuccess": 1545,
            "dnsuccesspercentage": 81.75
        }, {
            "splitcount": 10,
            "split": "Single Part",
            "dnsuccess": 41575264,
            "mtsuccess": 47918195,
            "dnsuccesspercentage": 86.76
        },
        {
            "splitcount": 11,
            "split": "Two Part",
            "dnsuccess": 8365754,
            "mtsuccess": 9506190,
            "dnsuccesspercentage": 88.0
        },
        {
            "splitcount": 12,
            "split": "Three Part",
            "dnsuccess": 1263,
            "mtsuccess": 1545,
            "dnsuccesspercentage": 81.75
        }
    ]
};

// Define the colors array
const colors = ['#5E548E', '#B8BEDD', '#B5F0EE', '#EFC3E6', '#F0A6CA', '#BE95C4', '#9F86C0', '#76427A'];

// Assign colors based on splitcount
data.tabledata.forEach((item, index) => {
    console.log(index, "co1")
    console.log(index % colors.length, "co")
    item.color = colors[index % colors.length]; // Assign colors cyclically
});

// console.log(data);
