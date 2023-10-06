let test= `Filter :,Location: All Locations,User: mis_unitst2(Everyone),Report For: Previous Day,From Date : 25-Jul-2023, To Date : 25-Jul-2023

Submitted to Carrier(19657144 - 99.36% )
Status, Count, Rate 

Delivered,14926451,75.93%
Pending,0,0%
Carrier Failed,4730693,24.07%

Permanant Failure
DLT Related Filters,11484,0.24%
Invalid Number,6485,0.14%
Number Not Active,3208845,67.83%

Temporary Failure
Handset Failure,955099,20.19%
Operator Failure,548701,11.6%
Others,79,0%

Platform Rejections(126234 - 0.64%)
Account Rejection,46388,36.75%
Invalid Request,3,0%
Invalid Requests,110,0.09%
No Route Found,45002,35.65%
Policy Filterred,3916,3.1%
Regulatory Rejection,30815,24.41%`


// let abc = 
// {
//     "hasdata": true,
//     "numberdata": [
//         {
//             "l05": 3662590,
//             "l610": 337093,
//             "l1115": 654342,
//             "l1630": 649924,
//             "l3145": 279542,
//             "l4660": 209700,
//             "l61120": 62298,
//             "lgt120": 25176,
//             "attempt": "Attempt 1",
//             "dnsuccess": 5880665
//         },
//         {
//             "l05": 51707,
//             "l610": 91973,
//             "l1115": 37446,
//             "l1630": 31988,
//             "l3145": 14674,
//             "l4660": 11501,
//             "l61120": 6090,
//             "lgt120": 108406,
//             "attempt": "Attempt 2",
//             "dnsuccess": 353785
//         },
//         {
//             "l05": 2397,
//             "l610": 35971,
//             "l1115": 27194,
//             "l1630": 14258,
//             "l3145": 7331,
//             "l4660": 6158,
//             "l61120": 1898,
//             "lgt120": 93910,
//             "attempt": "Attempt 3",
//             "dnsuccess": 189117
//         }
//     ],
//     "percentagedata": [
//         {
//             "l05": 62.28190179171913,
//             "l3145": 4.753578039218354,
//             "l4660": 3.5659232416741986,
//             "l61120": 1.059369986217545,
//             "l1630": 11.051879336775688,
//             "l610": 5.732225862211162,
//             "l1115": 11.127006894628414,
//             "dnsuccess": 5880665,
//             "lgt120": 0.4281148475555061,
//             "attempt": "Attempt 1"
//         },
//         {
//             "l05": 14.61537374394053,
//             "l3145": 4.147716833670167,
//             "l4660": 3.2508444394194216,
//             "l61120": 1.7213844566615317,
//             "l1630": 9.041649589439913,
//             "l610": 25.996862501236627,
//             "l1115": 10.584394476871546,
//             "dnsuccess": 353785,
//             "lgt120": 30.641773958760265,
//             "attempt": "Attempt 2"
//         },
//         {
//             "l05": 1.2674693443741176,
//             "l3145": 3.87643628018634,
//             "l4660": 3.2561853244287926,
//             "l61120": 1.003611520910336,
//             "l1630": 7.539248190273747,
//             "l610": 19.02050053670479,
//             "l1115": 14.37945821898613,
//             "dnsuccess": 189117,
//             "lgt120": 49.65709058413575,
//             "attempt": "Attempt 3"
//         }
//     ],
//     "overalltotal": {
//         "l05": 3716694,
//         "l3145": 301547,
//         "l4660": 227359,
//         "l61120": 70286,
//         "l1630": 696170,
//         "l610": 465037,
//         "l1115": 718982,
//         "dnsuccess": 6423567,
//         "lgt120": 227492
//     },
//     "overalltotalpercentage": {
//         "l05": 57.860282301095324,
//         "l3145": 4.6943855337696325,
//         "l4660": 3.539450900099586,
//         "l61120": 1.0941895678833893,
//         "l1630": 10.837747936621506,
//         "l610": 7.239544633067578,
//         "l1115": 11.192877726658725,
//         "dnsuccess": 6423567,
//         "lgt120": 3.5415214008042573
//     }
// }


 let abc= {
    // Your object data here
    
        "overall": {
            "numbers": {
                "total": 15457841,
                "mtsuccess": 15076315,
                "dnsuccess": 12921644,
                "dnfailed": 919055,
                "expired": 1235616,
                "mtrejected": 381526,
                "dnpending": 0
            },
            "percentage": {
                "total": 15457841,
                "mtsuccess": 97.53182866869959,
                "dnsuccess": 83.5928122174371,
                "dnfailed": 5.94555863267063,
                "expired": 7.993457818591872,
                "mtrejected": 2.468171331300406,
                "dnpending": 0
            }
        },
        "tabledata": {
            "numbers": [
                {
                    "esme": 80000300000532,
                    "username": "LG_CRCRDVIPL_TP",
                    "todaystotal": 6449746,
                    "todaystotalhuman": "6.4m",
                    "mtsuccess": 6130127,
                    "mtsuccesshuman": "6.1m",
                    "dnsuccess": 5341915,
                    "dnsuccesshuman": "5.3m",
                    "dnfailed": 247796,
                    "dnfailedhuman": "247.8k",
                    "expired": 540416,
                    "expiredhuman": "540.4k",
                    "mtrejected": 319619,
                    "mtrejectedhuman": "319.6k",
                    "dnpending": 0,
                    "dnpendinghuman": "0"
                },
                {
                    "esme": 80000300000347,
                    "username": "LG_GARUCPAN_TPN",
                    "todaystotal": 5244285,
                    "todaystotalhuman": "5.2m",
                    "mtsuccess": 5208619,
                    "mtsuccesshuman": "5.2m",
                    "dnsuccess": 4501790,
                    "dnsuccesshuman": "4.5m",
                    "dnfailed": 255843,
                    "dnfailedhuman": "255.8k",
                    "expired": 450986,
                    "expiredhuman": "451k",
                    "mtrejected": 35666,
                    "mtrejectedhuman": "35.7k",
                    "dnpending": 0,
                    "dnpendinghuman": "0"
                },
                {
                    "esme": 70684300000000,
                    "username": "DAKSHINHARYANA",
                    "todaystotal": 1222904,
                    "todaystotalhuman": "1.2m",
                    "mtsuccess": 1222621,
                    "mtsuccesshuman": "1.2m",
                    "dnsuccess": 1021509,
                    "dnsuccesshuman": "1m",
                    "dnfailed": 179325,
                    "dnfailedhuman": "179.3k",
                    "expired": 21787,
                    "expiredhuman": "21.8k",
                    "mtrejected": 283,
                    "mtrejectedhuman": "283",
                    "dnpending": 0,
                    "dnpendinghuman": "0"
                },
                {
                    "esme": 80000300000523,
                    "username": "LG_MPPERSOL_TP1",
                    "todaystotal": 799996,
                    "todaystotalhuman": "800k",
                    "mtsuccess": 797435,
                    "mtsuccesshuman": "797.4k",
                    "dnsuccess": 701713,
                    "dnsuccesshuman": "701.7k",
                    "dnfailed": 27086,
                    "dnfailedhuman": "27.1k",
                    "expired": 68636,
                    "expiredhuman": "68.6k",
                    "mtrejected": 2561,
                    "mtrejectedhuman": "2.6k",
                    "dnpending": 0,
                    "dnpendinghuman": "0"
                },
                {
                    "esme": 80000300000242,
                    "username": "LG_JUJUNGLE_TPN",
                    "todaystotal": 813704,
                    "todaystotalhuman": "813.7k",
                    "mtsuccess": 810306,
                    "mtsuccesshuman": "810.3k",
                    "dnsuccess": 668070,
                    "dnsuccesshuman": "668.1k",
                    "dnfailed": 64854,
                    "dnfailedhuman": "64.9k",
                    "expired": 77382,
                    "expiredhuman": "77.4k",
                    "mtrejected": 3398,
                    "mtrejectedhuman": "3.4k",
                    "dnpending": 0,
                    "dnpendinghuman": "0"
                },
                {
                    "esme": 80000300000336,
                    "username": "LG_MPPERSOL_TPN",
                    "todaystotal": 260409,
                    "todaystotalhuman": "260.4k",
                    "mtsuccess": 260315,
                    "mtsuccesshuman": "260.3k",
                    "dnsuccess": 231219,
                    "dnsuccesshuman": "231.2k",
                    "dnfailed": 6749,
                    "dnfailedhuman": "6.7k",
                    "expired": 22347,
                    "expiredhuman": "22.3k",
                    "mtrejected": 94,
                    "mtrejectedhuman": "94",
                    "dnpending": 0,
                    "dnpendinghuman": "0"
                },
                {
                    "esme": 80000300000456,
                    "username": "LG_NANAVIPL_TPN",
                    "todaystotal": 179998,
                    "todaystotalhuman": "180k",
                    "mtsuccess": 169816,
                    "mtsuccesshuman": "169.8k",
                    "dnsuccess": 146260,
                    "dnsuccesshuman": "146.3k",
                    "dnfailed": 6874,
                    "dnfailedhuman": "6.9k",
                    "expired": 16682,
                    "expiredhuman": "16.7k",
                    "mtrejected": 10182,
                    "mtrejectedhuman": "10.2k",
                    "dnpending": 0,
                    "dnpendinghuman": "0"
                },
                {
                    "esme": 80000300000272,
                    "username": "LG_GAMY11CI_TPN",
                    "todaystotal": 236798,
                    "todaystotalhuman": "236.8k",
                    "mtsuccess": 227630,
                    "mtsuccesshuman": "227.6k",
                    "dnsuccess": 90953,
                    "dnsuccesshuman": "91k",
                    "dnfailed": 121791,
                    "dnfailedhuman": "121.8k",
                    "expired": 14886,
                    "expiredhuman": "14.9k",
                    "mtrejected": 9168,
                    "mtrejectedhuman": "9.2k",
                    "dnpending": 0,
                    "dnpendinghuman": "0"
                },
                {
                    "esme": 80000300000545,
                    "username": "LG_EAFIBEPL_S",
                    "todaystotal": 100002,
                    "todaystotalhuman": "100k",
                    "mtsuccess": 99787,
                    "mtsuccesshuman": "99.8k",
                    "dnsuccess": 84729,
                    "dnsuccesshuman": "84.7k",
                    "dnfailed": 4313,
                    "dnfailedhuman": "4.3k",
                    "expired": 10745,
                    "expiredhuman": "10.7k",
                    "mtrejected": 215,
                    "mtrejectedhuman": "215",
                    "dnpending": 0,
                    "dnpendinghuman": "0"
                },
                {
                    "esme": 80000300000549,
                    "username": "LG_PEMPLRU_TP",
                    "todaystotal": 50001,
                    "todaystotalhuman": "50k",
                    "mtsuccess": 49942,
                    "mtsuccesshuman": "49.9k",
                    "dnsuccess": 45399,
                    "dnsuccesshuman": "45.4k",
                    "dnfailed": 1007,
                    "dnfailedhuman": "1k",
                    "expired": 3536,
                    "expiredhuman": "3.5k",
                    "mtrejected": 59,
                    "mtrejectedhuman": "59",
                    "dnpending": 0,
                    "dnpendinghuman": "0"
                },
                {
                    "esme": 80000300000548,
                    "username": "LG_LFINBUD_TPN",
                    "todaystotal": 50001,
                    "todaystotalhuman": "50k",
                    "mtsuccess": 49853,
                    "mtsuccesshuman": "49.9k",
                    "dnsuccess": 45018,
                    "dnsuccesshuman": "45k",
                    "dnfailed": 1084,
                    "dnfailedhuman": "1.1k",
                    "expired": 3751,
                    "expiredhuman": "3.8k",
                    "mtrejected": 148,
                    "mtrejectedhuman": "148",
                    "dnpending": 0,
                    "dnpendinghuman": "0"
                },
                {
                    "esme": 80000300000539,
                    "username": "LG_GEZYPEPL_TP",
                    "todaystotal": 49997,
                    "todaystotalhuman": "50k",
                    "mtsuccess": 49864,
                    "mtsuccesshuman": "49.9k",
                    "dnsuccess": 43069,
                    "dnsuccesshuman": "43.1k",
                    "dnfailed": 2333,
                    "dnfailedhuman": "2.3k",
                    "expired": 4462,
                    "expiredhuman": "4.5k",
                    "mtrejected": 133,
                    "mtrejectedhuman": "133",
                    "dnpending": 0,
                    "dnpendinghuman": "0"
                }
            ],
            "percentage": [
                {
                    "esme": 80000300000532,
                    "username": "LG_CRCRDVIPL_TP",
                    "todaystotal": 6449746,
                    "todaystotalhuman": "6.4m",
                    "mtsuccess": 95.04,
                    "dnsuccess": 87.14,
                    "dnfailed": 4.04,
                    "expired": 8.82,
                    "mtrejected": 4.96,
                    "dnpending": 0
                },
                {
                    "esme": 80000300000347,
                    "username": "LG_GARUCPAN_TPN",
                    "todaystotal": 5244285,
                    "todaystotalhuman": "5.2m",
                    "mtsuccess": 99.32,
                    "dnsuccess": 86.43,
                    "dnfailed": 4.91,
                    "expired": 8.66,
                    "mtrejected": 0.68,
                    "dnpending": 0
                },
                {
                    "esme": 70684300000000,
                    "username": "DAKSHINHARYANA",
                    "todaystotal": 1222904,
                    "todaystotalhuman": "1.2m",
                    "mtsuccess": 99.98,
                    "dnsuccess": 83.55,
                    "dnfailed": 14.67,
                    "expired": 1.78,
                    "mtrejected": 0.02,
                    "dnpending": 0
                },
                {
                    "esme": 80000300000523,
                    "username": "LG_MPPERSOL_TP1",
                    "todaystotal": 799996,
                    "todaystotalhuman": "800k",
                    "mtsuccess": 99.68,
                    "dnsuccess": 88,
                    "dnfailed": 3.4,
                    "expired": 8.61,
                    "mtrejected": 0.32,
                    "dnpending": 0
                },
                {
                    "esme": 80000300000242,
                    "username": "LG_JUJUNGLE_TPN",
                    "todaystotal": 813704,
                    "todaystotalhuman": "813.7k",
                    "mtsuccess": 99.58,
                    "dnsuccess": 82.45,
                    "dnfailed": 8,
                    "expired": 9.55,
                    "mtrejected": 0.42,
                    "dnpending": 0
                },
                {
                    "esme": 80000300000336,
                    "username": "LG_MPPERSOL_TPN",
                    "todaystotal": 260409,
                    "todaystotalhuman": "260.4k",
                    "mtsuccess": 99.96,
                    "dnsuccess": 88.82,
                    "dnfailed": 2.59,
                    "expired": 8.58,
                    "mtrejected": 0.04,
                    "dnpending": 0
                },
                {
                    "esme": 80000300000456,
                    "username": "LG_NANAVIPL_TPN",
                    "todaystotal": 179998,
                    "todaystotalhuman": "180k",
                    "mtsuccess": 94.34,
                    "dnsuccess": 86.13,
                    "dnfailed": 4.05,
                    "expired": 9.82,
                    "mtrejected": 5.66,
                    "dnpending": 0
                },
                {
                    "esme": 80000300000272,
                    "username": "LG_GAMY11CI_TPN",
                    "todaystotal": 236798,
                    "todaystotalhuman": "236.8k",
                    "mtsuccess": 96.13,
                    "dnsuccess": 39.96,
                    "dnfailed": 53.5,
                    "expired": 6.54,
                    "mtrejected": 3.87,
                    "dnpending": 0
                },
                {
                    "esme": 80000300000545,
                    "username": "LG_EAFIBEPL_S",
                    "todaystotal": 100002,
                    "todaystotalhuman": "100k",
                    "mtsuccess": 99.79,
                    "dnsuccess": 84.91,
                    "dnfailed": 4.32,
                    "expired": 10.77,
                    "mtrejected": 0.21,
                    "dnpending": 0
                },
                {
                    "esme": 80000300000549,
                    "username": "LG_PEMPLRU_TP",
                    "todaystotal": 50001,
                    "todaystotalhuman": "50k",
                    "mtsuccess": 99.88,
                    "dnsuccess": 90.9,
                    "dnfailed": 2.02,
                    "expired": 7.08,
                    "mtrejected": 0.12,
                    "dnpending": 0
                },
                {
                    "esme": 80000300000548,
                    "username": "LG_LFINBUD_TPN",
                    "todaystotal": 50001,
                    "todaystotalhuman": "50k",
                    "mtsuccess": 99.7,
                    "dnsuccess": 90.3,
                    "dnfailed": 2.17,
                    "expired": 7.52,
                    "mtrejected": 0.3,
                    "dnpending": 0
                },
                {
                    "esme": 80000300000539,
                    "username": "LG_GEZYPEPL_TP",
                    "todaystotal": 49997,
                    "todaystotalhuman": "50k",
                    "mtsuccess": 99.73,
                    "dnsuccess": 86.37,
                    "dnfailed": 4.68,
                    "expired": 8.95,
                    "mtrejected": 0.27,
                    "dnpending": 0
                }
            ]
        },
        "hasdata": true
    } 
    
  
  const combinedData = abc.tabledata.numbers.map((numberItem, index) => {
    const percentageItem = abc.tabledata.percentage[index];

    return{
        username: numberItem.username,
        // numberItem
        totalNum: numberItem.todaystotal,
        mtsuccessNum: numberItem.mtsuccess,
        // dnsuccessNum: numberItem.dnsuccess,
        dnfailedNum: numberItem.dnfailed,
        expiredNum: numberItem.expired,
        // mtrejectedNum: numberItem.mtrejected,
        dnpendingNum: numberItem.dnpending,
        // PercentageItem
    totalPer: percentageItem.todaystotal,
      mtsuccessPer: percentageItem.mtsuccess,
    //   dnsuccessPer: percentageItem.dnsuccess,
      dnfailedPer: percentageItem.dnfailed,
      expiredPer: percentageItem.expired,
    //   mtrejectedPer: percentageItem.mtrejected,
      dnpendingPer: percentageItem.dnpending,
    }
  
    // return {
    //   attempt: numberItem.attempt,
    //   l05: numberItem.l05,
    //   l610: numberItem.l610,
    //   l1115: numberItem.l1115,
    //   l1630: numberItem.l1630,
    //   l3145: numberItem.l3145,
    //   l4660: numberItem.l4660,
    //   l61120: numberItem.l61120,
    //   lgt120: numberItem.lgt120,
    //   dnsuccess: numberItem.dnsuccess,
    //   // Add percentage data
    //   l05_percentage: percentageItem.l05,
    //   l610_percentage: percentageItem.l610,
    //   l1115_percentage: percentageItem.l1115,
    //   l1630_percentage: percentageItem.l1630,
    //   l3145_percentage: percentageItem.l3145,
    //   l4660_percentage: percentageItem.l4660,
    //   l61120_percentage: percentageItem.l61120,
    //   lgt120_percentage: percentageItem.lgt120,
    //   dnsuccess_percentage: percentageItem.dnsuccess,
    // };
  });
  
