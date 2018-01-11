const ordersMock = [
    {
        "customerUUID": "35596239-136d-4a01-97aa-d5015951ac55",
        "status": "open",
        "id": "B-TB9-8B8-6AE-2",
        "version": 1,
        "creationDate": "2015-10-11T03:21:37Z",
        "orderValue": 2594,
        "clientInfo": "WebShop",
        "basketUUID": "135b79d5-d23d-4a69-a844-f0e9db6823fa",
        "timeSlot": {
            "firstSlotDate": "2016-11-29T16:00:00Z",
            "lastSlotDate": "2016-11-29T18:00:00Z",
            "wwIdent": "1465152"
        },
        "subOrders": [
            {
                "merchantInfo": {
                    "vendorNumber": "19",
                    "name": "ZOO ROYAL",
                    "id": "zoo-royal",
                    "type": "REWE"
                },
                "csId": "32093963",
                "status": "open",
                "timeSlot": {
                    "firstSlotDate": "2016-11-29T16:00:00Z",
                    "lastSlotDate": "2016-11-29T18:00:00Z",
                    "wwIdent": "1465152"
                }
            },
              {
                "deliveryType": "PICKUP",
                "coupons": [],
                "merchantInfo": {
                  "vendorNumber": "19",
                  "name": "LIEFER_SERVICE",
                  "id": "rewe-online-services",
                  "type": "REWE"
                },
            "csId": "22093967",
            "vatItems": [],
            "subOrderValue": 24594,
            "lineItems": [
              {
                "lineItemType": "REFUND",
                "price": 0,
                "totalPrice": 0,
                "sequenceNumber": 3,
                "quantity": 1
              },
              {
                "sequenceNumber": 1,
                "lineItemType": "TIMESLOT",
                "totalPrice": 0,
                "price": 0,
                "quantity": 1,
                "nan": "1105811"
              },
              {
                "sequenceNumber": 2,
                "lineItemType": "BOX_DEPOSIT_FEE",
                "totalPrice": 500,
                "price": 500,
                "quantity": 1
              },
              {
                "sequenceNumber": 0,
                "lineItemType": "PRODUCT",
                "totalPrice": 24594,
                "price": 4099,
                "quantity": 6,
                "listing": {
                  "pricing": {
                    "currency": "EUR",
                    "totalRefund": 0,
                    "currentRetailPrice": 4099
                  },
                  "limitations": {
                    "orderLimit": 99,
                    "regularOrderLimit": 99
                  },
                  "_embedded": {
                    "article": {
                      "id": "3185370522820",
                      "gtin": "3185370522820"
                    },
                    "product": {
                      "id": "4907663",
                      "nan": "4907663",
                      "productName": "Moet \u0026 Chandon",
                      "volumeCode": "STK",
                      "imageUrl": "https://img.rewe-static.de/4907663/20528740_digital-image.png"
                    },
                    "category": {},
                    "merchant": {
                      "name": "LIEFER_SERVICE"
                    }
                  }
                },
                "nan": "4907663"
              }
            ],
            "articleSubstitution": true,
            "status": "open",
            "timeSlot": {
              "firstSlotDate": "2016-11-29T16:00:00Z",
              "lastSlotDate": "2016-11-29T18:00:00Z",
              "wwIdent": "1465152"
            },
            "userComment": ""
          }
        ]
    },
    {
        "customerUUID": "35596239-136d-4a01-97aa-d5015951ac55",
        "status": "open",
        "id": "B-TB9-8B8-6AE-3",
        "version": 1,
        "creationDate": "2015-09-11T03:21:37Z",
        "orderValue": 2594,
        "clientInfo": "WebShop",
        "basketUUID": "135b79d5-d23d-4a69-a844-f0e9db6823fa",
        "timeSlot": {
            "firstSlotDate": "2016-11-29T16:00:00Z",
            "lastSlotDate": "2016-11-29T18:00:00Z",
            "wwIdent": "1465152"
        }
    },
    {
        "customerUUID": "35596239-136d-4a01-97aa-d5015951ac55",
        "status": "open",
        "id": "B-TB9-8B8-6AE-4",
        "version": 1,
        "creationDate": "2015-09-11T03:21:37Z",
        "orderValue": 2594,
        "clientInfo": "WebShop",
        "basketUUID": "135b79d5-d23d-4a69-a844-f0e9db6823fa",
        "timeSlot": {
            "firstSlotDate": "2016-11-29T16:00:00Z",
            "lastSlotDate": "2016-11-29T18:00:00Z",
            "wwIdent": "1465152"
        }
    },
    {
        "payments": [
          {
            "paymentMethod": "MARKET_PAYMENT",
            "paymentMethodTitle": "Zahlung im Markt",
            "paymentData": {
              "paymentMethod": "MARKET_PAYMENT"
            }
          }
        ],
        "orderValue": 24594,
        "clientInfo": "WebShop",
        "customerUUID": "35596239-136d-4a01-97aa-d5015951ac55",
        "basketUUID": "135b79d5-d23d-4a69-a844-f0e9db6823fa",
        "paybackInfo": {
          "usePayback": false
        },
        "customerInfo": {
          "customerUUID": "35596239-136d-4a01-97aa-d5015951ac55",
          "customerEmail": "e0bb4a3ccc434dcf928c963c5938ac48@rewe-digital.com",
          "salutation": "HERR",
          "lastName": "Utzer"
        },
        "status": "open",
        "id": "B-TB9-8B8-6AE",
        "version": 1,
        "subOrders": [
          {
            "deliveryType": "PICKUP",
            "coupons": [],
            "merchantInfo": {
              "vendorNumber": "19",
              "name": "LIEFER_SERVICE",
              "id": "rewe-online-services",
              "type": "REWE"
            },
            "csId": "22093967",
            "vatItems": [],
            "subOrderValue": 24594,
            "lineItems": [
              {
                "lineItemType": "REFUND",
                "price": 0,
                "totalPrice": 0,
                "sequenceNumber": 3,
                "quantity": 1
              },
              {
                "sequenceNumber": 1,
                "lineItemType": "TIMESLOT",
                "totalPrice": 0,
                "price": 0,
                "quantity": 1,
                "nan": "1105811"
              },
              {
                "sequenceNumber": 2,
                "lineItemType": "BOX_DEPOSIT_FEE",
                "totalPrice": 500,
                "price": 500,
                "quantity": 1
              },
              {
                "sequenceNumber": 0,
                "lineItemType": "PRODUCT",
                "totalPrice": 24594,
                "price": 4099,
                "quantity": 6,
                "listing": {
                  "pricing": {
                    "currency": "EUR",
                    "totalRefund": 0,
                    "currentRetailPrice": 4099
                  },
                  "limitations": {
                    "orderLimit": 99,
                    "regularOrderLimit": 99
                  },
                  "_embedded": {
                    "article": {
                      "id": "3185370522820",
                      "gtin": "3185370522820"
                    },
                    "product": {
                      "id": "4907663",
                      "nan": "4907663",
                      "productName": "Moet \u0026 Chandon",
                      "volumeCode": "STK",
                      "imageUrl": "https://img.rewe-static.de/4907663/20528740_digital-image.png"
                    },
                    "category": {},
                    "merchant": {
                      "name": "LIEFER_SERVICE"
                    }
                  }
                },
                "nan": "4907663"
              }
            ],
            "articleSubstitution": true,
            "status": "open",
            "timeSlot": {
              "firstSlotDate": "2016-11-29T16:00:00Z",
              "lastSlotDate": "2016-11-29T18:00:00Z",
              "wwIdent": "1465152"
            },
            "userComment": ""
          }
        ],
        "creationDate": "2016-11-29T01:23:37Z"
      },
    {
        "payments": [
              {
                "paymentMethod": "CREDIT_CARD",
                "paymentMethodTitle": "Kreditkarte",
                "paymentRequestId": "f1ceb149-8af6-4f14-9b33-9b74086d314c",
                "paymentData": {
                  "AutBetrag": "5288",
                  "Waer": "EUR",
                  "GF": "LS",
                  "paymentRequestId": "f1ceb149-8af6-4f14-9b33-9b74086d314c",
                  "transactionId": "7af3f25aa5d34c2395379a526c98771e",
                  "externalMerchantAccount": "reweonline_test",
                  "KKMarke": "MASTER_CARD",
                  "IntKZZP": "CT",
                  "creditCardResponse": {
                    "transactionId": "7af3f25aa5d34c2395379a526c98771e",
                    "externalMerchantAccount": "reweonline_test",
                    "reservedAmount": "5288",
                    "orderAmount": "5288",
                    "creditCardType": "MASTER_CARD",
                    "pseudoCardNumber": "0073010597931003",
                    "expireDate": "202210"
                  },
                  "IntTransID": "48463001160818800026",
                  "paymentReferenceNumber": "48463001160818800026",
                  "paymentMethod": "CREDIT_CARD",
                  "RefNr": "48463001160818800026",
                  "paymentProcessId": "f1ceb149-8af6-4f14-9b33-9b74086d314c",
                  "ExtHaeID": "reweonline_test",
                  "IntBestKZ": "G",
                  "KKNr": "0073010597931003",
                  "ExtTransID": "7af3f25aa5d34c2395379a526c98771e",
                  "KKVerfallDat": "202210",
                  "BestBetrag": "5288"
                }
              }
        ],
            "orderValue": 5288,
            "customerUUID": "31fc84cb-3afa-4835-b8a5-ad8322529ebe",
            "basketUUID": "",
            "paybackInfo": {
              "usePayback": false
            },
            "customerInfo": {
              "customerUUID": "31fc84cb-3afa-4835-b8a5-ad8322529ebe",
              "customerEmail": "test4635536@mailinator.com",
              "salutation": "HERR",
              "firstName": "Dieter",
              "lastName": "Test"
            },
            "status": "cancelled",
            "id": "B-6TU-TCX-H6H",
            "version": 3,
            "subOrders": [
              {
                "deliveryType": "DELIVERY",
                "coupons": [],
                "merchantInfo": {
                  "vendorNumber": "19",
                  "name": "LIEFER_SERVICE",
                  "id": "rewe-online-services",
                  "type": "REWE"
                },
                "csId": "206213013",
                "vatItems": [],
                "deliveryAddress": {
                  "zipCode": "51061",
                  "city": "Köln",
                  "houseNumber": "5",
                  "firstName": "Lise",
                  "salutation": "FRAU",
                  "street": "Paulinenhofstraße",
                  "addressAddition": "Eingang hinten",
                  "lastName": "Lotte",
                  "companyName": "XY AG",
                  "phoneNumber": "01575865588699999",
                  "country": "DE"
                },
                "subOrderValue": 5288,
                "lineItems": [
                  {
                    "sequenceNumber": 2,
                    "lineItemType": "TIMESLOT",
                    "totalPrice": 0,
                    "price": 0,
                    "quantity": 1,
                    "nan": "2307237"
                  },
                  {
                    "sequenceNumber": 1,
                    "lineItemType": "BEVERAGE_SURCHARGE",
                    "totalPrice": 0,
                    "price": 150,
                    "quantity": 0
                  },
                  {
                    "sequenceNumber": 9,
                    "lineItemType": "PRODUCT",
                    "totalPrice": 299,
                    "price": 299,
                    "quantity": 1,
                    "listing": {
                      "pricing": {
                        "currency": "EUR",
                        "totalRefund": 0,
                        "currentRetailPrice": 299,
                        "weightPerPiece": 0
                      },
                      "limitations": {
                        "orderLimit": 99,
                        "regularOrderLimit": 99
                      },
                      "_embedded": {
                        "article": {
                          "id": "4388844146075",
                          "gtin": "4388844146075"
                        },
                        "product": {
                          "id": "284208",
                          "nan": "284208",
                          "productName": "REWE Bio Orange",
                          "volumeCode": "STK",
                          "imageUrl": "http://d9gkwhfwam31p.cloudfront.net/0284208/8890440"
                        },
                        "category": {},
                        "merchant": {
                          "name": "LIEFER_SERVICE"
                        }
                      }
                    },
                    "nan": "284208"
                  },
                  {
                    "sequenceNumber": 8,
                    "lineItemType": "PRODUCT",
                    "totalPrice": 747,
                    "price": 249,
                    "quantity": 3,
                    "listing": {
                      "pricing": {
                        "currency": "EUR",
                        "totalRefund": 0,
                        "currentRetailPrice": 249,
                        "weightPerPiece": 0
                      },
                      "limitations": {
                        "orderLimit": 99,
                        "regularOrderLimit": 99
                      },
                      "_embedded": {
                        "article": {
                          "id": "4388858205058",
                          "gtin": "4388858205058"
                        },
                        "product": {
                          "id": "273968",
                          "nan": "273968",
                          "productName": "REWE Bio Kiwi",
                          "volumeCode": "STK",
                          "imageUrl": "http://d9gkwhfwam31p.cloudfront.net/0273968/4731960"
                        },
                        "category": {},
                        "merchant": {
                          "name": "LIEFER_SERVICE"
                        }
                      }
                    },
                    "nan": "273968"
                  },
                  {
                    "sequenceNumber": 7,
                    "lineItemType": "PRODUCT",
                    "totalPrice": 3180,
                    "price": 159,
                    "quantity": 20,
                    "listing": {
                      "pricing": {
                        "currency": "EUR",
                        "totalRefund": 0,
                        "currentRetailPrice": 159,
                        "weightPerPiece": 0
                      },
                      "limitations": {
                        "orderLimit": 99,
                        "regularOrderLimit": 99
                      },
                      "_embedded": {
                        "article": {
                          "id": "4388844021112",
                          "gtin": "4388844021112"
                        },
                        "product": {
                          "id": "941229",
                          "nan": "941229",
                          "productName": "REWE Tomaten-Mozzarella Sauce",
                          "volumeCode": "STK",
                          "imageUrl": "http://d9gkwhfwam31p.cloudfront.net/0941229/7149560"
                        },
                        "category": {},
                        "merchant": {
                          "name": "LIEFER_SERVICE"
                        }
                      }
                    },
                    "nan": "941229"
                  },
                  {
                    "sequenceNumber": 6,
                    "lineItemType": "PRODUCT",
                    "totalPrice": 199,
                    "price": 199,
                    "quantity": 1,
                    "listing": {
                      "pricing": {
                        "currency": "EUR",
                        "totalRefund": 0,
                        "currentRetailPrice": 199,
                        "weightPerPiece": 0
                      },
                      "limitations": {
                        "orderLimit": 99,
                        "regularOrderLimit": 99
                      },
                      "_embedded": {
                        "article": {
                          "id": "8711468021828",
                          "gtin": "8711468021828"
                        },
                        "product": {
                          "id": "1174786",
                          "nan": "1174786",
                          "productName": "King Cuisine Hummus natur",
                          "volumeCode": "STK",
                          "imageUrl": "http://d9gkwhfwam31p.cloudfront.net/1174786/14389680"
                        },
                        "category": {},
                        "merchant": {
                          "name": "LIEFER_SERVICE"
                        }
                      }
                    },
                    "nan": "1174786"
                  },
                  {
                    "sequenceNumber": 5,
                    "lineItemType": "PRODUCT",
                    "totalPrice": 495,
                    "price": 99,
                    "quantity": 5,
                    "listing": {
                      "pricing": {
                        "currency": "EUR",
                        "totalRefund": 0,
                        "currentRetailPrice": 99,
                        "weightPerPiece": 0
                      },
                      "limitations": {
                        "orderLimit": 99,
                        "regularOrderLimit": 99
                      },
                      "_embedded": {
                        "article": {
                          "id": "4388844079052",
                          "gtin": "4388844079052"
                        },
                        "product": {
                          "id": "1290608",
                          "nan": "1290608",
                          "productName": "REWE Bihun-Suppe",
                          "volumeCode": "STK",
                          "imageUrl": "http://d9gkwhfwam31p.cloudfront.net/1290608/17575170"
                        },
                        "category": {},
                        "merchant": {
                          "name": "LIEFER_SERVICE"
                        }
                      }
                    },
                    "nan": "1290608"
                  },
                  {
                    "sequenceNumber": 4,
                    "lineItemType": "PRODUCT",
                    "totalPrice": 199,
                    "price": 199,
                    "quantity": 1,
                    "listing": {
                      "pricing": {
                        "currency": "EUR",
                        "totalRefund": 0,
                        "currentRetailPrice": 199,
                        "weightPerPiece": 0
                      },
                      "limitations": {
                        "orderLimit": 99,
                        "regularOrderLimit": 99
                      },
                      "_embedded": {
                        "article": {
                          "id": "4388844010482",
                          "gtin": "4388844010482"
                        },
                        "product": {
                          "id": "326013",
                          "nan": "326013",
                          "productName": "REWE Olivenmix grün \u0026 schwarz",
                          "volumeCode": "STK",
                          "imageUrl": "http://d9gkwhfwam31p.cloudfront.net/0326013/19709620"
                        },
                        "category": {},
                        "merchant": {
                          "name": "LIEFER_SERVICE"
                        }
                      }
                    },
                    "nan": "326013"
                  },
                  {
                    "sequenceNumber": 3,
                    "lineItemType": "PRODUCT",
                    "totalPrice": 169,
                    "price": 169,
                    "quantity": 1,
                    "listing": {
                      "pricing": {
                        "currency": "EUR",
                        "totalRefund": 0,
                        "currentRetailPrice": 169,
                        "weightPerPiece": 0
                      },
                      "limitations": {
                        "orderLimit": 99,
                        "regularOrderLimit": 99
                      },
                      "_embedded": {
                        "article": {
                          "id": "8004225041734",
                          "gtin": "8004225041734"
                        },
                        "product": {
                          "id": "546392",
                          "nan": "546392",
                          "productName": "Italienische Mortadella",
                          "volumeCode": "STK",
                          "imageUrl": "http://d9gkwhfwam31p.cloudfront.net/0546392/5221920"
                        },
                        "category": {},
                        "merchant": {
                          "name": "LIEFER_SERVICE"
                        }
                      }
                    },
                    "nan": "546392"
                  }
                ],
                "articleSubstitution": true,
                "status": "cancelled",
                "timeSlot": {
                  "firstSlotDate": "2016-08-22T16:00:00Z",
                  "lastSlotDate": "2016-08-22T18:00:00Z",
                  "wwIdent": "231007"
                },
                "userComment": "Test"
              }
            ],
            "creationDate": "2016-10-31T20:37:51Z",
            "invoiceAddress": {
              "zipCode": "51061",
              "valueAddedTaxId": "36634675",
              "city": "Köln",
              "houseNumber": "35",
              "firstName": "Dieter",
              "salutation": "HERR",
              "customerType": "BUSINESS",
              "street": "Paulinenhofstraße",
              "lastName": "Test",
              "commercialRegisterNumber": "35636754",
              "companyAddition1": "Test",
              "companyName": "Test AG",
              "phoneNumber": "0157504845565",
              "companyAddition2": "Test",
              "country": "DE"
            }
          },
        {
                "payments": [
                  {
                    "paymentMethod": "MARKET_PAYMENT",
                    "paymentMethodTitle": "Zahlung im Markt",
                    "paymentData": {
                      "paymentMethod": "MARKET_PAYMENT"
                    }
                  }
                ],
                "orderValue": 9700,
                "clientInfo": "WebShop",
                "customerUUID": "f2ee3579-5fc3-46cc-99e0-930c7c651403",
                "basketUUID": "88e3b820-b735-42b7-937b-8d1883628ee7",
                "paybackInfo": {
                  "usePayback": false
                },
                "customerInfo": {
                  "customerUUID": "f2ee3579-5fc3-46cc-99e0-930c7c651403",
                  "customerEmail": "722de2343b744dc984029c157078377f@rewe-digital.com",
                  "salutation": "HERR",
                  "lastName": "Utzer"
                },
                "status": "open",
                "id": "B-QMH-UXF-ITP",
                "version": 1,
                "subOrders": [
                  {
                    "deliveryType": "PICKUP",
                    "coupons": [],
                    "merchantInfo": {
                      "vendorNumber": "19",
                      "name": "LIEFER_SERVICE",
                      "id": "rewe-online-services",
                      "type": "REWE"
                    },
                    "csId": "966999450",
                    "vatItems": [],
                    "subOrderValue": 9700,
                    "lineItems": [
                      {
                        "lineItemType": "REFUND",
                        "price": 0,
                        "totalPrice": 0,
                        "sequenceNumber": 4,
                        "title": "Enthaltene Pfandbeträge",
                        "quantity": 1
                      },
                      {
                        "sequenceNumber": 2,
                        "lineItemType": "TIMESLOT",
                        "totalPrice": 0,
                        "price": 0,
                        "quantity": 1,
                        "nan": "1105811"
                      },
                      {
                        "sequenceNumber": 3,
                        "lineItemType": "BOX_DEPOSIT_FEE",
                        "totalPrice": 500,
                        "price": 500,
                        "quantity": 1
                      },
                      {
                        "sequenceNumber": 0,
                        "lineItemType": "PRODUCT",
                        "totalPrice": 3975,
                        "price": 159,
                        "quantity": 25,
                        "listing": {
                          "pricing": {
                            "currency": "EUR",
                            "currentRetailPrice": 159
                          },
                          "limitations": {
                            "orderLimit": 99,
                            "regularOrderLimit": 99
                          },
                          "_embedded": {
                            "article": {
                              "id": "4001956211270",
                              "gtin": "4001956211270"
                            },
                            "product": {
                              "id": "4240936",
                              "nan": "4240936",
                              "productName": "Feinschmecker-Salami 80g OA",
                              "volumeCode": "STK",
                              "imageUrl": "http://d9gkwhfwam31p.cloudfront.net/4240936/6554940"
                            },
                            "category": {},
                            "merchant": {
                              "name": "LIEFER_SERVICE"
                            }
                          }
                        },
                        "nan": "4240936"
                      },
                      {
                        "sequenceNumber": 1,
                        "lineItemType": "PRODUCT",
                        "totalPrice": 5725,
                        "price": 229,
                        "quantity": 25,
                        "listing": {
                          "pricing": {
                            "currency": "EUR",
                            "currentRetailPrice": 229
                          },
                          "limitations": {
                            "orderLimit": 99,
                            "regularOrderLimit": 99
                          },
                          "_embedded": {
                            "article": {
                              "id": "4008088102216",
                              "gtin": "4008088102216"
                            },
                            "product": {
                              "id": "2550237",
                              "nan": "2550237",
                              "productName": "Kluth Cashewkerne 100g",
                              "volumeCode": "STK",
                              "imageUrl": "http://d9gkwhfwam31p.cloudfront.net/2550237/11102570"
                            },
                            "category": {},
                            "merchant": {
                              "name": "LIEFER_SERVICE"
                            }
                          }
                        },
                        "nan": "2550237"
                      }
                    ],
                    "articleSubstitution": true,
                    "status": "open",
                    "timeSlot": {
                      "firstSlotDate": "2016-12-16T10:00:00Z",
                      "lastSlotDate": "2016-12-16T13:00:00Z",
                      "wwIdent": "1465152"
                    },
                    "userComment": ""
                  }
                ],
                "creationDate": "2016-12-08T22:24:33Z"
              }
];

module.exports = {
    orders: ordersMock
};