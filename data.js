const PRODUCTS = [
  {
    "id": 1,
    "name": "Cơm tấm sườn nướng",
    "price": 45000,
    "desc": "Sườn nướng, cơm trắng, đồ chua, dưa leo, nước mắm.",
    "images": [
      "images/img_01.jpg",
      "images/img_02.jpg",
      "images/img_03.jpg"
    ],
    "category": "Cơm"
  },
  {
    "id": 2,
    "name": "Cơm gà chiên nước mắm",
    "price": 42000,
    "desc": "Gà chiên giòn, cơm trắng, nước mắm tỏi và rau ăn kèm.",
    "images": [
      "images/img_04.jpg",
      "images/img_05.jpg",
      "images/img_06.jpg"
    ],
    "category": "Cơm"
  },
  {
    "id": 3,
    "name": "Cơm bò lúc lắc",
    "price": 48000,
    "desc": "Bò cắt khối xào, ớt chuông, hành tây và rau củ.",
    "images": [
      "images/img_07.jpg",
      "images/img_08.jpg",
      "images/img_09.jpg"
    ],
    "category": "Cơm"
  },
  {
    "id": 4,
    "name": "Cơm thịt kho trứng",
    "price": 45000,
    "desc": "Thịt ba chỉ kho, trứng kho, cơm trắng và nước kho đậm đà.",
    "images": [
      "images/img_10.jpg",
      "images/img_11.jpg",
      "images/img_12.jpg"
    ],
    "category": "Cơm"
  },
  {
    "id": 5,
    "name": "Cơm tấm sườn bì chả",
    "price": 50000,
    "desc": "Sườn nướng, bì, chả trứng, đồ chua và mỡ hành.",
    "images": [
      "images/img_13.jpg",
      "images/img_14.jpg",
      "images/img_15.jpg"
    ],
    "category": "Cơm"
  },
  {
    "id": 6,
    "name": "Cơm gà nướng",
    "price": 45000,
    "desc": "Gà nướng vàng, dưa leo, đồ chua và nước chấm.",
    "images": [
      "images/img_16.jpg",
      "images/img_17.jpg",
      "images/img_18.jpg"
    ],
    "category": "Cơm"
  },
  {
    "id": 7,
    "name": "Cơm cá kho tiêu",
    "price": 42000,
    "desc": "Cá kho tiêu đậm vị, cơm trắng, hành và rau ăn kèm.",
    "images": [
      "images/img_19.jpg",
      "images/img_20.jpg",
      "images/img_21.jpg"
    ],
    "category": "Cơm"
  },
  {
    "id": 8,
    "name": "Cơm heo quay",
    "price": 45000,
    "desc": "Heo quay da giòn, cơm trắng, dưa leo, rau và nước chấm.",
    "images": [
      "images/img_22.jpg",
      "images/img_23.jpg",
      "images/img_24.jpg"
    ],
    "category": "Cơm"
  },
  {
    "id": 9,
    "name": "Cơm xá xíu",
    "price": 45000,
    "desc": "Xá xíu thơm mềm, cơm trắng, rau và nước sốt.",
    "images": [
      "images/img_25.jpg",
      "images/img_26.jpg",
      "images/img_27.jpg"
    ],
    "category": "Cơm"
  },
  {
    "id": 10,
    "name": "Cơm trứng ốp la",
    "price": 30000,
    "desc": "Trứng ốp la, cơm trắng, dưa leo, cà chua và nước mắm.",
    "images": [
      "images/img_28.jpg",
      "images/img_29.jpg",
      "images/img_30.jpg"
    ],
    "category": "Cơm"
  },
  {
    "id": 11,
    "name": "Cơm tôm rim",
    "price": 42000,
    "desc": "Tôm rim mặn ngọt, cơm trắng và rau củ.",
    "images": [
      "images/img_31.jpg",
      "images/img_32.jpg",
      "images/img_33.jpg"
    ],
    "category": "Cơm"
  },
  {
    "id": 12,
    "name": "Cơm cá chiên",
    "price": 40000,
    "desc": "Cá chiên giòn, cơm trắng, rau và nước mắm chua ngọt.",
    "images": [
      "images/img_34.jpg",
      "images/img_35.jpg",
      "images/img_36.jpg"
    ],
    "category": "Cơm"
  },
  {
    "id": 201,
    "name": "Bún thịt nướng",
    "price": 40000,
    "desc": "Bún tươi, thịt nướng than, rau sống, đồ chua, đậu phộng và nước mắm.",
    "images": [
      "images/bun-thit-nuong.jpg"
    ],
    "category": "Bún"
  },
  {
    "id": 203,
    "name": "Bún bò",
    "price": 45000,
    "desc": "Bún bò nước dùng đậm đà, thịt bò, chả và rau ăn kèm.",
    "images": [
      "images/bun-bo.jpg"
    ],
    "category": "Bún"
  },
  {
    "id": 204,
    "name": "Bún chả",
    "price": 40000,
    "desc": "Bún tươi, chả thịt nướng, rau sống và nước chấm chua ngọt.",
    "images": [
      "images/bun-cha.jpg"
    ],
    "category": "Bún"
  },
  {
    "id": 206,
    "name": "Bún thang",
    "price": 50000,
    "desc": "Bún thang Hà Nội với gà xé, trứng, giò, nấm và nước dùng thanh.",
    "images": [
      "images/bun-thang.jpg"
    ],
    "category": "Bún"
  },
  {
    "id": 207,
    "name": "Bún ốc",
    "price": 45000,
    "desc": "Bún ốc Hà Nội với ốc, cà chua, đậu phụ và nước dùng đậm vị.",
    "images": [
      "images/bun-oc.jpg"
    ],
    "category": "Bún"
  },
  {
    "id": 208,
    "name": "Bún riêu cua",
    "price": 40000,
    "desc": "Bún riêu cua, đậu phụ, cà chua, rau sống và mắm tôm tùy chọn.",
    "images": [
      "images/bun-rieu.jpg"
    ],
    "category": "Bún"
  },
  {
    "id": 218,
    "name": "Bún mọc",
    "price": 40000,
    "desc": "Bún mọc với viên mọc, nấm hương, hành lá và nước dùng xương.",
    "images": [
      "images/bun-moc.jpg"
    ],
    "category": "Bún"
  },
  {
    "id": 219,
    "name": "Bún bung",
    "price": 40000,
    "desc": "Bún bung dọc mùng, thịt, dọc mùng, cà chua và nước dùng thanh.",
    "images": [
      "images/bun-bung.jpg"
    ],
    "category": "Bún"
  },
  {
    "id": 202,
    "name": "Phở bò",
    "price": 45000,
    "desc": "Phở nước dùng trong, thịt bò mềm, hành lá và rau thơm.",
    "images": [
      "images/pho-bo.jpg"
    ],
    "category": "Phở"
  },
  {
    "id": 214,
    "name": "Phở cuốn",
    "price": 40000,
    "desc": "Bánh phở cuốn thịt bò xào, rau sống và nước chấm.",
    "images": [
      "images/pho-cuon.jpg"
    ],
    "category": "Phở"
  },
  {
    "id": 205,
    "name": "Bánh mì",
    "price": 30000,
    "desc": "Bánh mì giòn, pate, thịt, rau thơm và đồ chua.",
    "images": [
      "images/banh-mi.jpg"
    ],
    "category": "Bánh mì"
  },
  {
    "id": 209,
    "name": "Miến gà",
    "price": 40000,
    "desc": "Miến dong, thịt gà, hành và rau thơm trong nước dùng thanh.",
    "images": [
      "images/mien-ga.jpg"
    ],
    "category": "Miến"
  },
  {
    "id": 210,
    "name": "Miến lươn",
    "price": 45000,
    "desc": "Miến dong với lươn giòn, hành phi, giá và rau thơm.",
    "images": [
      "images/mien-luon.jpg"
    ],
    "category": "Miến"
  },
  {
    "id": 211,
    "name": "Mì vằn thắn",
    "price": 45000,
    "desc": "Mì trứng, thịt xá xíu, tôm, sủi cảo và nước dùng thơm.",
    "images": [
      "images/mi-van-than.jpg"
    ],
    "category": "Mì"
  },
  {
    "id": 212,
    "name": "Xôi xéo",
    "price": 25000,
    "desc": "Xôi nếp vàng, đậu xanh, hành phi và ruốc.",
    "images": [
      "images/xoi-xeo.jpg"
    ],
    "category": "Xôi"
  },
  {
    "id": 213,
    "name": "Xôi gà",
    "price": 35000,
    "desc": "Xôi nếp dẻo, thịt gà, hành phi và gia vị đậm đà.",
    "images": [
      "images/xoi-ga.jpg"
    ],
    "category": "Xôi"
  },
  {
    "id": 215,
    "name": "Nem rán",
    "price": 35000,
    "desc": "Nem rán vàng giòn, nhân thịt, miến, mộc nhĩ và rau sống.",
    "images": [
      "images/nem-ran.jpg"
    ],
    "category": "Món cuốn & chiên"
  },
  {
    "id": 216,
    "name": "Bánh gối",
    "price": 30000,
    "desc": "Bánh gối chiên giòn, nhân thịt, mộc nhĩ, miến và trứng.",
    "images": [
      "images/banh-goi.jpg"
    ],
    "category": "Món cuốn & chiên"
  },
  {
    "id": 217,
    "name": "Bánh tôm Hồ Tây",
    "price": 45000,
    "desc": "Bánh tôm chiên vàng giòn, tôm tươi, rau sống và nước chấm.",
    "images": [
      "images/banh-tom.jpg"
    ],
    "category": "Món đặc sản"
  },
  {
    "id": 220,
    "name": "Chè Hà Nội",
    "price": 25000,
    "desc": "Chè thập cẩm mát lạnh với đậu, thạch, nước cốt dừa và trân châu.",
    "images": [
      "images/che-ha-noi.jpg"
    ],
    "category": "Chè"
  },
  {
    "id": 101,
    "name": "Trà sữa truyền thống",
    "price": 25000,
    "desc": "Trà đen thơm, sữa béo nhẹ và trân châu dai mềm.",
    "images": [
      "images/drinks_user/tr-s-a-truy-n-th-ng.jpg"
    ],
    "category": "Trà sữa"
  },
  {
    "id": 102,
    "name": "Trà sữa trân châu đường đen",
    "price": 30000,
    "desc": "Sữa tươi, trà sữa thơm béo và sốt đường đen đậm vị.",
    "images": [
      "images/drinks_user/tr-s-a-tr-n-ch-u-ng-en.jpg"
    ],
    "category": "Trà sữa"
  },
  {
    "id": 103,
    "name": "Trà sữa khoai môn",
    "price": 30000,
    "desc": "Khoai môn thơm bùi kết hợp nền trà sữa mịn béo.",
    "images": [
      "images/drinks_user/tr-s-a-khoai-m-n.jpg"
    ],
    "category": "Trà sữa"
  },
  {
    "id": 104,
    "name": "Trà sữa matcha",
    "price": 30000,
    "desc": "Matcha xanh thơm nhẹ, sữa béo và trân châu.",
    "images": [
      "images/drinks_user/tr-s-a-matcha.jpg"
    ],
    "category": "Trà sữa"
  },
  {
    "id": 105,
    "name": "Trà sữa socola",
    "price": 30000,
    "desc": "Socola đậm vị hòa cùng trà sữa mịn, ngọt vừa.",
    "images": [
      "images/drinks_user/tr-s-a-socola.jpg"
    ],
    "category": "Trà sữa"
  },
  {
    "id": 106,
    "name": "Trà sữa pudding trứng",
    "price": 32000,
    "desc": "Trà sữa truyền thống kèm pudding trứng mềm mịn.",
    "images": [
      "images/drinks_user/tr-s-a-pudding-tr-ng.jpg"
    ],
    "category": "Trà sữa"
  },
  {
    "id": 301,
    "name": "Trà sữa Bá Vương",
    "price": 32000,
    "desc": "Trà sữa đậm vị, trân châu đen và topping béo thơm.",
    "images": [
      "images/drinks_user/tr-s-a-b-v-ng.jpg"
    ],
    "category": "Trà sữa"
  },
  {
    "id": 302,
    "name": "Trà sữa 3Q",
    "price": 30000,
    "desc": "Trà sữa thơm béo, kết hợp trân châu và topping 3Q.",
    "images": [
      "images/drinks_user/tr-s-a-3q.jpg"
    ],
    "category": "Trà sữa"
  },
  {
    "id": 303,
    "name": "Trà sữa 2J",
    "price": 30000,
    "desc": "Trà sữa mát lạnh với topping 2J dai giòn.",
    "images": [
      "images/drinks_user/tr-s-a-2j.jpg"
    ],
    "category": "Trà sữa"
  },
  {
    "id": 107,
    "name": "Trà đào cam sả",
    "price": 30000,
    "desc": "Trà thanh mát, đào ngọt, cam tươi và hương sả.",
    "images": [
      "images/drinks_user/tr-o-cam-s.jpg"
    ],
    "category": "Trà trái cây"
  },
  {
    "id": 108,
    "name": "Trà chanh dây",
    "price": 28000,
    "desc": "Chanh dây chua ngọt, trà thơm và đá mát lạnh.",
    "images": [
      "images/drinks_user/tr-chanh-d-y.jpg"
    ],
    "category": "Trà trái cây"
  },
  {
    "id": 109,
    "name": "Trà dâu tây",
    "price": 30000,
    "desc": "Dâu tây thơm dịu kết hợp trà thanh mát.",
    "images": [
      "images/drinks_user/tr-d-u-t-y.jpg"
    ],
    "category": "Trà trái cây"
  },
  {
    "id": 110,
    "name": "Trà vải",
    "price": 30000,
    "desc": "Vải ngọt thanh, trà thơm và lát vải giòn mọng.",
    "images": [
      "images/drinks_user/tr-v-i.jpg"
    ],
    "category": "Trà trái cây"
  },
  {
    "id": 304,
    "name": "Hồng trà chanh",
    "price": 25000,
    "desc": "Hồng trà thanh mát, chanh tươi và đá lạnh.",
    "images": [
      "images/drinks_user/hong-tra-chanh_1.jpg",
      "images/drinks_user/hong-tra-chanh_2.jpg",
      "images/drinks_user/hong-tra-chanh_3.jpg"
    ],
    "category": "Trà trái cây"
  },
  {
    "id": 306,
    "name": "Hồng trà vải",
    "price": 30000,
    "desc": "Hồng trà thơm nhẹ, vị vải ngọt thanh.",
    "images": [
      "images/drinks_user/hong-tra-vai_1.jpg",
      "images/drinks_user/hong-tra-vai_2.jpg",
      "images/drinks_user/hong-tra-vai_3.jpg"
    ],
    "category": "Trà trái cây"
  },
  {
    "id": 309,
    "name": "Trà cam",
    "price": 30000,
    "desc": "Trà cam tươi mát, vị cam tự nhiên dễ uống.",
    "images": [
      "images/drinks_user/tra-cam_1.jpg",
      "images/drinks_user/tra-cam_2.jpg",
      "images/drinks_user/tra-cam_3.jpg"
    ],
    "category": "Trà trái cây"
  },
  {
    "id": 305,
    "name": "Trà chanh lô hội",
    "price": 28000,
    "desc": "Trà chanh dịu mát kết hợp nha đam giòn nhẹ.",
    "images": [
      "images/drinks_user/tra-chanh-lo-hoi_1.jpg",
      "images/drinks_user/tra-chanh-lo-hoi_2.jpg",
      "images/drinks_user/tra-chanh-lo-hoi_3.jpg"
    ],
    "category": "Trà trái cây"
  },
  {
    "id": 308,
    "name": "Trà ô long Kiwi",
    "price": 32000,
    "desc": "Trà ô long thanh nhẹ kết hợp kiwi chua ngọt.",
    "images": [
      "images/drinks_user/tra-o-long-kiwi_1.jpg",
      "images/drinks_user/tra-o-long-kiwi_2.jpg",
      "images/drinks_user/tra-o-long-kiwi_3.jpg"
    ],
    "category": "Trà trái cây"
  },
  {
    "id": 307,
    "name": "Trà đào",
    "price": 30000,
    "desc": "Trà đào thơm dịu, đào ngọt mát và thạch đào.",
    "images": [
      "images/drinks_user/tra-dao_1.jpg",
      "images/drinks_user/tra-dao_2.jpg",
      "images/drinks_user/tra-dao_3.jpg"
    ],
    "category": "Trà trái cây"
  },
  {
    "id": 114,
    "name": "Matcha đá xay",
    "price": 35000,
    "desc": "Matcha xay lạnh mịn, sữa béo và lớp kem nhẹ.",
    "images": [
      "images/drinks_user/matcha-xay.jpg"
    ],
    "category": "Đá xay"
  },
  {
    "id": 115,
    "name": "Cookies đá xay",
    "price": 35000,
    "desc": "Bánh cookies xay cùng sữa, đá và kem mềm.",
    "images": [
      "images/drinks_user/cookies-xay.jpg"
    ],
    "category": "Đá xay"
  },
  {
    "id": 116,
    "name": "Socola đá xay",
    "price": 35000,
    "desc": "Socola đậm đà xay mịn cùng sữa và đá.",
    "images": [
      "images/drinks_user/socola-xay.jpg"
    ],
    "category": "Đá xay"
  },
  {
    "id": 117,
    "name": "Khoai môn đá xay",
    "price": 35000,
    "desc": "Khoai môn bùi thơm xay lạnh, vị ngọt vừa.",
    "images": [
      "images/drinks_user/khoai-m-n-xay.jpg"
    ],
    "category": "Đá xay"
  },
  {
    "id": 118,
    "name": "Dâu tây đá xay",
    "price": 35000,
    "desc": "Dâu tây xay mát lạnh, thơm dịu và dễ uống.",
    "images": [
      "images/drinks_user/d-u-t-y-xay.jpg"
    ],
    "category": "Đá xay"
  },
  {
    "id": 119,
    "name": "Xoài đá xay",
    "price": 35000,
    "desc": "Xoài chín xay mịn, chua ngọt và mát lạnh.",
    "images": [
      "images/drinks_user/xo-i-xay.jpg"
    ],
    "category": "Đá xay"
  },
  {
    "id": 120,
    "name": "Kem vani",
    "price": 20000,
    "desc": "Kem vani mềm mịn, thơm nhẹ và ngọt vừa.",
    "images": [
      "images/drinks_user/kem-vani.jpg"
    ],
    "category": "Kem"
  },
  {
    "id": 121,
    "name": "Kem socola",
    "price": 20000,
    "desc": "Kem socola béo thơm, vị cacao dịu.",
    "images": [
      "images/drinks_user/kem-socola.jpg"
    ],
    "category": "Kem"
  },
  {
    "id": 122,
    "name": "Kem matcha",
    "price": 22000,
    "desc": "Kem matcha thơm trà xanh, mát và ít ngấy.",
    "images": [
      "images/drinks_user/kem-matcha.jpg"
    ],
    "category": "Kem"
  },
  {
    "id": 123,
    "name": "Kem dâu",
    "price": 22000,
    "desc": "Kem dâu thơm dịu, màu hồng nhẹ và vị trái cây.",
    "images": [
      "images/drinks_user/kem-d-u.jpg"
    ],
    "category": "Kem"
  },
  {
    "id": 124,
    "name": "Kem 2 vị",
    "price": 25000,
    "desc": "Kết hợp hai vị kem trong một phần để dễ lựa chọn.",
    "images": [
      "images/drinks_user/kem-2-v.jpg"
    ],
    "category": "Kem"
  },
  {
    "id": 125,
    "name": "Kem 3 vị",
    "price": 25000,
    "desc": "Kem kết hợp ba vị vani, socola và dâu, mát lạnh dễ ăn.",
    "images": [
      "images/drinks_user/kem-3-v.jpg"
    ],
    "category": "Kem"
  },
  {
    "id": 14,
    "name": "Coca-Cola",
    "price": 12000,
    "desc": "Nước ngọt có ga Coca-Cola.",
    "images": [
      "images/img_37.jpg",
      "images/img_38.jpg",
      "images/img_39.jpg"
    ],
    "category": "Nước giải khát"
  },
  {
    "id": 15,
    "name": "Pepsi",
    "price": 12000,
    "desc": "Nước ngọt có ga Pepsi.",
    "images": [
      "images/img_40.jpg",
      "images/img_41.jpg",
      "images/img_42.jpg"
    ],
    "category": "Nước giải khát"
  },
  {
    "id": 16,
    "name": "7 Up",
    "price": 12000,
    "desc": "Nước ngọt có ga 7 Up.",
    "images": [
      "images/img_43.jpg",
      "images/img_44.jpg",
      "images/img_45.jpg"
    ],
    "category": "Nước giải khát"
  },
  {
    "id": 310,
    "name": "Nước chanh tươi",
    "price": 22000,
    "desc": "Chanh tươi pha mát lạnh, vị chua ngọt giải khát.",
    "images": [
      "images/drinks_user/nuoc-chanh-tuoi_1.jpg",
      "images/drinks_user/nuoc-chanh-tuoi_2.jpg",
      "images/drinks_user/nuoc-chanh-tuoi_3.jpg"
    ],
    "category": "Nước giải khát"
  }
];