//   console.log(combinedData);


// let xyz= {
//     "hasdata": true,
//     "tabledata": [
//         {
//             "data-number": [
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 14,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 11,
//                 0,
//                 148269
//             ],
//             "data-percentage": [
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 100.0000,
//                 0,
//                 57.9448
//             ],
//             "esme": 71451700000000,
//             "username": "CRMANTRI"
//         },
//         {
//             "data-number": [
//                 378348,
//                 1125817,
//                 467464,
//                 672505,
//                 663573,
//                 938001,
//                 1479224,
//                 1196809,
//                 376235,
//                 1230731,
//                 798338,
//                 705080,
//                 945044,
//                 1437697,
//                 984129,
//                 414228,
//                 1097098,
//                 603121,
//                 626116,
//                 821676,
//                 1207893,
//                 706989,
//                 668851,
//                 944474,
//                 769776,
//                 636383,
//                 765158,
//                 1119622,
//                 740054,
//                 893226
//             ],
//             "data-percentage": [
//                 88.9852,
//                 88.4600,
//                 88.6515,
//                 88.6239,
//                 88.6978,
//                 88.8496,
//                 88.9246,
//                 88.9981,
//                 91.1633,
//                 89.0692,
//                 89.4480,
//                 89.4194,
//                 89.4104,
//                 88.8431,
//                 88.7680,
//                 89.4802,
//                 88.8140,
//                 80.2502,
//                 90.7806,
//                 89.3375,
//                 89.4086,
//                 88.8471,
//                 92.6943,
//                 90.4881,
//                 90.6832,
//                 90.5807,
//                 90.3319,
//                 88.7710,
//                 88.1149,
//                 89.4052
//             ],
//             "esme": 70684300000000,
//             "username": "DAKSHINHARYANA"
//         },
//         {
//             "data-number": [
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 434986,
//                 303379,
//                 150000,
//                 316146,
//                 0
//             ],
//             "data-percentage": [
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 83.8978,
//                 91.9252,
//                 91.5794,
//                 91.2464,
//                 0
//             ],
//             "esme": 80000300000509,
//             "username": "LG_ADAXIXCC_TP"
//         },
//         {
//             "data-number": [
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 149999,
//                 150001,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0
//             ],
//             "data-percentage": [
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 87.9409,
//                 87.7918,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0
//             ],
//             "esme": 80000300000234,
//             "username": "LG_ADBNKBCC_TPN"
//         },
//         {
//             "data-number": [
//                 0,
//                 0,
//                 152402,
//                 200002,
//                 200001,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 200001,
//                 200002,
//                 0,
//                 0
//             ],
//             "data-percentage": [
//                 0,
//                 0,
//                 92.0816,
//                 91.7999,
//                 91.4365,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 88.2550,
//                 88.2685,
//                 0,
//                 0
//             ],
//             "esme": 80000300000528,
//             "username": "LG_ADIDFCCC_TP"
//         },
//         {
//             "data-number": [
//                 0,
//                 0,
//                 0,
//                 50004,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 50001,
//                 0,
//                 0,
//                 0,
//                 0
//             ],
//             "data-percentage": [
//                 0,
//                 0,
//                 0,
//                 92.7691,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 87.3739,
//                 0,
//                 0,
//                 0,
//                 0
//             ],
//             "esme": 80000300000466,
//             "username": "LG_ADRBLCC_TP"
//         },
//         {
//             "data-number": [
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 78968,
//                 100000,
//                 100000,
//                 100000,
//                 100000,
//                 100000,
//                 100000,
//                 100000,
//                 0,
//                 0,
//                 0,
//                 0,
//                 154599,
//                 150000,
//                 150000,
//                 150000,
//                 150001,
//                 0,
//                 0,
//                 0
//             ],
//             "data-percentage": [
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 87.6300,
//                 88.9727,
//                 88.0625,
//                 87.6659,
//                 87.7246,
//                 88.8718,
//                 88.5452,
//                 89.3550,
//                 0,
//                 0,
//                 0,
//                 0,
//                 89.5010,
//                 89.7126,
//                 90.1218,
//                 89.3863,
//                 90.1131,
//                 0,
//                 0,
//                 0
//             ],
//             "esme": 80000300000280,
//             "username": "LG_BATRUEBA_TPN"
//         },
//         {
//             "data-number": [
//                 5999712,
//                 4000000,
//                 4000001,
//                 5478555,
//                 1519453,
//                 2662528,
//                 0,
//                 1772643,
//                 450003,
//                 0,
//                 281105,
//                 11221243,
//                 20380996,
//                 9908994,
//                 8233709,
//                 191263,
//                 182957,
//                 11391905,
//                 10299999,
//                 8635191,
//                 7328297,
//                 8071238,
//                 0,
//                 305178,
//                 2100560,
//                 10916066,
//                 6692503,
//                 7407759,
//                 500000,
//                 18757
//             ],
//             "data-percentage": [
//                 86.1200,
//                 85.6810,
//                 84.7575,
//                 89.6543,
//                 92.1750,
//                 90.2620,
//                 0,
//                 91.3322,
//                 89.8123,
//                 0,
//                 92.1221,
//                 86.8531,
//                 88.2250,
//                 87.5520,
//                 86.8566,
//                 91.5702,
//                 92.1273,
//                 86.5394,
//                 90.7310,
//                 87.8949,
//                 89.0854,
//                 89.0686,
//                 0,
//                 93.1737,
//                 89.2685,
//                 91.3709,
//                 88.6837,
//                 90.3851,
//                 92.0721,
//                 93.4798
//             ],
//             "esme": 80000300000532,
//             "username": "LG_CRCRDVIPL_TP"
//         },
//         {
//             "data-number": [
//                 100000,
//                 0,
//                 0,
//                 0,
//                 1,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 100001,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0
//             ],
//             "data-percentage": [
//                 86.9319,
//                 0,
//                 0,
//                 0,
//                 100.0000,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 89.7183,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0
//             ],
//             "esme": 80000300000545,
//             "username": "LG_EAFIBEPL_S"
//         },
//         {
//             "data-number": [
//                 99995,
//                 50000,
//                 49985,
//                 100000,
//                 99969,
//                 100000,
//                 100000,
//                 100000,
//                 50000,
//                 50000,
//                 100000,
//                 100000,
//                 100000,
//                 100000,
//                 100000,
//                 50000,
//                 50000,
//                 0,
//                 100000,
//                 100000,
//                 100000,
//                 100000,
//                 50000,
//                 50000,
//                 100001,
//                 200003,
//                 200001,
//                 100000,
//                 0,
//                 0
//             ],
//             "data-percentage": [
//                 91.5920,
//                 89.0063,
//                 88.5510,
//                 91.5001,
//                 91.6172,
//                 89.6479,
//                 91.4070,
//                 89.9933,
//                 92.2691,
//                 92.4080,
//                 92.5460,
//                 92.9955,
//                 90.9377,
//                 92.6054,
//                 89.9766,
//                 92.7569,
//                 93.6517,
//                 0,
//                 92.0055,
//                 86.8708,
//                 86.5512,
//                 88.4936,
//                 89.4419,
//                 90.4935,
//                 90.0872,
//                 5.4868,
//                 77.1459,
//                 4.6740,
//                 0,
//                 0
//             ],
//             "esme": 80000300000489,
//             "username": "LG_EAFIBEPL_TP"
//         },
//         {
//             "data-number": [
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 100000,
//                 0,
//                 0
//             ],
//             "data-percentage": [
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0.0000,
//                 0,
//                 0
//             ],
//             "esme": 80000300000525,
//             "username": "LG_EAFIBEPL_TP2"
//         },
//         {
//             "data-number": [
//                 0,
//                 0,
//                 0,
//                 0,
//                 69854,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0
//             ],
//             "data-percentage": [
//                 0,
//                 0,
//                 0,
//                 0,
//                 91.2552,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0
//             ],
//             "esme": 80000300000540,
//             "username": "LG_FPONECCC_TP"
//         },
//         {
//             "data-number": [
//                 0,
//                 0,
//                 0,
//                 0,
//                 200003,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0
//             ],
//             "data-percentage": [
//                 0,
//                 0,
//                 0,
//                 0,
//                 26.8981,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0
//             ],
//             "esme": 80000300000272,
//             "username": "LG_GAMY11CI_TPN"
//         },
//         {
//             "data-number": [
//                 3824371,
//                 2000000,
//                 3413053,
//                 6122688,
//                 2600001,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 325006,
//                 4611295,
//                 4939643,
//                 5852177,
//                 5187791,
//                 1764403,
//                 4491405,
//                 9144029,
//                 7301019,
//                 450003,
//                 1738354,
//                 2224714,
//                 1331627,
//                 1320000,
//                 1133839,
//                 1628830,
//                 1216242,
//                 366883,
//                 1365982,
//                 1150629
//             ],
//             "data-percentage": [
//                 86.4442,
//                 84.4323,
//                 87.7784,
//                 84.5376,
//                 82.1522,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 86.3143,
//                 84.8820,
//                 81.4775,
//                 84.2228,
//                 84.4849,
//                 87.1524,
//                 85.5024,
//                 81.6096,
//                 85.2865,
//                 14.2511,
//                 89.6367,
//                 90.0948,
//                 90.3446,
//                 90.6559,
//                 91.6316,
//                 91.0178,
//                 92.6422,
//                 85.5218,
//                 90.7969,
//                 89.9545
//             ],
//             "esme": 80000300000347,
//             "username": "LG_GARUCPAN_TPN"
//         },
//         {
//             "data-number": [
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 5002,
//                 500001,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0
//             ],
//             "data-percentage": [
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 82.6357,
//                 83.9562,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0
//             ],
//             "esme": 80000300000541,
//             "username": "LG_GARUMMC_TP"
//         },
//         {
//             "data-number": [
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 1,
//                 4,
//                 3,
//                 0,
//                 0,
//                 2730000,
//                 1098707,
//                 858757,
//                 341746,
//                 0,
//                 0,
//                 0
//             ],
//             "data-percentage": [
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0.0000,
//                 0.0000,
//                 0.0000,
//                 0,
//                 0,
//                 84.8119,
//                 84.5923,
//                 82.9532,
//                 91.9046,
//                 0,
//                 0,
//                 0
//             ],
//             "esme": 80000300000493,
//             "username": "LG_GARUMMT_TP"
//         },
//         {
//             "data-number": [
//                 0,
//                 0,
//                 49999,
//                 50000,
//                 0,
//                 50000,
//                 50000,
//                 50001,
//                 0,
//                 50000,
//                 50000,
//                 50001,
//                 50001,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0
//             ],
//             "data-percentage": [
//                 0,
//                 0,
//                 88.6012,
//                 91.1516,
//                 0,
//                 85.4349,
//                 86.2543,
//                 87.1889,
//                 0,
//                 89.6375,
//                 90.7702,
//                 84.9805,
//                 85.2787,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0
//             ],
//             "esme": 80000300000539,
//             "username": "LG_GEZYPEPL_TP"
//         },
//         {
//             "data-number": [
//                 40000,
//                 0,
//                 40001,
//                 40002,
//                 4667243,
//                 2253406,
//                 50006,
//                 1263997,
//                 724045,
//                 1984303,
//                 3101989,
//                 4343781,
//                 2674786,
//                 4736125,
//                 3583198,
//                 3301967,
//                 2941552,
//                 5500605,
//                 4110397,
//                 3992609,
//                 3687410,
//                 2555345,
//                 0,
//                 4784034,
//                 3964902,
//                 3244867,
//                 3402253,
//                 1484257,
//                 3056803,
//                 500003
//             ],
//             "data-percentage": [
//                 43.1487,
//                 0,
//                 86.3363,
//                 37.0748,
//                 79.8953,
//                 81.2789,
//                 47.8087,
//                 52.4708,
//                 85.7657,
//                 82.4632,
//                 86.5497,
//                 87.4852,
//                 81.6627,
//                 80.4152,
//                 80.2930,
//                 80.5965,
//                 81.3902,
//                 77.2576,
//                 80.2018,
//                 78.9344,
//                 72.3754,
//                 78.8506,
//                 0,
//                 75.4322,
//                 73.5246,
//                 72.9839,
//                 76.6746,
//                 90.9740,
//                 84.5877,
//                 91.4357
//             ],
//             "esme": 80000300000464,
//             "username": "LG_HIGAMING_TP"
//         },
//         {
//             "data-number": [
//                 0,
//                 0,
//                 0,
//                 2015179,
//                 2024173,
//                 2002222,
//                 2651888,
//                 2867949,
//                 0,
//                 2854904,
//                 2663499,
//                 2903321,
//                 2823757,
//                 3227978,
//                 5973138,
//                 0,
//                 6541492,
//                 3107553,
//                 3182511,
//                 3301606,
//                 3327423,
//                 3363074,
//                 0,
//                 3399852,
//                 3775956,
//                 3807425,
//                 3033535,
//                 2112709,
//                 2300003,
//                 0
//             ],
//             "data-percentage": [
//                 0,
//                 0,
//                 0,
//                 86.6293,
//                 88.4457,
//                 89.1063,
//                 89.9758,
//                 88.4677,
//                 0,
//                 87.2859,
//                 87.0773,
//                 88.7234,
//                 89.3045,
//                 88.7665,
//                 84.8739,
//                 0,
//                 85.0669,
//                 88.1675,
//                 89.0037,
//                 88.4838,
//                 89.0151,
//                 89.4983,
//                 0,
//                 90.4048,
//                 90.3921,
//                 88.8269,
//                 88.1705,
//                 88.8521,
//                 89.6073,
//                 0
//             ],
//             "esme": 80000300000454,
//             "username": "LG_INCRDVIPL_TP"
//         },
//         {
//             "data-number": [
//                 2339688,
//                 0,
//                 873341,
//                 2998665,
//                 1556532,
//                 2176133,
//                 7637022,
//                 3359137,
//                 1609482,
//                 0,
//                 1520000,
//                 1085003,
//                 1365003,
//                 768666,
//                 1750001,
//                 0,
//                 0,
//                 353968,
//                 2136225,
//                 3100003,
//                 1819072,
//                 1432563,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0
//             ],
//             "data-percentage": [
//                 80.9686,
//                 0,
//                 85.8167,
//                 82.7122,
//                 83.4510,
//                 81.5034,
//                 57.1692,
//                 57.7687,
//                 83.0153,
//                 0,
//                 82.9305,
//                 85.7594,
//                 82.8937,
//                 85.9264,
//                 84.6582,
//                 0,
//                 0,
//                 77.8768,
//                 80.6713,
//                 83.6958,
//                 83.2393,
//                 84.9513,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0
//             ],
//             "esme": 80000300000242,
//             "username": "LG_JUJUNGLE_TPN"
//         },
//         {
//             "data-number": [
//                 498926,
//                 0,
//                 1370435,
//                 1310066,
//                 1272187,
//                 1645715,
//                 1046232,
//                 1324013,
//                 116787,
//                 1200000,
//                 716368,
//                 1197382,
//                 712769,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 100001,
//                 3,
//                 1,
//                 0,
//                 0,
//                 0
//             ],
//             "data-percentage": [
//                 91.2631,
//                 0,
//                 89.2705,
//                 91.7670,
//                 91.3687,
//                 90.4767,
//                 92.2332,
//                 92.0033,
//                 93.2743,
//                 91.0582,
//                 92.8708,
//                 92.9529,
//                 92.6581,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 91.7839,
//                 100.0000,
//                 100.0000,
//                 0,
//                 0,
//                 0
//             ],
//             "esme": 80000300000538,
//             "username": "LG_MOMYVPL_TP"
//         },
//         {
//             "data-number": [
//                 0,
//                 477586,
//                 503353,
//                 194788,
//                 0,
//                 793091,
//                 4024719,
//                 2627169,
//                 1158579,
//                 1100000,
//                 1243255,
//                 5302872,
//                 3453068,
//                 513054,
//                 1448802,
//                 712267,
//                 1179774,
//                 334181,
//                 2349756,
//                 2572775,
//                 2850468,
//                 1617196,
//                 341957,
//                 1818074,
//                 1153440,
//                 2033219,
//                 1038897,
//                 3606998,
//                 1931725,
//                 659810
//             ],
//             "data-percentage": [
//                 0,
//                 93.1589,
//                 92.8357,
//                 93.3901,
//                 0,
//                 46.9460,
//                 85.8124,
//                 88.1332,
//                 91.0391,
//                 91.0737,
//                 89.7652,
//                 85.2978,
//                 89.3019,
//                 92.4252,
//                 92.5300,
//                 90.5275,
//                 92.2672,
//                 91.1163,
//                 90.3185,
//                 90.9581,
//                 84.1267,
//                 92.5886,
//                 92.7931,
//                 91.6823,
//                 92.7628,
//                 89.4172,
//                 92.2591,
//                 86.0694,
//                 88.4125,
//                 88.7451
//             ],
//             "esme": 80000300000370,
//             "username": "LG_MOWALLET_TPN"
//         },
//         {
//             "data-number": [
//                 208348,
//                 0,
//                 265651,
//                 0,
//                 52425,
//                 203224,
//                 178775,
//                 265680,
//                 0,
//                 170114,
//                 0,
//                 0,
//                 168470,
//                 500000,
//                 500000,
//                 281154,
//                 300000,
//                 500000,
//                 500000,
//                 485184,
//                 492375,
//                 467159,
//                 145954,
//                 290922,
//                 500000,
//                 514311,
//                 500000,
//                 400000,
//                 200000,
//                 0
//             ],
//             "data-percentage": [
//                 89.1690,
//                 0,
//                 90.7944,
//                 0,
//                 91.6388,
//                 85.6218,
//                 91.5043,
//                 87.9978,
//                 0,
//                 89.8443,
//                 0,
//                 0,
//                 88.4211,
//                 89.3947,
//                 87.7199,
//                 90.7747,
//                 90.9569,
//                 90.1117,
//                 89.7674,
//                 90.2284,
//                 90.9689,
//                 90.6618,
//                 90.3419,
//                 91.1033,
//                 89.1809,
//                 88.1843,
//                 90.9485,
//                 87.9204,
//                 90.1161,
//                 0
//             ],
//             "esme": 80000300000523,
//             "username": "LG_MPPERSOL_TP1"
//         },
//         {
//             "data-number": [
//                 208348,
//                 0,
//                 265652,
//                 0,
//                 52427,
//                 203224,
//                 178775,
//                 265680,
//                 0,
//                 170116,
//                 0,
//                 0,
//                 168475,
//                 500001,
//                 500000,
//                 281155,
//                 300000,
//                 500000,
//                 500000,
//                 485184,
//                 492374,
//                 467158,
//                 145953,
//                 290925,
//                 500000,
//                 514310,
//                 500003,
//                 400000,
//                 200001,
//                 0
//             ],
//             "data-percentage": [
//                 87.7920,
//                 0,
//                 92.2969,
//                 0,
//                 89.5178,
//                 86.0175,
//                 92.1577,
//                 88.2933,
//                 0,
//                 90.4311,
//                 0,
//                 0,
//                 88.9230,
//                 89.7573,
//                 88.2300,
//                 91.9577,
//                 91.5178,
//                 90.5958,
//                 90.7374,
//                 90.5664,
//                 90.9514,
//                 90.8121,
//                 91.4362,
//                 91.3013,
//                 89.0713,
//                 88.4735,
//                 91.1810,
//                 89.4172,
//                 89.9540,
//                 0
//             ],
//             "esme": 80000300000336,
//             "username": "LG_MPPERSOL_TPN"
//         },
//         {
//             "data-number": [
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 62246,
//                 60001,
//                 0,
//                 0,
//                 0,
//                 200036,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0
//             ],
//             "data-percentage": [
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 91.3103,
//                 92.5205,
//                 0,
//                 0,
//                 0,
//                 81.7420,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0
//             ],
//             "esme": 80000300000542,
//             "username": "LG_MTCOINDX_TP"
//         },
//         {
//             "data-number": [
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 1541871,
//                 2017034,
//                 1949020,
//                 447608,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0
//             ],
//             "data-percentage": [
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 83.9444,
//                 88.8148,
//                 88.5429,
//                 83.8350,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0
//             ],
//             "esme": 80000300000508,
//             "username": "LG_MYAXIXCC_TP1"
//         },
//         {
//             "data-number": [
//                 0,
//                 0,
//                 220000,
//                 370393,
//                 0,
//                 220001,
//                 448279,
//                 0,
//                 0,
//                 380001,
//                 620007,
//                 2343614,
//                 0,
//                 0,
//                 0,
//                 400006,
//                 300001,
//                 100000,
//                 150003,
//                 300000,
//                 20000,
//                 240000,
//                 0,
//                 40001,
//                 220000,
//                 590003,
//                 300000,
//                 20000,
//                 240002,
//                 0
//             ],
//             "data-percentage": [
//                 0,
//                 0,
//                 89.5224,
//                 90.1305,
//                 0,
//                 86.6335,
//                 87.7165,
//                 0,
//                 0,
//                 87.0189,
//                 87.1944,
//                 82.8006,
//                 0,
//                 0,
//                 0,
//                 89.3425,
//                 88.3449,
//                 88.6347,
//                 90.0470,
//                 87.1546,
//                 90.9595,
//                 88.6212,
//                 0,
//                 87.9826,
//                 88.7426,
//                 88.2722,
//                 88.4413,
//                 89.4453,
//                 88.6235,
//                 0
//             ],
//             "esme": 80000300000456,
//             "username": "LG_NANAVIPL_TPN"
//         },
//         {
//             "data-number": [
//                 50002,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0
//             ],
//             "data-percentage": [
//                 88.4460,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0
//             ],
//             "esme": 80000300000549,
//             "username": "LG_PEMPLRU_TP"
//         },
//         {
//             "data-number": [
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 99526,
//                 50000,
//                 60000,
//                 0,
//                 0,
//                 0
//             ],
//             "data-percentage": [
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 94.3142,
//                 91.3498,
//                 93.0456,
//                 0,
//                 0,
//                 0
//             ],
//             "esme": 80000300000351,
//             "username": "LG_PUAXISCC_TPN"
//         },
//         {
//             "data-number": [
//                 0,
//                 0,
//                 22837,
//                 22837,
//                 23857,
//                 25252,
//                 323668,
//                 28997,
//                 0,
//                 58953,
//                 58953,
//                 361638,
//                 64110,
//                 600001,
//                 1000000,
//                 0,
//                 66278,
//                 918952,
//                 856150,
//                 855996,
//                 700000,
//                 648265,
//                 0,
//                 499999,
//                 600000,
//                 556364,
//                 500000,
//                 710799,
//                 500000,
//                 500000
//             ],
//             "data-percentage": [
//                 0,
//                 0,
//                 88.8298,
//                 89.0769,
//                 89.6426,
//                 88.1016,
//                 89.7908,
//                 90.4510,
//                 0,
//                 90.2253,
//                 88.9100,
//                 90.7857,
//                 90.5496,
//                 88.0268,
//                 83.0203,
//                 0,
//                 90.4978,
//                 86.7734,
//                 91.1000,
//                 87.3719,
//                 86.6253,
//                 86.5971,
//                 0,
//                 87.1934,
//                 87.6372,
//                 86.3574,
//                 86.9348,
//                 88.1778,
//                 91.9736,
//                 91.5063
//             ],
//             "esme": 80000300000510,
//             "username": "LG_TACRDVIPL_TP"
//         },
//         {
//             "data-number": [
//                 50003,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 2,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0
//             ],
//             "data-percentage": [
//                 84.5880,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 50.0000,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0
//             ],
//             "esme": 80000300000546,
//             "username": "LG_TAFAIRCPL_TP"
//         },
//         {
//             "data-number": [
//                 77156,
//                 0,
//                 0,
//                 78888,
//                 0,
//                 0,
//                 13093,
//                 11220,
//                 0,
//                 0,
//                 21288,
//                 47160,
//                 13332,
//                 14030,
//                 14,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0
//             ],
//             "data-percentage": [
//                 95.9400,
//                 0,
//                 0,
//                 95.2861,
//                 0,
//                 0,
//                 96.4485,
//                 96.4706,
//                 0,
//                 0,
//                 94.2940,
//                 94.7595,
//                 94.9441,
//                 95.1009,
//                 100.0000,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0
//             ],
//             "esme": 80000300000537,
//             "username": "LG_WIAXISCC_V"
//         },
//         {
//             "data-number": [
//                 121654,
//                 0,
//                 0,
//                 257453,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 3390319,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 28181537,
//                 22425177,
//                 18844469,
//                 5709080,
//                 5747768,
//                 134804,
//                 0,
//                 14999972,
//                 13000981,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0
//             ],
//             "data-percentage": [
//                 91.5904,
//                 0,
//                 0,
//                 92.7985,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 96.6221,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 98.1904,
//                 98.1473,
//                 93.0327,
//                 98.6226,
//                 71.0040,
//                 99.1079,
//                 0,
//                 98.2893,
//                 98.6680,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0
//             ],
//             "esme": 70603000000000,
//             "username": "MYNTRASL"
//         },
//         {
//             "data-number": [
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 1,
//                 589559,
//                 617665,
//                 622533,
//                 716850,
//                 261570,
//                 588857,
//                 620491,
//                 643386,
//                 676286,
//                 718742,
//                 833920,
//                 269988,
//                 733060,
//                 667981,
//                 655958,
//                 699221,
//                 737806,
//                 727808,
//                 397210
//             ],
//             "data-percentage": [
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 100.0000,
//                 98.3211,
//                 98.3766,
//                 98.1624,
//                 98.2989,
//                 97.9129,
//                 98.2055,
//                 97.2422,
//                 98.0113,
//                 98.1396,
//                 98.2463,
//                 98.2640,
//                 98.5132,
//                 95.2103,
//                 98.3769,
//                 98.0023,
//                 98.2382,
//                 98.0104,
//                 98.2274,
//                 97.4949
//             ],
//             "esme": 70427900000000,
//             "username": "S_HDFCBANK"
//         },
//         {
//             "data-number": [
//                 2,
//                 0,
//                 2,
//                 2,
//                 0,
//                 0,
//                 3,
//                 2,
//                 1,
//                 0,
//                 0,
//                 0,
//                 2,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 2,
//                 2,
//                 1,
//                 5,
//                 0,
//                 0,
//                 4,
//                 4,
//                 14,
//                 3,
//                 0,
//                 0
//             ],
//             "data-percentage": [
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0,
//                 0
//             ],
//             "esme": 80000200000000,
//             "username": "UNITST2"
//         }
//     ],
//     "dates": [
//         "31 Jul 23",
//         "30 Jul 23",
//         "29 Jul 23",
//         "28 Jul 23",
//         "27 Jul 23",
//         "26 Jul 23",
//         "25 Jul 23",
//         "24 Jul 23",
//         "23 Jul 23",
//         "22 Jul 23",
//         "21 Jul 23",
//         "20 Jul 23",
//         "19 Jul 23",
//         "18 Jul 23",
//         "17 Jul 23",
//         "16 Jul 23",
//         "15 Jul 23",
//         "14 Jul 23",
//         "13 Jul 23",
//         "12 Jul 23",
//         "11 Jul 23",
//         "10 Jul 23",
//         "09 Jul 23",
//         "08 Jul 23",
//         "07 Jul 23",
//         "06 Jul 23",
//         "05 Jul 23",
//         "04 Jul 23",
//         "03 Jul 23",
//         "02 Jul 23"
//     ]
// }

