const skt = [
    { 
      id:'1',
      title: 'สังฆทานแบบที่ 1', 
      content: 'แบบที่1',
      detail:'รายละเอียด',
      howto: 'วิธีใช้ : ',
      warning: 'คำเตือน : ห้ามรับประทาน',
      image: '/images/products/skt/SKT1.png',
      image_detail: '/images/products/skt/SKT1.png'
    },
    {
      id:'2',
      title: 'สังฆทานแบบที่ 2', 
      content: 'แบบที่ 2',
      detail:'รายละเอียด',
      howto: 'วิธีใช้ : ',
      warning: 'คำเตือน : ห้ามรับประทาน',
      image: '/images/products/skt/SKT2.png',
      image_detail: '/images/products/skt/SKT1.png'
    },
  ];
  
  export const getDataSKT = () => {
    return {
      skt: skt
    };
  };
  