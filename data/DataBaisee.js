const baisee = [
    { 
      id: '1',
      title: 'บายศรีแบบที่ 1', 
      content: 'บายศรีแบบที่1', 
      detail:'รายละเอียด',
      howto: 'วิธีใช้ : ',
      warning: 'คำเตือน : ห้ามรับประทาน',
      image: '/images/products/BS1.png',
      image_detail:'/images/products/BS1.png'
    },
    {id: '2',
      title: 'บายศรีปากชาม', 
      content: 'บายศรีที่ทำจากใบตองแล้วจัดวางลงบนชามหรือถ้วย จึงถูกเรียกว่า "บายศรีปากชาม"', 
      detail:'รายละเอียด',
      howto: 'วิธีใช้ : ',
      warning: 'คำเตือน : ห้ามรับประทาน',
      image: '/images/products/BS2.png',
      image_detail:'/images/products/BS1.png'
    },
    { id: '3',
      title: 'บายศรีแบบที่ 3', 
      content: 'บายศรีแบบที่3',
      detail:'รายละเอียด', 
      howto: 'วิธีใช้ : ',
      warning: 'คำเตือน : ห้ามรับประทาน',
      image: '/images/products/BS3.png',
      image_detail:'/images/products/BS1.png'
    },
  ];
  
  export const getDataBaisee = () => {
    return {
      baisee: baisee
    };
  };
  