// const csvContent = ''
// // 'Date,' + xyz.tabledata.map((item) => new Date(item.esme).toLocaleDateString()).join(',') + '\n';

// const colHeaders = 'Username,ESME,' + xyz.dates.join(',') + '\n';

// const rows = xyz.tabledata.map((item) => {
//   const rowData = [item.username, item.esme];
//   rowData.push(...item['data-number']);
//   return rowData.join(',');
// }).join('\n');

// const percentageRows = xyz.tabledata.map((item) => {
//   const rowData = ['', ''];
//   rowData.push(...item['data-percentage']);
//   return rowData.join(',');
// }).join('\n');

// const csvData = csvContent + colHeaders + rows + '\n' + percentageRows;
// // console.log(csvData);

const dates = {
    "dates": [
      "31 Jul 23",
      "30 Jul 23",
      "29 Jul 23",
      "28 Jul 23",
      "27 Jul 23",
      "26 Jul 23",
      "25 Jul 23"
    ]
  };
  
  let  formattedDates = []
  formattedDates =dates.dates.flatMap(date => [`${date},${date}%`]).join(',').split(",");

// formattedDates= dates.dates.flatMap(date => [`${date}, ${date}%`]).join(',');
  console.log(formattedDates.length/2);
for(let i=0; i<7;i++){
    console.log("tesst")
}

