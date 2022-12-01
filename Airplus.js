name: Airplus
desc: 解锁Air 系列会员

http:
  mitm:
    - 'buy.itunes.apple.com'
    - 'pushserv.airapps.co'

  script:
    - match: https\:\/\/(buy|pushserv)\.(itunes|airapps)\.(apple.com/verifyReceipt|co:6001/firstrunV2)
      name: Airplus
      type: response
      require-body: true
      timeout: 10
      
script-providers:
  Airplus:
    url: https://raw.githubusercontent.com/Alex0510/Eric/master/surge/Script/calculatorari.js 
    interval: 86400
