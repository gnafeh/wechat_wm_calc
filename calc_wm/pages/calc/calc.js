var vTotalPeopleMoney01 =-1
var vTotalPeopleMoney02 = -1
var vTotalPeopleMoney03 = -1
var vTotalPeopleMoney04 = -1
var vTotalPeopleMoney05 = -1
var vTotalPeopleMoney06 = -1
var vTotalPeopleMoney07 = -1
var vTotalPeopleMoney08 = -1
var vTotalPeopleMoney09 = -1
var btn_disabled
Page({
  data: {
    inputValuePack:'',
    inputValueDelivery: '',
    inputValueCutoff: '',
    inputValuePay01:'',
    array: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
    reply01: true,
    btn_disabled:true,
    objectArray: [
      {
        id: 0,
        name: '1'
      },
      {
        id: 1,
        name: '2'
      },
      {
        id: 2,
        name: '3'
      },
      {
        id: 3,
        name: '4'
      },
      {
        id: 4,
        name: '5'
      },
      {
        id: 5,
        name: '6'
      },
      {
        id: 6,
        name: '7'
      },
      {
        id: 7,
        name: '8'
      },
      {
        id: 8,
        name: '9'
      }
    ],
    index: 0,
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，index值为', e.detail.value)
    this.setData({
      index: e.detail.value,
    })
    //根据picker选择的值,选择输入点餐费用的人数,增加相应显示
    if (e.detail.value == 1) {
      this.setData({ reply01: true, reply02: true})
    } else if (e.detail.value == 2){
      this.setData({ reply01: true, reply02: true, reply03: true})
    } else if (e.detail.value == 3) {
      this.setData({ reply01: true, reply02: true, reply03: true, reply04: true })
    } else if (e.detail.value == 4) {
      this.setData({ reply01: true, reply02: true, reply03: true, reply04: true, reply05: true })
    } else if (e.detail.value == 5) {
      this.setData({ reply01: true, reply02: true, reply03: true, reply04: true, reply05: true, reply06: true })
    } else if (e.detail.value == 6) {
      this.setData({ reply01: true, reply02: true, reply03: true, reply04: true, reply05: true, reply06: true, reply07: true })
    } else if (e.detail.value == 7) {
      this.setData({ reply01: true, reply02: true, reply03: true, reply04: true, reply05: true, reply06: true, reply07: true, reply08: true })
    } else if (e.detail.value == 8) {
      this.setData({ reply01: true, reply02: true, reply03: true, reply04: true, reply05: true, reply06: true, reply07: true, reply08: true, reply09: true })
    } else {
      this.setData({ reply01: true })
    }
  },
  /*
  输入存储包装费
  */
  bindKeyInputPack:function(e){
    this.setData({
      inputValuePack: e.detail.value
    })
  },
  /*
  输入存储运送费
  */
  bindKeyInputDelivery: function (e) {
    this.setData({
      inputValueDelivery: e.detail.value
    })
  },
  /*
  输入存储优惠费
  */
  bindKeyInputCutoff: function (e) {
    this.setData({
      inputValueCutoff: e.detail.value
    })
  },
  /*
  进行计算
  */
  calcbtn: function(e){
    //获取picker的值
        var getIndex = this.data.index;
        //获取用户点餐费用
        var getMoneyPeople01 = this.data.inputValuePeople01;
        var getMoneyPeople02 = this.data.inputValuePeople02;
        var getMoneyPeople03 = this.data.inputValuePeople03;
        var getMoneyPeople04 = this.data.inputValuePeople04;
        var getMoneyPeople05 = this.data.inputValuePeople05;
        var getMoneyPeople06 = this.data.inputValuePeople06;
        var getMoneyPeople07 = this.data.inputValuePeople07;
        var getMoneyPeople08 = this.data.inputValuePeople08;
        var getMoneyPeople09 = this.data.inputValuePeople09;
        //获取包装费用
        var getMoneyPack = this.data.inputValuePack;
        //获取运送费用
        var getMoneyDelivery = this.data.inputValueDelivery;
        //获取优惠减免费用
        var getMoneyCutoff = this.data.inputValueCutoff;
        /*
        console.log('btn选择,how many people，index值为', getIndex),
        console.log('btn选择改变，getMoneyPeople01值为', getMoneyPeople01),
        console.log('btn选择改变，getMoneyPack值为', getMoneyPack),
        console.log('btn选择改变，getMoneyDelivery值为', getMoneyDelivery),
        console.log('btn选择改变，getMoneyCutoff值为', getMoneyCutoff),
        console.log('btn选择,how many people，人数为', getIndex + 1)
        */
        if (this.data.btn_disabled){
        }else{
    //传递参数,进行计算
    if (vTotalPeopleMoney01){
      vTotalPeopleMoney01 = this.dd(getIndex, getMoneyPeople01, getMoneyPack, getMoneyDelivery, getMoneyCutoff)
      this.setData({ calcreply01: true, inputValuePay01: vTotalPeopleMoney01})
      console.log('btn选择，m01值为', vTotalPeopleMoney01)
      console.log('btn选择，m01值为', this.data.calcreply01)
    }
    if (getMoneyPeople02) {
      vTotalPeopleMoney02 = this.dd(getIndex, getMoneyPeople02, getMoneyPack, getMoneyDelivery, getMoneyCutoff)
      this.setData({ calcreply02: true, inputValuePay02: vTotalPeopleMoney02 })
    }
    if (getMoneyPeople03) {
      vTotalPeopleMoney03 = this.dd(getIndex, getMoneyPeople03, getMoneyPack, getMoneyDelivery, getMoneyCutoff)
      this.setData({ calcreply03: true, inputValuePay03: vTotalPeopleMoney03 })
    }
    if (getMoneyPeople04) {
      vTotalPeopleMoney04 = this.dd(getIndex, getMoneyPeople04, getMoneyPack, getMoneyDelivery, getMoneyCutoff)
      this.setData({ calcreply04: true, inputValuePay04: vTotalPeopleMoney04 })
    }
    if (getMoneyPeople05) {
      vTotalPeopleMoney05 = this.dd(getIndex, getMoneyPeople05, getMoneyPack, getMoneyDelivery, getMoneyCutoff)
      this.setData({ calcreply05: true, inputValuePay05: vTotalPeopleMoney05 })
    }
    if (getMoneyPeople06) {
      vTotalPeopleMoney06 = this.dd(getIndex, getMoneyPeople06, getMoneyPack, getMoneyDelivery, getMoneyCutoff)
      this.setData({ calcreply06: true, inputValuePay06: vTotalPeopleMoney06 })
    }
    if (getMoneyPeople07) {
      vTotalPeopleMoney07 = this.dd(getIndex, getMoneyPeople07, getMoneyPack, getMoneyDelivery, getMoneyCutoff)
      this.setData({ calcreply07: true, inputValuePay07: vTotalPeopleMoney07 })
    }
    if (getMoneyPeople08) {
      vTotalPeopleMoney08 = this.dd(getIndex, getMoneyPeople08, getMoneyPack, getMoneyDelivery, getMoneyCutoff)
      this.setData({ calcreply08: true, inputValuePay08: vTotalPeopleMoney08 })
    }
    if (getMoneyPeople09) {
      vTotalPeopleMoney09 = this.dd(getIndex, getMoneyPeople09, getMoneyPack, getMoneyDelivery, getMoneyCutoff)
      this.setData({ calcreply09: true, inputValuePay09: vTotalPeopleMoney09 })
    }
  }
  },
  dd: function (n_people,n_price,m_package,m_delivery,m_cutoff) {
    //转成int类型
    n_people = parseInt(n_people)
    //index+1 为总人数
    n_people = n_people +1
    //获取点餐费用,并转为浮点类型
    n_price = parseFloat(n_price)
    //获取包装费用,并转为浮点类型
    m_package = parseFloat(m_package)
    //获取运送费用,并转为浮点类型
    m_delivery = parseFloat(m_delivery)
    //获取优惠费用,并转为浮点类型
    m_cutoff = parseFloat(m_cutoff)
    
    console.log('---=== culc ===---')
    console.log('n_people', n_people)
    console.log('n_price', n_price)
    console.log('m_package', m_package)
    console.log('m_delivery', m_delivery)
    console.log('m_cutoff', m_cutoff)
    console.log('---=== culc ===---')
    
    if (this.data.inputValuePack ==''){
      m_package = 0
    }
    if (this.data.inputValueDelivery == '') {
      m_delivery = 0
    }
    if (this.data.inputValueCutoff == '') {
      m_cutoff = 0
    }

    n_price = (n_price) + ((m_package) + (m_delivery) - (m_cutoff)) / n_people
    console.log('总计: 第 ' + n_people + ' 个人应该出:[ ' + n_price + ' ]')
    console.log('其中: 点餐:[ ' + n_price + ' ]')
    console.log('加上包装费 :[ ' + m_package + ' ]')
    console.log('加上运送费 :[ ' + m_delivery + ' ]')
    console.log('减去减免费 :[ ' + m_cutoff + ' ]')
    console.log('总共 :[ ' + n_price + ' ]')
    
    
/*
    console.log('n_price=', n_price)
    n_price = parseFloat(n_price)
    n_price = n_price.toFixed(2)
    n_price = parseFloat(n_price)
    console.log('dd=', n_price)
    n_price.toFixed(2)
    */
    console.log('dd2   =', n_price)
    return n_price;
   
  },
  bindKeyInputPeople01: function (e) {
    this.setData({
      inputValuePeople01: e.detail.value,
    })
    if (this.data.inputValuePeople01==''){
      this.setData({
        btn_disabled: true
      })
    }else{
      this.setData({
        btn_disabled: false
      })
    }
  },
  bindKeyInputPeople02: function (e) {
    this.setData({
      inputValuePeople02: e.detail.value
    })
    if (this.data.inputValuePeople01 == '') {
      this.setData({
        btn_disabled: true
      })
    } else {
      this.setData({
        btn_disabled: false
      })
    }
  },
  bindKeyInputPeople03: function (e) {
    this.setData({
      inputValuePeople03: e.detail.value
    })
    if (this.data.inputValuePeople01 == '') {
      this.setData({
        btn_disabled: true
      })
    } else {
      this.setData({
        btn_disabled: false
      })
    }
  },
  bindKeyInputPeople04: function (e) {
    this.setData({
      inputValuePeople04: e.detail.value
    })
    if (this.data.inputValuePeople01 == '') {
      this.setData({
        btn_disabled: true
      })
    } else {
      this.setData({
        btn_disabled: false
      })
    }
  },
  bindKeyInputPeople05: function (e) {
    this.setData({
      inputValuePeople05: e.detail.value
    })
    if (this.data.inputValuePeople01 == '') {
      this.setData({
        btn_disabled: true
      })
    } else {
      this.setData({
        btn_disabled: false
      })
    }
  },
  bindKeyInputPeople06: function (e) {
    this.setData({
      inputValuePeople06: e.detail.value
    })
    if (this.data.inputValuePeople01 == '') {
      this.setData({
        btn_disabled: true
      })
    } else {
      this.setData({
        btn_disabled: false
      })
    }
  },
  bindKeyInputPeople07: function (e) {
    this.setData({
      inputValuePeople07: e.detail.value
    })
    if (this.data.inputValuePeople01 == '') {
      this.setData({
        btn_disabled: true
      })
    } else {
      this.setData({
        btn_disabled: false
      })
    }
  },
  bindKeyInputPeople08: function (e) {
    this.setData({
      inputValuePeople08: e.detail.value
    })
    if (this.data.inputValuePeople01 == '') {
      this.setData({
        btn_disabled: true
      })
    } else {
      this.setData({
        btn_disabled: false
      })
    }
  },
  bindKeyInputPeople09: function (e) {
    this.setData({
      inputValuePeople09: e.detail.value
    })
    if (this.data.inputValuePeople01 == '') {
      this.setData({
        btn_disabled: true
      })
    } else {
      this.setData({
        btn_disabled: false
      })
    }
  },

})