//   In this code snippet, the flatMap function is used to convert the given dates into the required format. The formattedDates variable will hold the desired string with the dates in the format "31 Jul 23, 31 Jul 23%, 30 Jul 23, 30 Jul 23%" as requested. The join function is used to concatenate the formatted dates with a comma and space separator.
//   for(i=0; i< dates.dates.length;i++){
//     formattedDates.push(`${dates.dates[i]}, ${dates.dates[i]}%`)

//   }
//  formattedDates = dates.dates.map(date => `${date}, ${date}%`).join(', ');
// formattedDates = dates.dates.flatMap(date => [`${date}", "${date}%`]);
// console.log(formattedDates);
// console.log(formattedDates);
//   console.log(formattedDates);
  

//   let data= {
//     "dates": [
//         "01 Aug 23"
//     ],
//     "tabledata": {
//         "numbers": [
//             {
//                 "esme": 70684300000000,
//                 "username": "DAKSHINHARYANA",
//                 "data": [
//                     1222904
//                 ]
//             },
//             {
//                 "esme": 80000300000532,
//                 "username": "LG_CRCRDVIPL_TP",
//                 "data": [
//                     6449746
//                 ]
//             },
//             {
//                 "esme": 80000300000545,
//                 "username": "LG_EAFIBEPL_S",
//                 "data": [
//                     100002
//                 ]
//             },
//             {
//                 "esme": 80000300000272,
//                 "username": "LG_GAMY11CI_TPN",
//                 "data": [
//                     236798
//                 ]
//             },
//             {
//                 "esme": 80000300000347,
//                 "username": "LG_GARUCPAN_TPN",
//                 "data": [
//                     5244285
//                 ]
//             },
//             {
//                 "esme": 80000300000539,
//                 "username": "LG_GEZYPEPL_TP",
//                 "data": [
//                     49997
//                 ]
//             },
//             {
//                 "esme": 80000300000242,
//                 "username": "LG_JUJUNGLE_TPN",
//                 "data": [
//                     813704
//                 ]
//             },
//             {
//                 "esme": 80000300000548,
//                 "username": "LG_LFINBUD_TPN",
//                 "data": [
//                     50001
//                 ]
//             },
//             {
//                 "esme": 80000300000523,
//                 "username": "LG_MPPERSOL_TP1",
//                 "data": [
//                     799996
//                 ]
//             },
//             {
//                 "esme": 80000300000336,
//                 "username": "LG_MPPERSOL_TPN",
//                 "data": [
//                     260409
//                 ]
//             },
//             {
//                 "esme": 80000300000456,
//                 "username": "LG_NANAVIPL_TPN",
//                 "data": [
//                     179998
//                 ]
//             },
//             {
//                 "esme": 80000300000549,
//                 "username": "LG_PEMPLRU_TP",
//                 "data": [
//                     50001
//                 ]
//             }
//         ],
//         "percentage": [
//             {
//                 "esme": 70684300000000,
//                 "username": "DAKSHINHARYANA",
//                 "data": [
//                     83.5507
//                 ]
//             },
//             {
//                 "esme": 80000300000532,
//                 "username": "LG_CRCRDVIPL_TP",
//                 "data": [
//                     87.142
//                 ]
//             },
//             {
//                 "esme": 80000300000545,
//                 "username": "LG_EAFIBEPL_S",
//                 "data": [
//                     84.9099
//                 ]
//             },
//             {
//                 "esme": 80000300000272,
//                 "username": "LG_GAMY11CI_TPN",
//                 "data": [
//                     39.9565
//                 ]
//             },
//             {
//                 "esme": 80000300000347,
//                 "username": "LG_GARUCPAN_TPN",
//                 "data": [
//                     86.4296
//                 ]
//             },
//             {
//                 "esme": 80000300000539,
//                 "username": "LG_GEZYPEPL_TP",
//                 "data": [
//                     86.3729
//                 ]
//             },
//             {
//                 "esme": 80000300000242,
//                 "username": "LG_JUJUNGLE_TPN",
//                 "data": [
//                     82.4466
//                 ]
//             },
//             {
//                 "esme": 80000300000548,
//                 "username": "LG_LFINBUD_TPN",
//                 "data": [
//                     90.3015
//                 ]
//             },
//             {
//                 "esme": 80000300000523,
//                 "username": "LG_MPPERSOL_TP1",
//                 "data": [
//                     87.9963
//                 ]
//             },
//             {
//                 "esme": 80000300000336,
//                 "username": "LG_MPPERSOL_TPN",
//                 "data": [
//                     88.8228
//                 ]
//             },
//             {
//                 "esme": 80000300000456,
//                 "username": "LG_NANAVIPL_TPN",
//                 "data": [
//                     86.1285
//                 ]
//             },
//             {
//                 "esme": 80000300000549,
//                 "username": "LG_PEMPLRU_TP",
//                 "data": [
//                     90.9034
//                 ]
//             }
//         ]
//     },
//     "hasdata": true
// }
  
// const combinedData1 = data.tabledata.numbers.map((numberItem, index) => {
//     const percentageItem = data.tabledata.percentage[index];
//   console.log(numberItem)
//     return {
//       username: numberItem.username,
//       "data-number": numberItem.data[0],
//       "data-percentage": percentageItem.data[0],
//     };
//   });
//   const transformedData = abc.tabledata.map((item) => (
//     {

//     username: item.username,
//     'data-number': item['data-number'][1], // Assuming you want the second element
//     'data-percentage': item['data-percentage'][1] // Assuming you want the second element
//   }));
  
//   console.log(combinedData1);
  
  
// Import ECharts library if not already done

// Create dummy data
const dummyData = {
    "iscardenabled": true,
    "tabledata": [
        {
            "vmn": 123456789,
            "count": "456",
            "color": "#FF5733"
        },
        {
            "vmn": 987654321,
            "count": "321",
            "color": "#33FF57"
        },
        {
            "vmn": 555555,
            "count": "100",
            "color": "#3377FF"
        }
    ],
    "chartdata": {
        "type": "bubble",
        "background-color": "#ffffff #ffffff",
        "plot": {
            "scaling": "radius",
            "size-factor": 1.5,
            "selection-mode": "none",
            "hover-marker": {
                "visible": false
            },
            "hover-state": {
                "visible": false
            }
        },
        "scale-x": {
            "visible": false,
            "values": "0:50",
            "line-width": "1px",
            "line-color": "#141414",
            "alpha": "0.25",
            "item": {
                "font-weight": "normal",
                "font-family": "Tahoma",
                "rules": []
            },
            "tick": {
                "visible": false
            },
            "guide": {
                "visible": false
            }
        },
        "scale-y": {
            "visible": false,
            "values": "0:10:2",
            "guide": {
                "visible": false
            }
        },
        "series": [
            {
                "values": [
                    [
                        24,
                        2,
                        "100"
                    ]
                ],
                "marker": {
                    "background-image": "PATTERN_LARGE_CHECKER_BOARD",
                    "background-color": "#F0A6CA",
                    "alpha": "0.75"
                },
                "selected-marker": {
                    "background-color": "#EEEEEE",
                    "alpha": 0.25
                },
                "value-box": {
                    "text": "100",
                    "placement": "top",
                    "font-color": "#141414",
                    "font-weight": "normal",
                    "font-family": "Tahoma"
                },
                "tooltip": {
                    "text": "<strong>555555</strong><br>100",
                    "background-color": "#000000",
                    "shadow": false,
                    "thousands-separator": ","
                }
            },
            {
                "values": [
                    [
                        36,
                        2,
                        "321"
                    ]
                ],
                "marker": {
                    "background-image": "PATTERN_LARGE_CHECKER_BOARD",
                    "background-color": "#33FF57",
                    "alpha": "0.75"
                },
                "selected-marker": {
                    "background-color": "#EEEEEE",
                    "alpha": 0.25
                },
                "value-box": {
                    "text": "321",
                    "placement": "top",
                    "font-color": "#141414",
                    "font-weight": "normal",
                    "font-family": "Tahoma"
                },
                "tooltip": {
                    "text": "<strong>987654321</strong><br>321",
                    "background-color": "#000000",
                    "shadow": false,
                    "thousands-separator": ","
                }
            },
            {
                "values": [
                    [
                        48,
                        2,
                        "456"
                    ]
                ],
                "marker": {
                    "background-image": "PATTERN_LARGE_CHECKER_BOARD",
                    "background-color": "#FF5733",
                    "alpha": "0.75"
                },
                "selected-marker": {
                    "background-color": "#EEEEEE",
                    "alpha": 0.25
                },
                "value-box": {
                    "text": "456",
                    "placement": "top",
                    "font-color": "#141414",
                    "font-weight": "normal",
                    "font-family": "Tahoma"
                },
                "tooltip": {
                    "text": "<strong>123456789</strong><br>456",
                    "background-color": "#000000",
                    "shadow": false,
                    "thousands-separator": ","
                }
            }
        ]
    },
    "hasdata": true
};

// Create an ECharts instance
// const myChart = echarts.init(document.getElementById('your-chart-container')); // Replace 'your-chart-container' with your actual container element ID

// ECharts option based on the dummy data
const option = {
    type: 'scatter', // Set chart type to 'scatter' for a bubble chart
    // ... (configure other chart options based on the dummy data)
    series: dummyData.chartdata.series
};


console.log(JSON.stringify(option))
// Set the chart option and render the chart
// myChart.setOption(option);



// function convertToPercentage(value, total) {
//     if (total === 0) {
//         return 0; // Handle division by zero
//     }
//     return (value / total) * 100;
// }

// const values = [703, 1241, 22815];
// const total = values.reduce((acc, val) => acc + val, 0);
// console.log(total)

// const percentages = values.map(value => convertToPercentage(value,22815));
// console.log(percentages);



// const data = [
//     { vmn: 919945272877, count: 908 },
//     { vmn: 919223022345, count: 96 },
//     { vmn: 56161, count: 1 }
// ];

// // Find the largest count value
// const largestCount = Math.max(...data.map(item => item.count));

// // Calculate percentages and store them in a new array
// const percentages = data.map(item => ({
//     vmn: item.vmn,
//     percentage: (item.count / largestCount) * 100
// }));

// console.log(percentages);

function convertData(inputData) {
    const data = [
                {
                    name: 'Total',
                    children: []
                }
            ]


    const keywordMap = {}; // Map to store keywords for quick lookup

    // Iterate through keywords and create a map for quick lookup
    inputData.keywords.forEach(keyword => {
        keywordMap[keyword.keyword] = keyword.count;
    });

    // Iterate through numbers and add them to the sunburstData
    inputData.numbers.forEach(number => {
        const parentKeyword = number.keyword;
        const parentCount = keywordMap[parentKeyword];

        // Find the parent node or create it if it doesn't exist
        let parentNode = data[0].children.find(child => child.name === parentKeyword);
        if (!parentNode) {
            parentNode = {
                name: parentKeyword,
                children: []
            };
           data[0].children.push(parentNode);
        }

        // Add the child node
        parentNode.children.push({
            name: number.vmn.toString(),
            value: number.count
        });
    });

    return data;
}

// Your input data
const inputData = {
    "keywords": [
        {
            "count": 707,
            "keyword": "HT"
        },
        {
            "count": 41,
            "keyword": "REGISTER"
        },
        {
            "count": 26,
            "keyword": "BILL"
        },
        {
            "count": 3,
            "keyword": "DREGISTER"
        },
        {
            "count": 2,
            "keyword": "RAGISTER"
        }
    ],
    "numbers": [
        {
            "vmn": 919223022345,
            "count": 26,
            "keyword": "BILL"
        },
        {
            "vmn": 919223022345,
            "count": 3,
            "keyword": "DREGISTER"
        },
        {
            "vmn": 919223022345,
            "count": 2,
            "keyword": "RAGISTER"
        },
        {
            "vmn": 919223022345,
            "count": 41,
            "keyword": "REGISTER"
        },
        {
            "vmn": 919945272877,
            "count": 707,
            "keyword": "HT"
        }
    ]
};

// Call the function to convert the data
const sunburstChartData = convertData(inputData);
console.log(sunburstChartData, "s");
 console.log(sunburstChartData[0].children,"s");

 console.log(sunburstChartData[0].children[0].children,"s");


 function convertToPercentage(value, total) {
    if (total === 0) {
        return 0; // Handle division by zero
    }
    return (value / total) * 100;
}

const values = [703, 1241, 22815];
const total = values.reduce((acc, val) => acc + val, 0);

const percentages = values.map(value => convertToPercentage(value, total));
console.log(percentages);
